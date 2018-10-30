import { compose } from 'recompose';
import { withFormik } from 'formik';

import Topup from '../components/Topup';

/**
 * Handle form submission by sending specified
 * amount on contract balance.
 */
const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            setSubmitting(false);
        }, 2000);
    });
};

/**
 * Provide initial values to the form
 */
// const withInitialValues = withProps(() => ({
//     initialValues: {
//         amount: 0,
//     },
// }));

export default compose(
    withFormik({
        handleSubmit,
    }),
)(Topup);
