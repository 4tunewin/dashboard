import React from 'react';
import styled from 'styled-components';
import { Statistic } from 'semantic-ui-react';

import Balance from '../containers/Balance';
import Bets from '../containers/Bets';
import Wins from '../containers/Wins';
import Jackpot from '../containers/Jackpot';
import LockedInBets from '../containers/LockedInBets';
import Holders from './Holders';

const Group = styled(Statistic.Group)`
    justify-content: center;

    & > :first-child {
        margin-left: 0px !important;
    }
`;

const Statistics = () => (
    <Group size="mini">
        <Balance />
        <Bets />
        <Wins />
        <Jackpot />
        <LockedInBets />
        <Holders />
    </Group>
);

export default Statistics;
