---
id: 17-05-executing-synchronous-code
title: 17.05 Executing Synchronous Code
date: 2021-07-15 10:03:04
---

## Installing `redux-thunk`

```bash npm2yarn
npm install --save redux-thunk
```

Read more: <a href='https://github.com/zalmoxisus/redux-devtools-extension' class='external'>github.com: Redux Devtools Extension</a>

## `index.js`

```jsx title="src\index.js" {5,12,16}
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import burgerBuilderReducer from "./store/reducers/burgerBuilder";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  burgerBuilderReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
```
