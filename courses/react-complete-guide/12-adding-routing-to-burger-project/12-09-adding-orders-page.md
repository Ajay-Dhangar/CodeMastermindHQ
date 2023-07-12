---
id: 12-09-adding-orders-page
title: 12.09 Adding Orders Page
date: 2021-04-20 11:07:26
---

## `App.js`

```jsx title="App.js" {6,15}
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
```

## New `Order.js`

```jsx title="Order.js" {}
import React from "react";
import classes from "./Order.module.css";

const order = (props) => (
  <div className={classes.Order}>
    <p>Ingredients: Salad (1)</p>
    <p>
      Price:<strong>USD 5.2</strong>
    </p>
  </div>
);

export default order;
```

## New `Order.module.css`

```css title="Order.module.css" {}
.Order {
  width: 100%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
}
```

## New `Orders.js`

```jsx title="Orders.js" {}
import React, { Component } from "react";
import Order from "../../components/Order/Order";

class Orders extends Component {
  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}
export default Orders;
```
