import React from 'react';
import { Field } from 'formik';
import { Button, Modal, FormField } from 'semantic-ui-react';

import { Form } from '../../../common';
import AmountField from '../../containers/withdraw/AmountField';
import BeneficiaryField from './BeneficiaryField';
import { FormStatus, FormError } from '../../../common';

/**
 * Button that triggers withdraw dialog
 */
const WithdrawButton = ({ onClick }) => (
    <Button
        onClick={onClick}
        content="Withdraw"
        icon="arrow alternate circle up"
        color="red"
        basic
    />
);

/**
 * Dialog with form that allow to specify ammount for withdraw
 */
const WithdrawDialog = ({
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
        trigger={<WithdrawButton onClick={onOpen} />}
        size="tiny"
    >
        <Modal.Header>Withdraw funds from contract balance</Modal.Header>
        <Modal.Content>
            <FormStatus status={status} />
            <Form>
                <FormField>
                    <Field name="amount" component={AmountField} />
                    <FormError name="amount" />
                </FormField>
                <FormField>
                    <Field name="beneficiary" component={BeneficiaryField} />
                    <FormError name="beneficiary" />
                </FormField>
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

export default WithdrawDialog;
