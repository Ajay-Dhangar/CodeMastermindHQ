---
id: 17-03-preparing-folder-structure
title: 17.03 Preparing Folder Structure
date: 2021-07-14 23:25:14
---

## `store` Folder Structure

```bash
store
 │
 ├── actions
 │     ├── actionTypes.js
 │     ├── burgerBuilder.js
 │     └── order.js
 │
 │
 ├── reducers
 │   ├── burgerBuilder.js
 │   └── order.js
 │
```

## `index.js`

```jsx title="src\index.js" {9}
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./store/reducers/burgerBuilder";

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

## `BurgerBuilder.js`

```jsx title="src\containers\BurgerBuilder\BurgerBuilder.js" {10}
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import axios from "../../axios-orders";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actionTypes from "../../store/actions/actionTypes";

class BurgerBuilder extends Component {

    ...
```

## Renamed `actions.js` to `actions/actionTypes.js`

```jsx title="src\store\actions\actionTypes.js" {}
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
```

## New `actions/burgerBuilder.js`

```jsx title="src\store\actions\burgerBuilder.js" {}

```

## New `actions/order.js`

```jsx title="src\store\actions\order.js" {}

```

## Renamed `reducer.js` to `reducers/burgerBuilder.js`

```jsx title="src\store\reducers\burgerBuilder.js" {1}
import * as actionTypes from "../actions/actionTypes";

const initialState = {

    ...
```

## New `reducers/order.js`

```jsx title="src\store\reducers\order.js" {}

```
