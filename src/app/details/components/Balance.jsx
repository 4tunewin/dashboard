import React from 'react';
import { AsyncValue } from '../../common';

const Balance = ({ fetchBalanceAsync }) => (
    <AsyncValue fetch={fetchBalanceAsync} placeholder="0.000" interval={2000} />
);

export default Balance;
