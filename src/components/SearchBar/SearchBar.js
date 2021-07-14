import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Grid, InputAdornment, TextField } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

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
                    <Grid item md={8} xs={6}>
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
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
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
                    <Grid item md={2} xs={12}>
                        <Link className={classes.link} to="/liked">
                            <Button
                                className={classes.searchButton}
                                variant="outlined"
                                color="primary"
                            >
                                My Saved GIFs
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
