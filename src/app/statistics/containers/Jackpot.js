import { withHandlers } from 'recompose';

import { DiceContract } from '../../../contracts';
import Jackpot from '../components/Jackpot';

/**
 * Fetch current jacpot amount
 */
const fetchJackpotAsync = ownProps => () => {
    return DiceContract.deployed()
        .then(instance => {
            return instance.jackpotSize();
        })
        .then(amount => {
            return window.web3.fromWei(amount, 'ether');
        })
        .then(amount => {
            return amount.toFixed(3);
        });
};

export default withHandlers({ fetchJackpotAsync })(Jackpot);
