import React from 'react';
import { Button, Dropdown, Icon } from 'semantic-ui-react';

const Toolbar = () => (
    <div>
        <Button>Withdraw</Button>
        <Button>Secret Signer</Button>
        <Button>Profit</Button>
        <Button>Jackpot</Button>
        <Dropdown
            trigger={
                <Button icon>
                    <Icon name="world" />
                </Button>
            }
            icon
        >
            <Dropdown.Menu>
                <Dropdown.Item>Approve Next Onwer</Dropdown.Item>
                <Dropdown.Item>Accept Next Onwer</Dropdown.Item>
                <Dropdown.Item>Kill</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
);

export default Toolbar;
