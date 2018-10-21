import React from 'react';
import { storiesOf } from '@storybook/react';

import TransactionsList from '../TransactionsList';

storiesOf('transactions/TransactionsList', module).add('default', () => (
    <TransactionsList />
));
