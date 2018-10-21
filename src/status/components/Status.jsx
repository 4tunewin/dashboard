import React from 'react';
import { List } from 'semantic-ui-react';

const Status = () => (
    <List relaxed="very" horizontal divided>
        <List.Item>
            <List.Header>Main Net</List.Header>
        </List.Item>
        <List.Item>
            <List.Content>
                <a href="#">0x977dd077BdE0a60dE2759B6f8C2c384Eb1B3bd78</a>
            </List.Content>
        </List.Item>
    </List>
);

export default Status;
