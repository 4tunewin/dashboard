import React from 'react';
import { ErrorMessage } from 'formik';
import { Label } from 'semantic-ui-react';

const FormError = props => (
    <ErrorMessage {...props} component={Label} color="red" basic pointing />
);

export default FormError;
