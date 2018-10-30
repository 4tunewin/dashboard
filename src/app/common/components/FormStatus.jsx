import React from 'react';
import styled from 'styled-components';
import { Message, List } from 'semantic-ui-react';

const ReasonList = styled(List)`
    margin-top: 8px !important;
    padding-left: 5px !important;
`;

const FormStatus = ({ status, ...props }) => {
    if (!status) {
        return null;
    }

    return (
        <Message {...{ [status.type]: true, ...props }}>
            {status.msg}
            {status.reason && (
                <ReasonList bulleted>
                    <List.Item>{status.reason}</List.Item>
                </ReasonList>
            )}
        </Message>
    );
};

export default FormStatus;
