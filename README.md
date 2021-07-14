# KnowHow - Gif Finder

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Setup Instructions

### **1 | Install Dependencies**

To install the dependencies for this project you can use the following commands:

``` bash
yarn
```

or

``` bash
yarn install
```

### **2 | Setup Environment Variables**

Clone the `.env.sample` file with the following command:

``` bash
cp .env.sample .env
```

and set your Giphy API key.

### **3 | Start Server**

``` bash
yarn start
```

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Main Project Structure

``` shell
src/
├── components/
│   ├── App
│   ├── GifFinder
│   ├── GifList
│   ├── LikedGifs
│   └── SearchBar
├── reducers/
│   └── likedGifsSlice.js
└── services/
│   └── giphy.js
├── index.js
└── store.js
```

## Technologies Used

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
  * [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) - Used to create services.
* [React Router](https://reactrouter.com/web/guides/quick-start)
* [Material UI](https://material-ui.com/)

## Screenshots

<img width="1915" alt="Screen Shot 2021-07-13 at 9 25 42 PM" src="https://user-images.githubusercontent.com/11685154/125546377-25a0a029-a5e5-45a9-ab13-5cf79ab91786.png">
<img width="1915" alt="Screen Shot 2021-07-13 at 9 26 02 PM" src="https://user-images.githubusercontent.com/11685154/125546380-75e3e340-ca43-4eb0-adb3-0dc56f6648c2.png">
<img width="1915" alt="Screen Shot 2021-07-13 at 9 26 25 PM" src="https://user-images.githubusercontent.com/11685154/125546387-997e1822-f40b-45b8-a0aa-1825cfc92efd.png">
