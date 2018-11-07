import React from 'react';
import { Header, Dropdown, Button, Modal } from 'semantic-ui-react';

import { FormStatus } from '../../../common';

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
const Dialog = ({ open, onOpen, onClose, onConfirm, status }) => (
    <Modal
        open={open}
        onClose={onClose}
        trigger={<Trigger onClick={onOpen} />}
        size="small"
        basic
    >
        <Header icon="remove" content="Terminate Contract" />
        <Modal.Content>
            <FormStatus status={status} />

            <p>
                Are you sure you want to terminate contract? There is no way to
                recover it after termination.
            </p>
        </Modal.Content>
        <Modal.Actions>
            <Button
                icon="remove"
                color="red"
                content="No"
                onClick={onClose}
                basic
                inverted
            />
            <Button
                icon="checkmark"
                color="green"
                content="Yes"
                onClick={onConfirm}
                inverted
            />
        </Modal.Actions>
    </Modal>
);

export default Dialog;
