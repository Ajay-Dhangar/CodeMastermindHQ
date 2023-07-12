---
id: 15-02-installing-redux-and-react-redux
title: 15.02 Installing Redux And React Redux
date: 2021-07-12 19:19:29
---

## Installing Redux and React Redux

```bash npm2yarn
npm install --save redux react-redux
```

## New `actions.js`

```jsx title="actions.js" {}
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
```

## New `reducer.js`

```jsx title="reducer.js" {}
const initialState = {
  ingredients: null,
  totalPrice: 4,
};

const reducer = (state = initialState, action) => {};

export default reducer;
```
