import { withHandlers } from 'recompose';
import { promisify } from 'bluebird';

import NetworkName from '../components/NetworkName';

/**
 * Fetch network ID
 */
const fetchNetworkAsync = ownProps => () => {
    const getNetwork = promisify(window.web3.version.getNetwork, {
        context: window.web3,
    });

    return getNetwork();
};

export default withHandlers({ fetchNetworkAsync })(NetworkName);
