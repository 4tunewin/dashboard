import { withFormik } from 'formik';
import { promisify } from 'bluebird';

import { DiceContract } from '../../../contracts';
import Topup from '../components/Topup';

const { web3 } = window;

/**
 * Handle form submission by sending specified
 * amount on contract balance.
 */
const handleSubmit = async (
    { amount },
    { validateForm, setSubmitting, setErrors, setStatus },
) => {
    const contract = await DiceContract.deployed();

    try {
        await contract.send(web3.toWei(amount, 'ether'));
        setStatus({ type: 'success', msg: 'Fundigs were successfully sent' });
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
        const getBalance = promisify(web3.eth.getBalance, { context: web3 });
        const maxAmount = await getBalance(web3.eth.accounts[0]).then(
            balance => {
                return web3.fromWei(balance.toNumber(), 'ether');
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

export default withFormik({
    handleSubmit,
    validate,
})(Topup);
