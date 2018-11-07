import React from 'react';
import { Dropdown, Button } from 'semantic-ui-react';

import ChangeSecretSigner from '../containers/secretSigner/ChangeSecretSigner';
import ChangeJackpot from '../containers/jackpot/ChangeJackpot';
import ChangeMaxProfit from '../containers/profit/ChangeMaxProfit';
import ChangeOwner from '../containers/owner/ChangeOwner';
import TerminateContract from '../containers/terminate/TerminateContract';

const ActionsMenu = () => (
    <Dropdown trigger={<Button icon="settings" basic />} icon>
        <Dropdown.Menu>
            <ChangeSecretSigner />
            <ChangeOwner />
            <ChangeMaxProfit />
            <ChangeJackpot />
            <Dropdown.Divider />
            <TerminateContract />
        </Dropdown.Menu>
    </Dropdown>
);

export default ActionsMenu;
