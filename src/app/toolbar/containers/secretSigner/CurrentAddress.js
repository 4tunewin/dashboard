import { compose, withHandlers } from 'recompose';

import { DiceContract } from '../../../../contracts';
import CurrentAddress from '../../components/secretSigner/CurrentAddress';

/**
 * Fetch secret signer address
 */
const fetchAsync = ownProps => () => {
    return DiceContract.deployed().then(instance => {
        return instance.secretSigner();
    });
};

export default compose(withHandlers({ fetchAsync }))(CurrentAddress);
