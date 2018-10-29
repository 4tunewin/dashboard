import { withHandlers } from 'recompose';

import { DiceContract } from '../../../contracts';
import LockedInBets from '../components/LockedInBets';

/**
 * Fetch amount locked in bets
 */
const fetchLockedInBetsAsync = ownProps => () => {
    return DiceContract.deployed()
        .then(instance => {
            return instance.lockedInBets();
        })
        .then(amount => {
            return window.web3.fromWei(amount, 'ether');
        })
        .then(amount => {
            return amount.toFixed(3);
        });
};

export default withHandlers({ fetchLockedInBetsAsync })(LockedInBets);
