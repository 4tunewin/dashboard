import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import { Button, Modal, Input, FormField, Message } from 'semantic-ui-react';

import { FormStatus, FormError } from '../../common';
import { renderField } from '../../../lib/form';
import withModal from '../../../lib/withModal';

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

const fields = {
    input: renderField(Input),
};

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
    isValid,
    status,
}) => (
    <Modal
        open={open}
        onClose={onClose}
        trigger={<TopupButton onClick={onOpen} />}
        size="small"
    >
        <Modal.Header>Top-up contract balance</Modal.Header>
        <Modal.Content>
            <FormStatus status={status} />
            <Form>
                <Field
                    name="amount"
                    component={fields.input}
                    placeholder="Amount"
                    fluid
                />
                <FormError name="amount" />
            </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button
                onClick={handleSubmit}
                disabled={isSubmitting || !isValid}
                loading={isSubmitting}
                primary
            >
                Execute
            </Button>
            <Button
                type="submit"
                onClick={onClose}
                icon="remove"
                content="Cancel"
                disabled={isSubmitting}
                basic
            />
        </Modal.Actions>
    </Modal>
);

export default withModal(TopupDialog);
