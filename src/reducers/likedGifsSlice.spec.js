import likedGifsReducer, { like, unlike } from './likedGifsSlice';

describe('liked gifs reducer', () => {
    const initialState = {
        gifList: [
            {
                type: 'gif',
                id: 'QMHbvQvD5ApYjv797Z',
                url: 'https://giphy.com/gifs/meme-baby-biting-QMHbvQvD5ApYjv797Z',
            },
        ],
    };

    it('should support initial state', () => {
        expect(likedGifsReducer(undefined, {})).toEqual({
            gifList: [],
        });
    });

    it('should like gifs', () => {
        const actual = likedGifsReducer(
            initialState,
            like({
                type: 'gif',
                id: 'caJ3e5mubnTEY',
                url: 'https://giphy.com/gifs/colbert-burritos-caJ3e5mubnTEY',
            })
        );
        expect(actual.gifList.length).toEqual(2);
    });

    it('should unlike gifs', () => {
        const actual = likedGifsReducer(
            initialState,
            unlike({
                id: 'QMHbvQvD5ApYjv797Z',
            })
        );
        expect(actual.gifList.length).toEqual(0);
    });
});
