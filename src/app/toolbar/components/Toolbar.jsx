import React from 'react';
import { Grid } from 'semantic-ui-react';

import Withdraw from '../containers/withdraw';
import Topup from '../containers/topup';
import Holders from './Holders';
import ActionsMenu from './ActionsMenu';

const Toolbar = () => (
    <Grid>
        <Grid.Column width={12}>
            <Withdraw />
            <Topup />
        </Grid.Column>
        <Grid.Column width={4} textAlign="right">
            <Holders />
            <ActionsMenu />
        </Grid.Column>
    </Grid>
);

export default Toolbar;
