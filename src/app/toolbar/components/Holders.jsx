import React from 'react';
import { Button, Popup } from 'semantic-ui-react';

const Holders = () => (
    <Popup
        trigger={<Button icon="users" basic />}
        content="Stake holders"
        small
        inverted
    />
);

export default Holders;
