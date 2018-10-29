import { withHandlers } from 'recompose';
import { promisify } from 'bluebird';

import { DiceContract } from '../../../contracts';
import Balance from '../components/Balance';

/**
 * Fetch balance from contract
 */
const fetchBalanceAsync = ownProps => () => {
    const { web3 } = window;
    const getBalance = promisify(web3.eth.getBalance, { context: web3 });

    return DiceContract.deployed()
        .then(instance => {
            return getBalance(instance.address);
        })
        .then(amount => {
            return window.web3.fromWei(amount, 'ether');
        })
        .then(amount => {
            return amount.toFixed(3);
        });
};

export default withHandlers({ fetchBalanceAsync })(Balance);
