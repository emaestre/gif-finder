import React, { useCallback, useState } from 'react';
import { Box, Container, Paper } from '@material-ui/core';

import { GifList, SearchBar } from 'components';

function App() {
    const [termToSearch, setTermToSearch] = useState('');

    const handleSearch = useCallback((searchTerm) => {
        setTermToSearch(searchTerm);
    }, []);

    return (
        <Box>
            <Paper>
                <Container maxWidth={false}>
                    <SearchBar onSearch={handleSearch} />
                    <GifList termToSearch={termToSearch} />
                </Container>
            </Paper>
        </Box>
    );
}

export default App;
