import React from 'react';
import styled from 'styled-components';
import { formatDistanceStrict } from 'date-fns';
import { Table } from 'semantic-ui-react';

import EventArgs from './EventArgs';
import { AsyncValue } from '../../common';

const TableCell = styled(Table.Cell)`
    max-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const EventItem = ({ event, fetchTimestampAsync }) => {
    console.log(event);
    return (
        <Table.Row>
            <TableCell>
                <AsyncValue
                    fetch={() => fetchTimestampAsync(event.blockNumber)}
                    placeholder="now"
                />
            </TableCell>
            <TableCell>{event.event}</TableCell>
            <TableCell>
                <EventArgs event={event.event} args={event.args} />
            </TableCell>
        </Table.Row>
    );
};

export default EventItem;
