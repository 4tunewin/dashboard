import React from 'react';
import { Button } from 'semantic-ui-react';

import { Input } from '../../../common';

const AmountField = ({ onClickMax, ...props }) => (
    <Input
        {...props}
        action={
            <Button type="button" content="Max" onClick={onClickMax} basic />
        }
        placeholder="Amount"
        icon="ethereum"
        iconPosition="left"
        fluid
    />
);

export default AmountField;
