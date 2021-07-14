import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
    CircularProgress,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    IconButton,
    Snackbar,
    Tooltip,
    Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { FavoriteBorder as FavoriteBorderIcon } from '@material-ui/icons';

import { like } from 'reducers/likedGifsSlice';
import { useGetGifsByTermQuery } from 'services/giphy';
import useStyles from './GifList.styles';

function GifList(props) {
    const { termToSearch, ...restProps } = props;
    const dispatch = useDispatch();
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const {
        data: response,
        error,
        isLoading,
    } = useGetGifsByTermQuery(termToSearch);

    const fetchedGifs = useMemo(
        () => (response ? response.data : []),
        [response]
    );

    const handlerClick = useCallback(
        (gif) => () => {
            dispatch(like(gif));
            setOpen(true);
        },
        [dispatch]
    );

    const handleClose = useCallback((event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }, []);

    if (error) {
        return <Typography>Oh no, there was an error.</Typography>;
    }

    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <Fragment>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    variant="filled"
                    severity="success"
                    elevation={6}
                    onClose={handleClose}
                >
                    GIF liked!
                </Alert>
            </Snackbar>
            <ImageList cols={4} {...restProps}>
                {fetchedGifs.map((gif) => (
                    <ImageListItem key={gif.id}>
                        <img src={gif.images.downsized.url} alt={gif.title} />
                        <ImageListItemBar
                            title={gif.title}
                            subtitle={
                                <span>
                                    by:{' '}
                                    {gif.username ? gif.username : 'anonymous'}
                                </span>
                            }
                            actionIcon={
                                <Tooltip title="Add this gif to your favorites">
                                    <IconButton
                                        className={classes.favoriteIcon}
                                        onClick={handlerClick(gif)}
                                    >
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                </Tooltip>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Fragment>
    );
}

GifList.propTypes = {
    termToSearch: PropTypes.string.isRequired,
};

export default GifList;
