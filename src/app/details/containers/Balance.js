import { withHandlers } from 'recompose';
import { promisify } from 'bluebird';

import Balance from '../components/Balance';

const DUMMY_ADDRESS = '0x0000000000000000000000000000000000000000';

/**
 * Fetch balance from contract
 */
const fetchBalanceAsync = ({ address }) => () => {
    if (address === DUMMY_ADDRESS) {
        return Promise.resolve('0.000');
    }

    const { web3 } = window;
    const getBalance = promisify(web3.eth.getBalance, { context: web3.eth });

    return getBalance(address)
        .then(amount => {
            return window.web3.fromWei(amount, 'ether');
        })
        .then(amount => {
            return amount.toFixed(3);
        });
};

export default withHandlers({ fetchBalanceAsync })(Balance);
