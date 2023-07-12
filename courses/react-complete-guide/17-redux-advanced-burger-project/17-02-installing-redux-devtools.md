---
id: 17-02-installing-redux-devtools
title: 17.02 Installing Redux Devtools
date: 2021-07-14 23:07:28
---

## Installing Redux Devtools Plugin

For Chrome: <a href='https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en' class='external'>chrome.google.com: Chrome Web Store</a>

Read more: <a href='https://github.com/zalmoxisus/redux-devtools-extension' class='external'>github.com: Redux Devtools Extension</a>

## `index.js`

```jsx title="src\index.js" {11-14}
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./store/reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
