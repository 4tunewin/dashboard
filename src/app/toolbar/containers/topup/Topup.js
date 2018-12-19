import { compose } from 'recompose';
import { withFormik } from 'formik';
import { promisify } from 'bluebird';

import withModal from '../../../../lib/withModal';
import { DiceContract } from '../../../../contracts';
import Topup from '../../components/topup/Topup';

/**
 * Handle form submission by sending specified
 * amount on contract balance.
 */
const handleSubmit = async (
    { amount },
    { validateForm, setSubmitting, setErrors, setStatus, props },
) => {
    const contract = await DiceContract.deployed();

    try {
        await contract.sendTransaction({
            from: window.web3.eth.accounts[0],
            value: window.web3.toWei(amount, 'ether'),
        });
        props.onClose();
    } catch (e) {
        setStatus({
            type: 'error',
            msg: 'Failed to top-up contract',
            reason: e.message,
        });
    } finally {
        setSubmitting(false);
    }
};

/**
 * Make sure that specified amount is not zero and not
 * greater then balance of current wallet.
 */
const validate = async values => {
    const errors = {};

    const amount = parseFloat(values.amount, 16);
    if (!amount || amount <= 0) {
        errors.amount = 'Specify amount you want to transfer';
    } else {
        const getBalance = promisify(window.web3.eth.getBalance, {
            context: window.web3,
        });
        const maxAmount = await getBalance(window.web3.eth.accounts[0]).then(
            balance => {
                return window.web3.fromWei(balance.toNumber(), 'ether');
            },
        );

        if (amount > maxAmount) {
            errors.amount =
                'Specified amount is greater then balance of your wallet';
        }
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
)(Topup);
