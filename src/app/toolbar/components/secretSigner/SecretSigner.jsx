import React from 'react';
import { Field } from 'formik';
import { Dropdown, Button, Modal } from 'semantic-ui-react';

import { Form, Input } from '../../../common';
import { FormStatus, FormError } from '../../../common';
import CurrentAddress from '../../containers/secretSigner/CurrentAddress';

/**
 * Button that triggers dialog
 */
const Trigger = ({ onClick }) => (
    <Dropdown.Item onClick={onClick} content="Change secret signer" />
);

/**
 * Dialog with form that allow to specify ammount for top-up
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
        <Modal.Header>Change secret signer</Modal.Header>
        <Modal.Content>
            <FormStatus status={status} />
            <CurrentAddress />
            <Form>
                <Field
                    name="address"
                    component={Input}
                    placeholder="Address"
                    icon="address card outline"
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
