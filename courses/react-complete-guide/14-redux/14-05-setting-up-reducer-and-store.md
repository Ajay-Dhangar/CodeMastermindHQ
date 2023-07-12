---
id: 14-05-setting-up-reducer-and-store
title: 14.05 Setting Up Reducer And Store
date: 2021-04-21 20:38:43
---
## `Installing Redux`

```bash npm2yarn
npm install --save redux
```

## New `redux-basics.js`

```jsx title="redux-basics.js" {}
const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action

// Subscription
```
