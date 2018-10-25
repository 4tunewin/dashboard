import { compose, withHandlers } from 'recompose';
import { promisify } from 'bluebird';
import { differenceInSeconds } from 'date-fns';

import { humanizeDuration } from '../../lib/date';
import EventItem from '../components/EventItem';

const { web3 } = window;

/**
 * Fetch timestamp for specified block
 */
const fetchTimestampAsync = () => block => {
    const getBlock = promisify(web3.eth.getBlock, { context: web3 });
    return getBlock(block).then(data => {
        return humanizeDuration(
            differenceInSeconds(new Date(), data.timestamp * 1000),
            {
                magnitudes: ['h', 'm', 's'],
                skip: true,
            },
        );
    });
};

export default compose(withHandlers({ fetchTimestampAsync }))(EventItem);
