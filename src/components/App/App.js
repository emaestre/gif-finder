import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, Container, Paper } from '@material-ui/core';

import { GifFinder, LikedGifs } from 'components';

function App() {
    return (
        <Box>
            <Paper>
                <Container maxWidth={false}>
                    <Router>
                        <Switch>
                            <Route path="/liked">
                                <LikedGifs />
                            </Route>
                            <Route path="/">
                                <GifFinder />
                            </Route>
                        </Switch>
                    </Router>
                </Container>
            </Paper>
        </Box>
    );
}

export default App;
