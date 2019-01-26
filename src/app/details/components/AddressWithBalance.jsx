import React from 'react';
import styled from 'styled-components';
import { Grid, Icon } from 'semantic-ui-react';

import { ExplorerLink, CopyButton } from '../../common';
import Balance from '../containers/Balance';

const ValueWrapper = styled.div`
    position: relative;
`;

const StyledGrid = styled(Grid)`
    margin-top: -11px !important;
    margin-bottom: -11px !important;
`;

const StyledCell = styled(Grid.Column)`
    padding-top: 11px !important;
    padding-bottom: 11px !important;
`;

const ExplorerLinkWrapper = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 25px;
`;

const CopyButtonWrapper = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
`;

const AddressWithBalance = ({ address }) => (
    <StyledGrid divided>
        <StyledCell width={12}>
            <ValueWrapper>
                <ExplorerLinkWrapper>
                    <ExplorerLink address={address} />
                </ExplorerLinkWrapper>
                <CopyButtonWrapper>
                    <CopyButton value={address} />
                </CopyButtonWrapper>
            </ValueWrapper>
        </StyledCell>
        <StyledCell width={4} textAlign="left">
            <Icon name="ethereum" />
            <Balance address={address} />
        </StyledCell>
    </StyledGrid>
);

export default AddressWithBalance;
