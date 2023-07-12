---
id: 14-08-connecting-react-to-redux
title: 14.08 Connecting React To Redux
date: 2021-04-22 00:03:26
---

## `index.js`

```jsx title="index.js" {3,7,9}
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./store/reducer";

const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
```

## `reducer.js`

```jsx title="reducer.js" {}
const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
```
