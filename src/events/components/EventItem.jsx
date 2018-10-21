import React from 'react';
import styled from 'styled-components';
import { Table } from 'semantic-ui-react';

const TableCell = styled(Table.Cell)`
    max-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const EventItem = () => (
    <Table.Row>
        <TableCell>34 mins ago</TableCell>
        <TableCell>Payment</TableCell>
        <TableCell>0.1</TableCell>
    </Table.Row>
);

export default EventItem;
