import React from 'react';
import { Table } from 'semantic-ui-react';

import { AsyncValue, ExplorerLink } from '../../common';

const DUMMY_ADDRESS = '0x0000000000000000000000000000000000000000';

const Details = ({
    constants,
    fetchOwnerAsync,
    fetchSecretSignerAsync,
    fetchMaxProfitAsync,
}) => (
    <Table definition stripped>
        <Table.Body>
            <Table.Row>
                <Table.Cell>Owner</Table.Cell>
                <Table.Cell textAlign="right">
                    <AsyncValue
                        fetch={fetchOwnerAsync}
                        placeholder={DUMMY_ADDRESS}
                        interval={1000}
                    >
                        {({ value }) => <ExplorerLink address={value} />}
                    </AsyncValue>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Secret signer</Table.Cell>
                <Table.Cell textAlign="right">
                    <AsyncValue
                        fetch={fetchSecretSignerAsync}
                        placeholder={DUMMY_ADDRESS}
                        interval={1000}
                    >
                        {({ value }) => <ExplorerLink address={value} />}
                    </AsyncValue>
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>House Edge</Table.Cell>
                <Table.Cell textAlign="right">
                    {constants['HOUSE_EDGE_PERCENT']}%
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>House Edge Min.</Table.Cell>
                <Table.Cell textAlign="right">
                    {constants['HOUSE_EDGE_MINIMUM_AMOUNT']} ETH
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jackpot Bet</Table.Cell>
                <Table.Cell textAlign="right">
                    {constants['MIN_JACKPOT_BET']} ETH
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Jackpot Fee</Table.Cell>
                <Table.Cell textAlign="right">
                    {constants['JACKPOT_FEE']} ETH
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Max Reward</Table.Cell>
                <Table.Cell textAlign="right">
                    <AsyncValue
                        fetch={fetchMaxProfitAsync}
                        placeholder="0"
                        interval={1000}
                    >
                        {({ value }) => <span>{value}</span>}
                    </AsyncValue>
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
);

export default Details;
