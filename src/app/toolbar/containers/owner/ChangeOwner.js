import { compose, withHandlers } from 'recompose';
import { withFormik } from 'formik';

import withModal from '../../../../lib/withModal';
import { DiceContract } from '../../../../contracts';
import ChangeOwner from '../../components/owner/ChangeOwner';

/**
 * Handle form sumission by set as a next owner
 * specified address
 */
const handleSubmit = async (
    { address },
    { validateForm, setSubmitting, setErrors, setStatus, props },
) => {
    const contract = await DiceContract.deployed();

    try {
        await contract.approveNextOwner(address, {
            from: window.web3.eth.accounts[0],
        });
        setStatus({
            type: 'success',
            msg: 'Next owner address is approved, you can accept it now.',
        });
    } catch (e) {
        setStatus({
            type: 'error',
            msg: 'Failed to approve next owner',
            reason: e.message,
        });
    } finally {
        setSubmitting(false);
    }
};

const handleAcceptOwner = withHandlers({
    acceptOwner: ({ setStatus, onClose }) => async () => {
        const contract = await DiceContract.deployed();

        try {
            await contract.acceptNextOwner({
                from: web3.eth.accounts[0],
            });

            onClose();
        } catch (e) {
            setStatus({
                type: 'error',
                msg: 'Failed to approve next owner',
                reason: e.message,
            });
        }
    },
});

/**
 * Make sure that user has provided a new owner address
 */
const validate = async values => {
    const errors = {};

    if (!values.address) {
        errors.address = 'Specify an address of next owner';
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
    handleAcceptOwner,
)(ChangeOwner);
