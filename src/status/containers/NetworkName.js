import { withHandlers } from 'recompose';
import { promisify } from 'bluebird';

import { DiceContract } from '../../contracts';
import NetworkName from '../components/NetworkName';

/**
 * Fetch network ID
 */
const fetchNetworkAsync = ownProps => () => {
    const { web3 } = window;
    const getNetwork = promisify(web3.version.getNetwork, { context: web3 });

    return getNetwork();
};

export default withHandlers({ fetchNetworkAsync })(NetworkName);
