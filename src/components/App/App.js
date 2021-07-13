import React, { useCallback, useState } from 'react';
import { Box, Container } from '@material-ui/core';

import { GifList, SearchBar } from 'components';

function App() {
    const [termToSearch, setTermToSearch] = useState('');

    const handleSearch = useCallback((searchTerm) => {
        setTermToSearch(searchTerm);
    }, []);

    return (
        <Box>
            <Container maxWidth={false}>
                <SearchBar onSearch={handleSearch} />
                <GifList termToSearch={termToSearch} />
            </Container>
        </Box>
    );
}

export default App;
