import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { promisify } from 'bluebird';

import { DiceContract } from '../../../contracts';
import EventsList from '../components/EventsList';

// Hold stack of events
const withEvents = withState('events', 'setEvents', []);

/**
 * Push event in the stack
 */
const pushEvent = ({ events, setEvents }) => log => {
    setEvents([log, ...events]);
};

/**
 * Init event listener
 */
const componentDidMount = async function() {
    const { pushEvent } = this.props;

    const instance = await DiceContract.deployed();
    const getBlockNumber = promisify(window.web3.eth.getBlockNumber, {
        context: window.web3,
    });

    // Get all events from latest 100 blocks and till now
    const currentBlock = await getBlockNumber();
    const filters = {
        fromBlock: currentBlock - 100 < 0 ? 0 : currentBlock - 100,
        toBlock: 'latest',
    };

    instance.allEvents(filters, (error, log) => {
        if (!error) {
            pushEvent(log);
        } else {
            console.error('Failed to fetch event;', error);
        }
    });
};

export default compose(
    withEvents,
    withHandlers({ pushEvent }),
    lifecycle({ componentDidMount }),
)(EventsList);
