---
id: 12-02-building-checkout-container
title: 12.02 Building Checkout Container
date: 2021-04-19 19:00:05
---

## `App.js`

```jsx title="App.js" {4,12}
import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;
```

## New `CheckoutSummary.js`

```jsx title="CheckoutSummary.js" {}
import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it taste well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked>
        CANCEL
      </Button>
      <Button btnType="Success" clicked>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
```

## New `CheckoutSummary.module.css`

```css title="CheckoutSummary.module.css" {}
.CheckoutSummary {
  text-align: center;
  width: 80%;
  margin: auto;
}

@media (min-width: 600px) {
  .CheckoutSummary {
    width: 500px;
  }
}
```

## New `Checkout.js`

```jsx title="Checkout.js" {}
import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  };
  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} />
      </div>
    );
  }
}
export default Checkout;
```
