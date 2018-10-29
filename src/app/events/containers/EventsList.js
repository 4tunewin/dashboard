import { compose, withState, withHandlers, lifecycle } from 'recompose';

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

    const instance = await DiceContract.deployed().then(instance => {
        return instance;
    });

    const filters = {
        fromBlock: 0,
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
