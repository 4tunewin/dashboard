import React from 'react';
import { Form, Field } from 'formik';
import { Button, Modal, Input } from 'semantic-ui-react';

import { FormStatus, FormError } from '../../common';
import { renderField } from '../../../lib/form';

const fields = {
    input: renderField(Input),
};

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

export default TopupDialog;
