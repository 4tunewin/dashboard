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
        return instance.secretSigner();
    });
};

/**
 * Fetch croupier address
 */
const fetchCroupierAsync = ownProps => () => {
    return DiceContract.deployed().then(instance => {
        return instance.croupier();
    });
};

/**
 * Fetch max profit value
 */
const fetchMaxProfitAsync = ownProps => () => {
    return DiceContract.deployed()
        .then(instance => {
            return instance.maxProfit();
        })
        .then(amount => {
            return window.web3.fromWei(amount, 'ether');
        })
        .then(amount => {
            return amount.toFixed(3);
        });
};

const withConstants = withProps(ownProps => ({
    constants: DiceContract.constants,
}));

export default compose(
    withConstants,
    withHandlers({
        fetchOwnerAsync,
        fetchSecretSignerAsync,
        fetchCroupierAsync,
        fetchMaxProfitAsync,
    }),
)(Details);
