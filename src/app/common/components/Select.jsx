/**
 * A select component that works correctly with formik form handler
 */
import React from 'react';
import { withHandlers } from 'recompose';
import { Select } from 'semantic-ui-react';

const Component = ({ form, field, ...props }) => (
    <Select {...field} {...props} />
);

const eventHandlers = withHandlers({
    onChange: ({ form, field, onChange }) => (e, data) => {
        console.log(e, data);
        // form.setFieldValue(name, value, true);
        // form.setFieldTouched(name, true, true);

        // if (onChange) onChange(e, { name, value });
    },
});

export default eventHandlers(Component);
