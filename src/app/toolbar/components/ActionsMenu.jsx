import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

const ActionsMenu = () => (
    <Dropdown trigger={<Button icon="settings" basic />} icon>
        <Dropdown.Menu>
            <Dropdown.Item>Change secret signer</Dropdown.Item>
            <Dropdown.Item>Change withdraw address</Dropdown.Item>
            <Dropdown.Item>Change owner</Dropdown.Item>
            <Dropdown.Item>Change max profit</Dropdown.Item>
            <Dropdown.Item>Increase jackpot</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Kill Contract</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

export default ActionsMenu;
