import { compose } from 'recompose';
import { withFormik } from 'formik';
import { promisify } from 'bluebird';

import withModal from '../../../../lib/withModal';
import { DiceContract } from '../../../../contracts';
import Withdraw from '../../components/withdraw/Withdraw';

/**
 * Handle form submission by withdrawing specified
 * amount from contract balance.
 */
const handleSubmit = async (
    { amount, beneficiary },
    { validateForm, setSubmitting, setErrors, setStatus, props },
) => {
    const contract = await DiceContract.deployed();

    try {
        await contract.withdrawFunds(
            beneficiary,
            window.web3.toWei(amount, 'ether'),
            {
                from: window.web3.eth.accounts[0],
            },
        );
        props.onClose();
    } catch (e) {
        setStatus({
            type: 'error',
            msg: 'Failed to withdraw funds',
            reason: e.message,
        });
    } finally {
        setSubmitting(false);
    }
};

/**
 * Make sure that specified amount is not zero and not
 * greater then contract balance
 */
const validate = async values => {
    const errors = {};

    const amount = parseFloat(values.amount, 16);
    if (!amount || amount <= 0) {
        errors.amount = 'Specify amount you want to withdraw';
    } else {
        const getBalance = promisify(window.web3.eth.getBalance, {
            context: window.web3,
        });
        const maxAmount = await DiceContract.deployed()
            .then(instance => {
                return getBalance(instance.address);
            })
            .then(balance => {
                return window.web3.fromWei(balance.toNumber(), 'ether');
            });

        if (amount > maxAmount) {
            errors.amount =
                'Specified amount is greater then balance of contract';
        }
    }

    if (!values.beneficiary) {
        errors.beneficiary = 'Select witdraw address';
    }

    if (Object.keys(errors).length) {
        throw errors;
    }
};

export default compose(
    withModal,
    withFormik({
        handleSubmit,
        validate,
    }),
)(Withdraw);
