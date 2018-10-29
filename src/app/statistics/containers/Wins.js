import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, withProps } from 'recompose';
import { get } from 'lodash';

import Wins from '../components/Wins';

const { web3 } = window;

// Query for games statistics
const STATS_QUERY = gql`
    query Stats {
        stats {
            wagers {
                amount
            }
        }
    }
`;

const withData = graphql(STATS_QUERY, {
    props: ({ data: { stats, loading } }) => ({
        loading,
        stats,
    }),
});

const withAmount = withProps(({ stats }) => ({
    amount: web3.fromWei(get(stats, 'wagers.amount', 0), 'ether'),
}));

export default compose(
    withData,
    withAmount,
)(Wins);
