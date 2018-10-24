import TruffleContract from 'truffle-contract';
import Dice from './Dice.json';

import constants from '../lib/constants';

const DiceContract = TruffleContract(Dice);
if (window.web3) {
    DiceContract.setProvider(window.web3.currentProvider);
}

DiceContract.constants = constants.bind(DiceContract)();

export default DiceContract;
