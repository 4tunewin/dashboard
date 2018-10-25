import React from 'react';
import styled from 'styled-components';
import { map, toString, isObject } from 'lodash';
import { List } from 'semantic-ui-react';

import { ExplorerLink } from '../../common';

const { web3 } = window;

const ListItem = styled(List.Item)`
    display: inline-block;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
`;

const PaymentArgs = ({ args }) => (
    <List>
        <ListItem>
            <strong>BENEFICIARY: </strong>
            <ExplorerLink address={args.beneficiary} />
        </ListItem>
        <ListItem>
            <strong>AMOUNT: </strong>{' '}
            {web3.fromWei(args.amount.toNumber(), 'ether')} ETH
        </ListItem>
    </List>
);

const BetPlacedArgs = ({ args }) => (
    <List>
        <ListItem>
            <strong>GAMBLER: </strong>
            <ExplorerLink address={args.gambler} />
        </ListItem>
        <ListItem>
            <strong>AMOUNT: </strong>{' '}
            {web3.fromWei(args.amount.toNumber(), 'ether')} ETH
        </ListItem>
        <ListItem>
            <strong>COMMIT: </strong> 0x
            {args.commit.toString(16)}
        </ListItem>
        {/* <ListItem>
            <strong>BET MASK: </strong> {args.betMask.toNumber()}
        </ListItem>
        <ListItem>
            <strong>MODULO: </strong> {args.modulo.toNumber()}
        </ListItem> */}
    </List>
);

const EventArgs = ({ event, args }) => {
    switch (event) {
        case 'Payment':
        case 'FailedPayment':
        case 'JackpotPayment':
            return <PaymentArgs args={args} />;
        case 'BetPlaced':
            return <BetPlacedArgs args={args} />;
    }
};

export default EventArgs;
