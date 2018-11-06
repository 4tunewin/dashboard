import { compose, withHandlers } from 'recompose';

import { DiceContract } from '../../../../contracts';
import CurrentAddress from '../../components/secretSigner/CurrentAddress';

/**
 * Fetch current owner address
 */
const fetchAsync = ownProps => () => {
    return DiceContract.deployed().then(instance => {
        return instance.owner();
    });
};

export default compose(withHandlers({ fetchAsync }))(CurrentAddress);
