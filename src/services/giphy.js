import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const giphyApi = createApi({
    reducerPath: 'giphyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.giphy.com/v1/gifs`,
    }),
    endpoints: (builder) => ({
        getGifsByTerm: builder.query({
            query: (term) =>
                `search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${term}`,
        }),
    }),
});

export const { useGetGifsByTermQuery } = giphyApi;
