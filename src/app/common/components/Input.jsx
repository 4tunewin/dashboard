/**
 * An input component that works correctly with formik form handler
 */
import React from 'react';
import { withHandlers } from 'recompose';
import { Input } from 'semantic-ui-react';

const Component = ({ form, field, ...props }) => (
    <Input {...field} {...props} />
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
    onBlur: ({ field, onBlur }) => (e, { name }) => {
        field.onBlur({
            target: { name },
        });

        if (onBlur) onBlur(e);
    },
});

export default eventHandlers(Component);
