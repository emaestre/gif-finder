import React, { useCallback, useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

import useStyles from './SearchBar.styles';

function SearchBar(props) {
    const { onSearch: triggerSearch, ...restProps } = props;

    const classes = useStyles();

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
        <div className={classes.root}>
            <form onSubmit={handleSubmit} {...restProps}>
                <Grid container spacing={2}>
                    <Grid item md={10} xs={6}>
                        <TextField
                            placeholder="Giphy Term"
                            type="search"
                            variant="outlined"
                            onChange={handleChange}
                            value={searchTerm}
                            InputProps={{
                                className: classes.searchField,
                                classes: {
                                    input: classes.searchInput,
                                },
                            }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item md={2} xs={6}>
                        <Button
                            className={classes.searchButton}
                            variant="contained"
                            type="submit"
                            color="primary"
                        >
                            Search for GIF
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default SearchBar;
