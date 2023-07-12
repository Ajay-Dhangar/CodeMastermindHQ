---
id: 8-21-creating-order-summary-modal
title: 8.21 Creating Order Summary Modal
date: 2021-04-10 22:17:14
---

## BurgerBuilder.js

```jsx title="BurgerBuilder.js" {4-5,19-21}
import React, { Component, Fragment } from "react";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Burger from "../components/Burger/Burger";
import OrderSummary from "../components/Burger/OrderSummary/OrderSummary";
import Modal from "../components/UI/Modal/Modal";
...

 render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Fragment>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />

...
```

## New OrderSummary.js

```jsx title="OrderSummary.js" {}
import React, { Fragment } from "react";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </Fragment>
  );
};

export default orderSummary;
```

## New Modal.js

```jsx title="Modal.js" {}
import React from "react";
import classes from "./Modal.module.css";

const modal = (props) => <div className={classes.Modal}>{props.children}</div>;

export default modal;
```

## New Modal.module.css

```css title="Modal.module.css" {}
.Modal {
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
}

@media (min-width: 600px) {
  .Modal {
    width: 500px;
    left: calc(50% - 250px);
  }
}
```
