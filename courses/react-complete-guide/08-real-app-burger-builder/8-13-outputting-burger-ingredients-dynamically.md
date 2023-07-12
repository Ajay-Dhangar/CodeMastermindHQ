---
id: 8-13-outputting-burger-ingredients-dynamically
title: 8.13 Outputting Burger Ingredients Dynamically
date: 2021-04-10 12:06:01
---

## Burger.js

```jsx title="Burger.js" {6-10,14}
import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
```

## BurgerBuilder.js

```jsx title="BurgerBuilder.js" {5-16,20}
import React, { Component, Fragment } from "react";
import Burger from "../components/Burger/Burger";

class BurgerBuilder extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  };
  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Control</div>
      </Fragment>
    );
  }
}
export default BurgerBuilder;

```
