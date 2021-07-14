import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Button,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    IconButton,
    Grid,
    Typography,
    Tooltip,
} from '@material-ui/core';
import {
    ArrowBack as ArrowBackIcon,
    Delete as DeleteIcon,
} from '@material-ui/icons';

import { selectLikedGifs, unlike } from 'reducers/likedGifsSlice';
import useStyles from './LikedGifs.styles';

function LikedGifs() {
    const likedGifs = useSelector(selectLikedGifs);
    const dispatch = useDispatch();

    const classes = useStyles();

    const handlerClick = useCallback(
        (gif) => () => {
            dispatch(unlike(gif));
        },
        [dispatch]
    );

    return (
        <div>
            <Grid
                className={classes.titleGrid}
                container
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item>
                    <Link className={classes.link} to="/">
                        <Button
                            className={classes.backButton}
                            variant="outlined"
                            color="primary"
                            startIcon={<ArrowBackIcon />}
                        >
                            Go back
                        </Button>
                    </Link>
                </Grid>
                <Grid item>
                    <Typography variant="h2">My Saved GIFs</Typography>
                </Grid>
                <Grid item />
            </Grid>
            <ImageList cols={4}>
                {likedGifs.map((gif) => (
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
                                <Tooltip title="Remove this gif from your favorites">
                                    <IconButton
                                        className={classes.favoriteIcon}
                                        onClick={handlerClick(gif)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

export default LikedGifs;
