import { compose } from 'recompose';
import { withFormik } from 'formik';

import withModal from '../../../../lib/withModal';
import { DiceContract } from '../../../../contracts';
import ChangeSecretSigner from '../../components/secretSigner/ChangeSecretSigner';

const { web3 } = window;

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
        await contract.setSecretSigner(address, {
            from: web3.eth.accounts[0],
        });
        props.onClose();
    } catch (e) {
        setStatus({
            type: 'error',
            msg: 'Failed to change secret signer',
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

    if (!values.address) {
        errors.address = 'Specify a new secret signer address';
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
)(ChangeSecretSigner);
