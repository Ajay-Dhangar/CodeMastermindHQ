---
id: 8-12-starting-burger-component
title: 8.12 Starting Burger Component
date: 2021-04-09 23:45:00
---

## New Burger.js

```jsx title="Burger.js"
import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
```

## New Burger.module.css

```css title="Burger.module.css"
.Burger {
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
}

@media (min-width: 500px) and (min-height: 400px) {
  .Burger {
    width: 350px;
    height: 300px;
  }
}

@media (min-width: 500px) and (min-height: 401px) {
  .Burger {
    width: 450px;
    height: 400px;
  }
}

@media (min-width: 1000px) and (min-height: 700px) {
  .Burger {
    width: 700px;
    height: 600px;
  }
}
```

## BurgerBuilder.js

```jsx title="BurgerBuilder.js" {2,8}
import React, { Component, Fragment } from "react";
import Burger from "../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Fragment>
        <Burger />
        <div>Build Control</div>
      </Fragment>
    );
  }
}
export default BurgerBuilder;
```
