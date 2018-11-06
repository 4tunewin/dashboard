import { compose, withState, lifecycle } from 'recompose';
import { withFormik } from 'formik';

import withModal from '../../../../lib/withModal';
import { DiceContract } from '../../../../contracts';
import ChangeMaxProfit from '../../components/profit/ChangeMaxProfit';

const { web3 } = window;

/**
 * Handle form sumission by changing max profit to
 * specified amount
 */
const handleSubmit = async (
    { amount },
    { validateForm, setSubmitting, setErrors, setStatus, props },
) => {
    const contract = await DiceContract.deployed();

    try {
        await contract.setMaxProfit(web3.toWei(amount, 'ether'), {
            from: web3.eth.accounts[0],
        });
        props.onClose();
    } catch (e) {
        setStatus({
            type: 'error',
            msg: 'Failed to change max bet reward',
            reason: e.message,
        });
    } finally {
        setSubmitting(false);
    }
};

/**
 * Make sure that specified amount is not zero
 */
const validate = async values => {
    const errors = {};

    const amount = parseFloat(values.amount, 16);
    if (!amount || amount <= 0) {
        errors.amount = 'Specify amount to change max bet reward';
    }

    if (Object.keys(errors).length) {
        throw errors;
    }
};

/**
 * Fetch current max profit value and pass it to the form
 * as default value for amount field.
 */
const withMaxProfit = withState('amount', 'setAmount');
const componentDidMount = async function() {
    const maxProfit = await DiceContract.deployed().then(instance => {
        return instance.maxProfit();
    });

    this.props.setAmount(web3.fromWei(maxProfit, 'ether'));
};

export default compose(
    withModal,
    withMaxProfit,
    lifecycle({ componentDidMount }),
    withFormik({
        handleSubmit,
        validate,
        enableReinitialize: true,
    }),
)(ChangeMaxProfit);
