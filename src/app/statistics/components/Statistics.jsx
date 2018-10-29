import React from 'react';
import { Statistic } from 'semantic-ui-react';

import Balance from '../containers/Balance';
import Bets from '../containers/Bets';
import Wins from '../containers/Wins';
import Jackpot from '../containers/Jackpot';
import LockedInBets from '../containers/LockedInBets';
import Holders from './Holders';

const Statistics = () => (
    <Statistic.Group size="mini">
        <Balance />
        <Bets />
        <Wins />
        <Jackpot />
        <LockedInBets />
        <Holders />
    </Statistic.Group>
);

export default Statistics;
