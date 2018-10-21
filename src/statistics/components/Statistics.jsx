import React from 'react';
import { Statistic } from 'semantic-ui-react';

import Balance from './Balance';
import Bets from './Bets';
import Jackpot from './Jackpot';
import LockedInBets from './LockedInBets';

const Statistics = () => (
    <Statistic.Group size="small" centered>
        <Balance />
        <Bets />
        <Jackpot />
        <LockedInBets />
    </Statistic.Group>
);

export default Statistics;
