import { compose, withHandlers, withProps } from 'recompose';

import { DiceContract } from '../../../contracts';
import Details from '../components/Details';

/**
 * Fetch contract owner address
 */
const fetchOwnerAsync = ownProps => () => {
    return DiceContract.deployed().then(instance => {
        return instance.owner();
    });
};

/**
 * Fetch secret signer address
 */
const fetchSecretSignerAsync = ownProps => () => {
    return DiceContract.deployed().then(instance => {
        return instance.owner();
    });
};

const withConstants = withProps(ownProps => ({
    constants: DiceContract.constants,
}));

export default compose(
    withConstants,
    withHandlers({ fetchOwnerAsync, fetchSecretSignerAsync }),
)(Details);
