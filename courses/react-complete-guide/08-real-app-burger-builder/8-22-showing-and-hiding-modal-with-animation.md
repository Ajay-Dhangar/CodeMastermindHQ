---
id: 8-22-showing-and-hiding-modal-with-animation
title: 8.22 Showing And Hiding Modal With Animation
date: 2021-04-10 22:29:12
---

## BurgerBuilder.js

```jsx title="BurgerBuilder.js" {12,16-18,31,40}
...

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };
...

  purchaseHandler = () => {
    this.setState({ purchasing: true });
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
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice}
        />
      </Fragment>
    );
  }
}
export default BurgerBuilder;
```

## BuildControls.js

```jsx title="BuildControls.js" {6}
...

    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
```

## Modal.js

```jsx title="Modal.js" {4-14}
import React from "react";
import classes from "./Modal.module.css";

const modal = (props) => (
  <div
    className={classes.Modal}
    style={{
      transform: props.show ? "translateY(0)" : "translateY(-100vh)",
      opacity: props.show ? "1" : "0",
    }}
  >
    {props.children}
  </div>
);

export default modal;
```
