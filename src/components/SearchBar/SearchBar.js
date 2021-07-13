import React, { useCallback, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

function SearchBar(props) {
    const { onSearch: triggerSearch, ...restProps } = props;

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            triggerSearch(searchTerm);
            setSearchTerm('');
        },
        [triggerSearch, searchTerm]
    );

    const handleChange = useCallback((event) => {
        const {
            target: { value: giphySearchTerm },
        } = event;

        setSearchTerm(giphySearchTerm);
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item md={10} sm={6}>
                    <TextField
                        placeholder="Giphy Term"
                        type="search"
                        variant="outlined"
                        onChange={handleChange}
                        value={searchTerm}
                        fullWidth
                        {...restProps}
                    />
                </Grid>
                <Grid item md={2} sm={6}>
                    <Button variant="contained" type="submit" color="primary">
                        Search for GIF
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default SearchBar;
