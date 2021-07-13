import { configureStore } from '@reduxjs/toolkit';

import likedGifsReducer from 'reducers/likedGifsSlice';
import { giphyApi } from 'services/giphy';

export const store = configureStore({
    reducer: {
        likedGifs: likedGifsReducer,
        [giphyApi.reducerPath]: giphyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(giphyApi.middleware),
});
