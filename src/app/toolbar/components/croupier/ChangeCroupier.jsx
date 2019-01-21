import React from 'react';
import { Field } from 'formik';
import { Dropdown, Button, Modal } from 'semantic-ui-react';

import { Form, Input, FormStatus, FormError } from '../../../common';
import CurrentAddress from '../../containers/croupier/CurrentAddress';

/**
 * Button that triggers dialog
 */
const Trigger = ({ onClick }) => (
    <Dropdown.Item onClick={onClick} content="Change croupier" />
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
        <Modal.Header>Change croupier</Modal.Header>
        <Modal.Content>
            <FormStatus status={status} />
            <Form>
                <Field
                    name="address"
                    component={Input}
                    placeholder="Address"
                    icon="address card outline"
                    iconPosition="left"
                    fluid
                />
                <FormError name="address" />
            </Form>
            <CurrentAddress />
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
