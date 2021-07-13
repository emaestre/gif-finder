import { configureStore } from '@reduxjs/toolkit';

import likedGifsReducer from 'reducers/likedGifsSlice';

export const store = configureStore({
    reducer: {
        likedGifs: likedGifsReducer,
    },
});
