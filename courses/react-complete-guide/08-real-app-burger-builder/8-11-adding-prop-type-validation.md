---
id: 8-11-adding-prop-type-validation
title: 8.11 Adding PropTypes Validation
date: 2021-04-09 23:08:59
---

## Installing `prop-types`

I'll cancel the development server and then:

```bash npm2yarn
npm install --save prop-types
```

## Converting a functional component to a class-based

Now you don't need to transform into a class-based component actually, you can use `PropTypes` on functional components as well, I want to practice this conversion to a class-based component once again.

```jsx title="BurgerIngredient.js" {1-2,5-6,9,38-41,44}
import PropTypes from "prop-types";
import React, { Component } from "react";
import classes from "./BurgerIngredient.module.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case "salad":
        ingredient = <div className={classes.Salad}></div>;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
```
