/**
 * An input component that works correctly with formik form handler
 */
import React from 'react';
import { withHandlers } from 'recompose';
import { Input } from 'semantic-ui-react';

const Component = ({ form, field, ...props }) => (
    <Input {...field} {...props} />
);

const eventHandlers = withHandlers({
    onChange: ({ form, field, onChange }) => (e, { name, value }) => {
        form.setFieldValue(name, value, false);
        form.setFieldTouched(name, true, false);

        if (onChange) onChange(e, { name, value });
    },
    onBlur: ({ form }) => form.handleBlur,
});

export default eventHandlers(Component);
