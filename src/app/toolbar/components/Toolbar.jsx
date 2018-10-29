import React from 'react';
import { Button, Dropdown, Grid } from 'semantic-ui-react';

const Toolbar = () => (
    <Grid>
        <Grid.Column width={10}>
            <Button
                content="Withdraw"
                icon="arrow alternate circle up"
                labelPosition="left"
                basic
            />
            <Button content="Holders" icon="users" labelPosition="left" basic />
        </Grid.Column>
        <Grid.Column width={6} textAlign="right">
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
        </Grid.Column>
    </Grid>
);

export default Toolbar;
