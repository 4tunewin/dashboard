import React from 'react';
import { Table } from 'semantic-ui-react';

import TransactionItem from './TransactionItem';

const TransactionsList = () => (
    <Table basic="very">
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan={3}>TRANSACTIONS</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell width={3}>Age</Table.HeaderCell>
                <Table.HeaderCell width={10}>From</Table.HeaderCell>
                <Table.HeaderCell width={3}>Value</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <TransactionItem />
            <TransactionItem />
            <TransactionItem />
        </Table.Body>
    </Table>
);

export default TransactionsList;
