import React from 'react';
import { Statistic } from 'semantic-ui-react';

import { AsyncValue } from '../../common';

const Balance = ({ fetchBalanceAsync }) => (
    <Statistic>
        <Statistic.Value>
            <AsyncValue
                fetch={fetchBalanceAsync}
                placeholder="0.000"
                interval={2000}
            />
        </Statistic.Value>
        <Statistic.Label>Balance</Statistic.Label>
    </Statistic>
);

export default Balance;
