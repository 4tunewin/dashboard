import { withHandlers } from 'recompose';
import { promisify } from 'bluebird';
import { DiceContract } from '../../../../contracts';

import AmountField from '../../components/withdraw/AmountField';

const withMaxClick = withHandlers({
    onClickMax: ({ field }) => {
        const { web3 } = window;

        return async () => {
            const maxAmount = await DiceContract.deployed().then(instance => {
                const getBalance = promisify(web3.eth.getBalance, {
                    context: web3,
                });
                return getBalance(instance.address);
            });

            field.onChange({
                target: {
                    name: field.name,
                    value: web3.fromWei(maxAmount.toNumber(), 'ether'),
                },
            });
        };
    },
});

export default withMaxClick(AmountField);
