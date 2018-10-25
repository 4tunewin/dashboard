import React from 'react';
import { map } from 'lodash';
import { Table, Segment } from 'semantic-ui-react';

import EventItem from '../containers/EventItem';

const EventsList = ({ events }) => (
    <Table basic="very" striped>
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
            {map(events, event => (
                <EventItem event={event} key={event.transactionHash} />
            ))}
        </Table.Body>
    </Table>
);

export default EventsList;
