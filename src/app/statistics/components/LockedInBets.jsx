import React from 'react';
import { Statistic } from 'semantic-ui-react';

import { AsyncValue } from '../../common';

const LockedInBets = ({ fetchLockedInBetsAsync }) => (
    <Statistic>
        <Statistic.Value>
            <AsyncValue
                fetch={fetchLockedInBetsAsync}
                placeholder="0.000"
                interval={2000}
            />
        </Statistic.Value>
        <Statistic.Label>Locked</Statistic.Label>
    </Statistic>
);

export default LockedInBets;
