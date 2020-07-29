# Demo How to use Redux & fetching api
![PLEASE](https://im4.ezgif.com/tmp/ezgif-4-64c9fdc19cf3.gif)

# React Native Boilerplate for CoderSchool

Simple react-native boilerplate for mobile development.

## Getting Started

1. Ensure you've followed the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html)
1. Clone this project `git clone https://github.com/tranduyduong/project-base/tree/boilerplate-fetching-api`
2. Check out code to boilerplate-fetching-api branch: Run `git checkout boilerplate-fetching-api`
3. Run `yarn install` from root directory
4. Start the app `yarn ios` or `yarn android`

## Stack

- [React Native](https://facebook.github.io/react-native/) for building mobile apps using Javascript
- [Redux](https://github.com/reduxjs/redux) a predictable state container for Javascript apps
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) middleware for Redux
- [Babel](http://babeljs.io/) for ES6+ support
- [React Navigation](https://github.com/react-community/react-navigation) navigation for React Native

## File Structure

- `/src` - Contains our React Native App codebase
  - `/actions` - Shared Action Types and Action Creators
  - `/constants` - Shared Images, Fonts and others
  - `/containers` - Smart components
        - `/index.js`
        - `/counter`
        - - - Action.js
        - - - Constants.js
        - - - index.js
        - - - Reducer.js
        - `/googleNews`
        - - - Action.js
        - - - Constants.js
        - - - index.js
        - - - Reducer.js
  - `/reducers` - Reducers
        - `/index.js`
  - `/stores` - Store
      - `/index.js`