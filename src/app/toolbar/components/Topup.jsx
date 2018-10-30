import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import { Button, Modal, Input, FormField } from 'semantic-ui-react';

import withModal from '../../../lib/withModal';

const renderField = Component => ({ field, ...props }) => (
    <Component {...props} {...field} />
);

/**
 * Button that triggers top-up dialog
 */
const TopupButton = ({ onClick }) => (
    <Button
        onClick={onClick}
        content="Top-up"
        icon="arrow alternate circle down"
        color="red"
        basic
    />
);

/**
 * Dialog with form that allow to specify ammount for top-up
 */
const TopupDialog = ({
    open,
    onOpen,
    onClose,
    initialValues,
    handleSubmit,
    isSubmitting,
}) => (
    <Modal
        open={open}
        onClose={onClose}
        trigger={<TopupButton onClick={onOpen} />}
        size="small"
    >
        <Modal.Header>Top-up contract balance</Modal.Header>
        <Modal.Content>
            <Form>
                <Field
                    name="amount"
                    component={renderField(Input)}
                    placeholder="Amount"
                    fluid
                />
            </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                loading={isSubmitting}
                primary
            >
                Execute
            </Button>
            <Button
                onClick={onClose}
                icon="remove"
                content="Cancel"
                //disabled={submitting}
                basic
            />
        </Modal.Actions>
    </Modal>
);

export default withModal(TopupDialog);
