---
id: 8-23-implementing-backdrop-component
title: 8.23 Implementing Backdrop Component
date: 2021-04-10 23:01:26
---

## BurgerBuilder.js

```jsx title="BurgerBuilder.js" {3-5,19}
...

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Fragment>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary ingredients={this.state.ingredients} />
```

## New Backdrop.js

```jsx title="Backdrop.js" {}
import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
```

## Backdrop.module.css

```css title="Backdrop.module.css" {}
.Backdrop {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
```

## Modal.js

```jsx title="Modal.js" {1-2,6-7,17}
import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";

const modal = (props) => (
  <Fragment>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Fragment>
);

export default modal;
```
