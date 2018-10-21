import React from 'react';
import { Table, Segment } from 'semantic-ui-react';

import EventItem from './EventItem';

const EventsList = () => (
    <Table basic="very">
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan={3}>EVENTS</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell width={3}>Age</Table.HeaderCell>
                <Table.HeaderCell width={3}>Name</Table.HeaderCell>
                <Table.HeaderCell width={10}>Event Logs</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <EventItem />
            <EventItem />
            <EventItem />
        </Table.Body>
    </Table>
);

export default EventsList;
