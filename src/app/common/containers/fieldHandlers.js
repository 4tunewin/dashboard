import { withHandlers } from 'recompose';

const handlers = withHandlers({
    onChange: ({ field, form }) => (e, { name, value }) => {
        return form.handleChange({ target: { name, value } });
    },
    onBlur: ({ field, form }) => (e, data) => {
        if (data) {
            return form.handleBlur({
                target: { name: field.name, value: data.value },
            });
        }
    },
});

export default handlers;
