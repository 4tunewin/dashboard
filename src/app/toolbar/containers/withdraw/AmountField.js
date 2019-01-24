import { withHandlers } from 'recompose';
import { promisify } from 'bluebird';
import { round } from 'lodash';

import { DiceContract } from '../../../../contracts';
import AmountField from '../../components/withdraw/AmountField';

const withIncBy = withHandlers({
    /**
     * Fill withdraw field with specified percent from total contract balance.
     */
    incBy: ({ field }) => {
        return async value => {
            const balance = await DiceContract.deployed()
                .then(instance => {
                    const getBalance = promisify(window.web3.eth.getBalance, {
                        context: window.web3,
                    });
                    return getBalance(instance.address);
                })
                .then(balance => {
                    return window.web3.fromWei(balance, 'ether');
                });

            const amount = round(balance * parseFloat(value, 10), 6);

            field.onChange({
                target: {
                    name: field.name,
                    value: amount,
                },
            });
        };
    },
});

export default withIncBy(AmountField);
