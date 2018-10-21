import React from 'react';
import { storiesOf } from '@storybook/react';

import EventsList from '../EventsList';

storiesOf('events/EventsList', module).add('default', () => <EventsList />);
