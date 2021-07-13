import React, { useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
    IconButton,
    Typography,
} from '@material-ui/core';
import { Info as InfoIcon } from '@material-ui/icons';

// import { like, selectLikedGifs, unlike } from 'reducers/likedGifsSlice';
import { useGetGifsByTermQuery } from 'services/giphy';

function GifList(props) {
    const { termToSearch } = props;
    // const likedGifs = useSelector(selectLikedGifs);
    // const dispatch = useDispatch();

    const {
        data: response,
        error,
        isLoading,
    } = useGetGifsByTermQuery(termToSearch);

    const fetchedGifs = useMemo(
        () => (response ? response.data : []),
        [response]
    );

    if (error) {
        return <Typography>Oh no, there was an error.</Typography>;
    }

    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <div>
            <ImageList rowHeight={250}>
                {fetchedGifs.map((gif) => (
                    <ImageListItem key={gif.id}>
                        <img src={gif.images.original.url} alt={gif.title} />
                        <ImageListItemBar
                            title={gif.title}
                            subtitle={<span>by: {gif.username}</span>}
                            actionIcon={
                                <IconButton
                                    aria-label={`info about ${gif.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

export default GifList;
