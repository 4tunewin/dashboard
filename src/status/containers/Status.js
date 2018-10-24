import { withHandlers } from 'recompose';
import { promisify } from 'bluebird';

import { DiceContract } from '../../contracts';
import Status from '../components/Status';

/**
 * Fetch contract owner address
 */
const fetchAddressAsync = ownProps => () => {
    return DiceContract.deployed().then(instance => {
        return instance.address;
    });
};

export default withHandlers({ fetchAddressAsync })(Status);
