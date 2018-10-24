import React from 'react';
import { Statistic } from 'semantic-ui-react';

import { AsyncValue } from '../../common';

const Jackpot = ({ fetchJackpotAsync }) => (
    <Statistic>
        <Statistic.Value>
            <AsyncValue
                fetch={fetchJackpotAsync}
                placeholder="0.000"
                interval={100}
            />
        </Statistic.Value>
        <Statistic.Label>Jackpot</Statistic.Label>
    </Statistic>
);

export default Jackpot;
