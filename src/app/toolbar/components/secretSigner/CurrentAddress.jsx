import React from 'react';
import styled from 'styled-components';

import { AsyncValue, ExplorerLink } from '../../../common';

const DUMMY_ADDRESS = '0x0000000000000000000000000000000000000000';

const Wrapper = styled.div`
    margin-top: 10px;
    font-size: 13px;
`;

const CurrentAddress = ({ fetchAsync }) => (
    <AsyncValue fetch={fetchAsync} placeholder={DUMMY_ADDRESS}>
        {({ value }) => (
            <Wrapper>
                <strong>Current: </strong>
                <ExplorerLink address={value} />
            </Wrapper>
        )}
    </AsyncValue>
);

export default CurrentAddress;
