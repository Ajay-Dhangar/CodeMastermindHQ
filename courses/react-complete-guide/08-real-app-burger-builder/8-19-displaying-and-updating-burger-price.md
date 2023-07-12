---
id: 8-19-displaying-and-updating-burger-price
title: 8.19 Displaying And Updating Burger Price
date: 2021-04-10 19:41:22
---

## BurgerBuilder.js

```jsx title="BurgerBuilder.js" {10}
...

    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </Fragment>
    );
  }
}
export default BurgerBuilder;
```

## BuildControls.js

```jsx title="BuildControls.js" {5-7}
...

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
  </div>
);

export default buildControls;
```
