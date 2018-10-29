import React from 'react';
import { Statistic } from 'semantic-ui-react';

const Amount = ({ amount }) => (
    <Statistic>
        <Statistic.Value>{amount}</Statistic.Value>
        <Statistic.Label>24h / wins</Statistic.Label>
    </Statistic>
);

export default Amount;
