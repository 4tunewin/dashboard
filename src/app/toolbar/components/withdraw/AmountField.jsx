import React from 'react';
import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react';

import { Input } from '../../../common';

const AmountButton = styled(Button)`
    box-shadow: none !important;
    border-top: 1px solid rgba(34, 36, 38, 0.15) !important;
    border-right: 1px solid rgba(34, 36, 38, 0.15) !important;
    border-bottom: 1px solid rgba(34, 36, 38, 0.15) !important;
`;

const StyledInput = styled(Input)`
    &.ui.action.input:not([class*='left action']) > input {
        border-right-color: rgba(34, 36, 38, 0.15) !important;
    }
`;

const AmountField = ({ incBy, ...props }) => (
    <StyledInput {...props} type="text" iconPosition="left" icon action fluid>
        <input placeholder="Amount" />
        <Icon name="ethereum" />
        <AmountButton type="button" onClick={() => incBy(0.25)} basic>
            25%
        </AmountButton>
        <AmountButton type="button" onClick={() => incBy(0.5)} basic>
            50%
        </AmountButton>
        <AmountButton type="button" onClick={() => incBy(0.75)} basic>
            75%
        </AmountButton>
        <AmountButton type="button" onClick={() => incBy(1)} basic>
            100%
        </AmountButton>
    </StyledInput>
);

export default AmountField;
