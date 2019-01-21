import { compose } from 'recompose';
import { withFormik } from 'formik';

import withModal from '../../../../lib/withModal';
import { DiceContract } from '../../../../contracts';
import ChangeCroupier from '../../components/croupier/ChangeCroupier';

/**
 * Handle form sumission by changing croupier
 * to specified address
 */
const handleSubmit = async (
    { address },
    { validateForm, setSubmitting, setErrors, setStatus, props },
) => {
    const contract = await DiceContract.deployed();

    try {
        await contract.setCroupier(address, {
            from: window.web3.eth.accounts[0],
        });
        props.onClose();
    } catch (e) {
        setStatus({
            type: 'error',
            msg: 'Failed to change croupier',
            reason: e.message,
        });
    } finally {
        setSubmitting(false);
    }
};

/**
 * Make sure that user has provided a new croupier address
 */
const validate = async values => {
    const errors = {};

    if (!values.address) {
        errors.address = 'Specify a new croupier address';
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
)(ChangeCroupier);
