import { compose, withState, withHandlers } from 'recompose';

import withModal from '../../../../lib/withModal';
import { DiceContract } from '../../../../contracts';
import TerminateContract from '../../components/terminate/TerminateContract';

const { web3 } = window;

// Holds state of the action
const withStatus = withState('status', 'setStatus');

/**
 * Handles confirmation action by terminating account.
 */
const withConfirmationHandler = withHandlers({
    onConfirm: ({ onClose, setStatus }) => async () => {
        const contract = await DiceContract.deployed();

        try {
            await contract.kill({
                from: web3.eth.accounts[0],
            });

            onClose();
        } catch (e) {
            setStatus({
                type: 'error',
                msg: 'Failed to terminate contract',
                reason: e.message,
            });
        }
    },
});

export default compose(
    withModal,
    withStatus,
    withConfirmationHandler,
)(TerminateContract);
