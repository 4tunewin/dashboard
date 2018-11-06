/**
 * A select component that works correctly with formik form handler
 */
import React from 'react';
import { withHandlers } from 'recompose';
import { Dropdown } from 'semantic-ui-react';

const Component = ({ form, field, ...props }) => (
    <Dropdown {...field} {...props} />
);

/**
 * Handle component events
 */
const eventHandlers = withHandlers({
    onChange: ({ field, onChange }) => (e, { name, value }) => {
        field.onChange({
            target: {
                name,
                value,
            },
        });

        if (onChange) onChange(e, { name, value });
    },
    onBlur: ({ field, onBlur }) => e => {
        field.onBlur(e);
        if (onBlur) onBlur(e);
    },
});

export default eventHandlers(Component);
