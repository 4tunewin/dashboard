import React from 'react';
import { Field } from 'formik';
import { Dropdown, Button, Modal } from 'semantic-ui-react';

import { Form, Input } from '../../../common';
import { FormStatus, FormError } from '../../../common';

/**
 * Button that triggers dialog
 */
const Trigger = ({ onClick }) => (
    <Dropdown.Item onClick={onClick} content="Change max reward" />
);

/**
 * Dialog with form that allow to change max profit
 */
const Dialog = ({
    loading,
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
        <Modal.Header>Change max reward</Modal.Header>
        <Modal.Content>
            <FormStatus status={status} />
            <Form>
                <Field
                    name="amount"
                    component={Input}
                    placeholder="Amount"
                    icon="ethereum"
                    iconPosition="left"
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

export default Dialog;
