import React from 'react';

import config from '../../config';

/**
 * Represents link to explorer with specified address
 */
const ExplorerLink = ({ address }) => (
    <a target="_blank" href={`${config.explorerUrl}/address/${address}`}>
        {address}
    </a>
);

export default ExplorerLink;
