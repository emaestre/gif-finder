import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    gifList: [],
};

export const likedGifsSlice = createSlice({
    name: 'likedGifs',
    initialState,
    reducers: {
        like: (state, action) => {
            state.gifList.push(action.payload);
        },
        unlike: (state, action) => {
            const {
                payload: { id },
            } = action;

            const filteredGifList = state.gifList.filter(
                (gif) => gif.id !== id
            );

            state.gifList = filteredGifList;
        },
    },
});

export const { like, unlike } = likedGifsSlice.actions;

export const selectLikedGifs = (state) => state.likedGifs.gifList;

export default likedGifsSlice.reducer;
