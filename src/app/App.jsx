import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import { ApolloProvider } from '../providers';

import { Status } from './status';
import { EventsList } from './events';
import { Statistics } from './statistics';
import { Toolbar } from './toolbar';
import { Details } from './details';

const App = () => (
    <ApolloProvider>
        <Container>
            <Grid padded>
                <Grid.Column width={8}>
                    <Grid columns={1}>
                        <Grid.Row>
                            <Grid.Column>
                                <Status />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Statistics />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Toolbar />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Details />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={8}>
                    <EventsList />
                </Grid.Column>
            </Grid>
        </Container>
    </ApolloProvider>
);

export default App;
