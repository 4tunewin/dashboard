import React from 'react';
import { Field } from 'formik';
import { Button, Modal } from 'semantic-ui-react';

import { Form } from '../../../common';
import AmountField from '../../containers/topup/AmountField';
import { FormStatus, FormError } from '../../../common';

/**
 * Button that triggers dialog
 */
const Trigger = ({ onClick }) => (
    <Button
        onClick={onClick}
        content="Top-up"
        icon="arrow alternate circle down"
        color="green"
        basic
    />
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
        <Modal.Header>Top-up contract balance</Modal.Header>
        <Modal.Content>
            <FormStatus status={status} />
            <Form>
                <Field name="amount" component={AmountField} />
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
