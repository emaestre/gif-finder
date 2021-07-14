import React, { Fragment, useCallback, useState } from 'react';

import { GifList, SearchBar } from 'components';

function GifFinder() {
    const [termToSearch, setTermToSearch] = useState('');

    const handleSearch = useCallback((searchTerm) => {
        setTermToSearch(searchTerm);
    }, []);

    return (
        <Fragment>
            <SearchBar onSearch={handleSearch} />
            <GifList termToSearch={termToSearch} />
        </Fragment>
    );
}

export default GifFinder;
