import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

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

/**
 * Dialog with form that allow to specify ammount for top-up
 */
const TopupDialog = ({ open, onOpen, onClose }) => (
    <Modal
        open={open}
        onClose={onClose}
        trigger={<TopupButton onClick={onOpen} />}
        size="small"
    >
        <Modal.Header>Top-up contract balance</Modal.Header>
        <Modal.Content>[TOP-UP FORM GOES HERE]</Modal.Content>
        <Modal.Actions>
            <Button
                // onClick={handleSubmit}
                // disabled={pristine || submitting}
                // loading={submitting}
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
