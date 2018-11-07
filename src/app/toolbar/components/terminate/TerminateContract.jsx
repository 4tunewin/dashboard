import React from 'react';
import { Field } from 'formik';
import { Dropdown, Button, Modal } from 'semantic-ui-react';

import { Form, Input, FormStatus, FormError } from '../../../common';

/**
 * Button that triggers dialog
 */
const Trigger = ({ onClick }) => (
    <Dropdown.Item onClick={onClick} content="Terminate contract" />
);

/**
 * Dialog with form that confirms user action and terminates
 * the contract.
 */
const Dialog = ({
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
        trigger={<Trigger onClick={onOpen} />}
        size="tiny"
    >
        <Modal.Header>Terminate Contract</Modal.Header>
        <Modal.Content>
            <FormStatus status={status} />

            <p>
                Are you sure you want to terminate contract? There is no way to
                recover it after termination.
            </p>

            <p>To terminate contract, please type "TERMINATE CONTRACT"</p>

            <Form>
                <Field
                    name="message"
                    component={Input}
                    placeholder="Type here..."
                    fluid
                />
                <FormError name="message" />
            </Form>
        </Modal.Content>
        <Modal.Actions>
            <Button
                icon="remove"
                color="red"
                content="No"
                onClick={onClose}
                disabled={isSubmitting}
            />
            <Button
                onClick={handleSubmit}
                disabled={isSubmitting || !isValid}
                loading={isSubmitting}
                icon="checkmark"
                content="Yes"
                primary
            />
        </Modal.Actions>
    </Modal>
);

export default Dialog;
