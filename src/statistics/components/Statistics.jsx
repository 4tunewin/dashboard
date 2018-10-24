import React from 'react';
import { Statistic } from 'semantic-ui-react';

import Balance from '../containers/Balance';
import Bets from './Bets';
import Jackpot from '../containers/Jackpot';
import LockedInBets from '../containers/LockedInBets';

const Statistics = () => (
    <Statistic.Group size="small" centered>
        <Balance />
        <Bets />
        <Jackpot />
        <LockedInBets />
    </Statistic.Group>
);

export default Statistics;
