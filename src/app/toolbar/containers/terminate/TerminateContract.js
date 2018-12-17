import { compose } from 'recompose';
import { withFormik } from 'formik';

import withModal from '../../../../lib/withModal';
import { DiceContract } from '../../../../contracts';
import TerminateContract from '../../components/terminate/TerminateContract';

// Phrase that confirms that user sure about his action
const TERMINATION_PHRASE = 'TERMINATE CONTRACT';

/**
 * Handle form sumission by changing secret signer
 * to specified address
 */
const handleSubmit = async (
    { address },
    { validateForm, setSubmitting, setErrors, setStatus, props },
) => {
    const contract = await DiceContract.deployed();

    try {
        await contract.kill({
            from: window.web3.eth.accounts[0],
        });
        props.onClose();
    } catch (e) {
        setStatus({
            type: 'error',
            msg: 'Failed to terminate contract',
            reason: e.message,
        });
    } finally {
        setSubmitting(false);
    }
};

/**
 * Make sure that user has provided a new secret signer address
 */
const validate = async values => {
    const errors = {};

    if (values.message !== TERMINATION_PHRASE) {
        errors.message = `Please type "${TERMINATION_PHRASE}" to confirm your action.`;
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
)(TerminateContract);
