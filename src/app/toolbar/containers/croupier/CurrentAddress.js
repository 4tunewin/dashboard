import { compose, withHandlers } from 'recompose';

import { DiceContract } from '../../../../contracts';
import CurrentAddress from '../../components/croupier/CurrentAddress';

/**
 * Fetch croupier address
 */
const fetchAsync = ownProps => () => {
    return DiceContract.deployed().then(instance => {
        return instance.croupier();
    });
};

export default compose(withHandlers({ fetchAsync }))(CurrentAddress);
