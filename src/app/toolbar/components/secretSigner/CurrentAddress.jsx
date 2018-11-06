import React from 'react';
import { Icon } from 'semantic-ui-react';

import { AsyncValue, ExplorerLink } from '../../../common';

const DUMMY_ADDRESS = '0x0000000000000000000000000000000000000000';

const CurrentAddress = ({ fetchSecretSignerAsync }) => (
    <AsyncValue fetch={fetchSecretSignerAsync} placeholder={DUMMY_ADDRESS}>
        {({ value }) => (
            <p>
                <span>Current: </span>
                <ExplorerLink address={value} />
            </p>
        )}
    </AsyncValue>
);

export default CurrentAddress;
