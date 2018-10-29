import React from 'react';
import { Statistic } from 'semantic-ui-react';

const Bets = ({ bets }) => (
    <Statistic>
        <Statistic.Value>{bets}</Statistic.Value>
        <Statistic.Label>24h / bets</Statistic.Label>
    </Statistic>
);

export default Bets;
