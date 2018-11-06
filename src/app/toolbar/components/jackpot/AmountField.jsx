import React from 'react';
import styled from 'styled-components';
import { compose, withHandlers } from 'recompose';
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
        <AmountButton type="button" onClick={() => incBy(0.1)} basic>
            0.1
        </AmountButton>
        <AmountButton type="button" onClick={() => incBy(0.5)} basic>
            0.5
        </AmountButton>
        <AmountButton type="button" onClick={() => incBy(1)} basic>
            1
        </AmountButton>
    </StyledInput>
);

/**
 * Handler that allow to increase amount by fixed amount
 */
const withIncBy = withHandlers({
    incBy: ({ field }) => value => {
        field.onChange({
            target: {
                name: field.name,
                value,
            },
        });
    },
});

export default compose(withIncBy)(AmountField);
