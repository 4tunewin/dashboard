import React from 'react';
import { Table } from 'semantic-ui-react';

const Details = () => (
    <Table definition stripped>
        <Table.Body>
            <Table.Row>
                <Table.Cell>Owner</Table.Cell>
                <Table.Cell textAlign="right">
                    0x977dd077BdE0a60dE2759B6f8C2c384Eb1B3bd78
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Secret signer</Table.Cell>
                <Table.Cell textAlign="right">
                    0x977dd077BdE0a60dE2759B6f8C2c384Eb1B3bd78
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>House Edge</Table.Cell>
                <Table.Cell textAlign="right">1%</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>House Edge Min.</Table.Cell>
                <Table.Cell textAlign="right">0.0003 ETH</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jackpot Bet</Table.Cell>
                <Table.Cell textAlign="right">0.1 ETH</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jackpot Fee</Table.Cell>
                <Table.Cell textAlign="right">0.001 ETH</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
);

export default Details;
