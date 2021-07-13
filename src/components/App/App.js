import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { like, unlike, selectLikedGifs } from 'reducers/likedGifsSlice';

function App() {
    const likedGifs = useSelector(selectLikedGifs);
    const dispatch = useDispatch();
    const [searchedGifs, setSearchedGifs] = useState([]);

    return <div>Gif Finder</div>;
}

export default App;
