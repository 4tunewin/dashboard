import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

import ChangeSecretSigner from '../containers/secretSigner/ChangeSecretSigner';
import ChangeJackpot from '../containers/jackpot/ChangeJackpot';
import ChangeMaxProfit from '../containers/profit/ChangeMaxProfit';
import ChangeOwner from '../containers/owner/ChangeOwner';

const ActionsMenu = () => (
    <Dropdown trigger={<Button icon="settings" basic />} icon>
        <Dropdown.Menu>
            <ChangeSecretSigner />
            <ChangeOwner />
            <ChangeMaxProfit />
            <ChangeJackpot />
            <Dropdown.Divider />
            <Dropdown.Item>Kill contract</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

export default ActionsMenu;
