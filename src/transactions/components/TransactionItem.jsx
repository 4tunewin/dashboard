import React from 'react';
import styled from 'styled-components';
import { Table } from 'semantic-ui-react';

const TableCell = styled(Table.Cell)`
    max-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const TransactionItem = () => (
    <Table.Row>
        <TableCell>35 mins ago</TableCell>
        <TableCell>
            0xa9d13f1b49461bd9745ee7d2720d479283304aa66af6aa4ad4d31d30ccc8614f
        </TableCell>
        <TableCell>0.1</TableCell>
    </Table.Row>
);

export default TransactionItem;
