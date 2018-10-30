import React from 'react';

/**
 * Render form field providing all required props
 */
export const renderField = Component => ({ form, field, ...props }) => (
    <Component {...props} {...field} />
);
