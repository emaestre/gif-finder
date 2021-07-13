import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { store } from 'store';
import App from './App';

test('renders Gif Finder text', () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    expect(getByText(/Gif Finder/i)).toBeInTheDocument();
});
