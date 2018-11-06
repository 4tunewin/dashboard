import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

import SecretSigner from '../containers/secretSigner/SecretSigner';

const ActionsMenu = () => (
    <Dropdown trigger={<Button icon="settings" basic />} icon>
        <Dropdown.Menu>
            <SecretSigner />
            <Dropdown.Item>Change owner</Dropdown.Item>
            <Dropdown.Item>Change max profit</Dropdown.Item>
            <Dropdown.Item>Increase jackpot</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Kill contract</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

export default ActionsMenu;
