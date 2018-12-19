import { compose } from 'recompose';
import { withFormik } from 'formik';
import { promisify } from 'bluebird';

import withModal from '../../../../lib/withModal';
import { DiceContract } from '../../../../contracts';
import ChangeJackpot from '../../components/jackpot/ChangeJackpot';

/**
 * Handle form sumission by increasing jackpot to
 * specified amount
 */
const handleSubmit = async (
    { amount },
    { validateForm, setSubmitting, setErrors, setStatus, props },
) => {
    const contract = await DiceContract.deployed();

    try {
        await contract.increaseJackpot(window.web3.toWei(amount, 'ether'), {
            from: window.web3.eth.accounts[0],
        });
        props.onClose();
    } catch (e) {
        setStatus({
            type: 'error',
            msg: 'Failed to increase jackpot',
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
        errors.amount = 'Specify amount to increase jackpot';
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
)(ChangeJackpot);
