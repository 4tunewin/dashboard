import React from 'react';
import { List } from 'semantic-ui-react';

import { AsyncValue, ExplorerLink } from '../../common';
import NetworkName from '../containers/NetworkName';

const DUMMY_ADDRESS = '0x0000000000000000000000000000000000000000';

const Status = ({ fetchNetworkAsync, fetchAddressAsync }) => (
    <List relaxed="very" horizontal divided>
        <List.Item>
            <List.Header>
                <NetworkName />
            </List.Header>
        </List.Item>
        <List.Item>
            <List.Content>
                <AsyncValue
                    fetch={fetchAddressAsync}
                    placeholder={DUMMY_ADDRESS}
                >
                    {({ value }) => <ExplorerLink address={value} />}
                </AsyncValue>
            </List.Content>
        </List.Item>
    </List>
);

export default Status;
