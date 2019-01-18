import React from 'react';
import styled from 'styled-components';
import { Popup, Icon } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const StyledIcon = styled(Icon)`
    cursor: pointer;
`;

const CopyButton = ({ value }) => (
    <Popup
        content="Click to copy"
        trigger={
            <CopyToClipboard text={value}>
                <StyledIcon name="copy outline" />
            </CopyToClipboard>
        }
        small
        inverted
    />
);

export default CopyButton;
