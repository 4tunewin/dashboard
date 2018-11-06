import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

import ChangeSecretSigner from '../containers/secretSigner/ChangeSecretSigner';
import ChangeJackpot from '../containers/jackpot/ChangeJackpot';

const ActionsMenu = () => (
    <Dropdown trigger={<Button icon="settings" basic />} icon>
        <Dropdown.Menu>
            <ChangeSecretSigner />
            <Dropdown.Item>Change owner</Dropdown.Item>
            <Dropdown.Item>Change max profit</Dropdown.Item>
            <ChangeJackpot />
            <Dropdown.Divider />
            <Dropdown.Item>Kill contract</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

export default ActionsMenu;
