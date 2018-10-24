import React from 'react';

import { AsyncValue } from '../../common';

/**
 * Returns nametwork name based on provided ID
 */
const getNameById = id => {
    switch (id) {
        case 0:
            return 'Olympic';
        case 1:
            return 'Frontier';
        case 2:
            return 'Morden';
        case 3:
            return 'Ropsten';
        case 4:
            return 'Rinkeby';
        case 42:
            return 'Kovan';
        case 77:
            return 'Sokol';
        case 99:
            return 'POA';
        default:
            return `Private`;
    }
};

const NetworkName = ({ fetchNetworkAsync }) => (
    <AsyncValue fetch={fetchNetworkAsync} placeholder="Unknown">
        {({ value }) => `${getNameById(value)} Net (${value})`}
    </AsyncValue>
);

export default NetworkName;
