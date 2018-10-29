import { compose, withHandlers } from 'recompose';
import { promisify } from 'bluebird';
import { differenceInSeconds } from 'date-fns';

import { humanizeDuration } from '../../../lib/date';
import EventItem from '../components/EventItem';

const { web3 } = window;

/**
 * Fetch timestamp for specified block
 */
const fetchTimestampAsync = () => {
    let _block = null;

    return async block => {
        // Cache block to run this function periodicly without quering network
        if (!_block) {
            const getBlock = promisify(web3.eth.getBlock, { context: web3 });
            _block = await getBlock(block);
        }

        return humanizeDuration(
            differenceInSeconds(new Date(), _block.timestamp * 1000),
            {
                magnitudes: ['h', 'm', 's'],
                skip: true,
            },
        );
    };
};

export default compose(withHandlers({ fetchTimestampAsync }))(EventItem);
