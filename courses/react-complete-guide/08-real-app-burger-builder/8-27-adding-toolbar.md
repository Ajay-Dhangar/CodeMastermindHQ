---
id: 8-27-adding-toolbar
title: 8.27 Adding Toolbar
date: 2021-04-11 10:35:29
---

## Corrected Folder Structure

:::caution
I corrected the mistake (see [lesson 8.9](8-09-starting-implementation-burger-builder-container)). And moved the `BurgerBuilder` folder to the `containers` folder. All works fine yet.
:::

```bash
src/
│
├── assets/
│
├── components/
│     ├── Layout/
│     │      ├── Layout.js
│     │      └── Layout.module.css
│     ├── Burger/
│     │      ├── BuildControls/
│     │      │        ├── BuildControl/
│     │      │        │        ├── BuildControl.js
│     │      │        │        └── BuildControl.module.css
│     │      │        ├── BuildControls.js
│     │      │        └── BuildControls.module.css
│     │      ├── BurgerIngredients/
│     │      │        ├── BurgerIngredients.js
│     │      │        └── BurgerIngredients.module.css
│     │      └── OrderSummary/
│     │               └── OrderSummary.js
│     │      └── Navigation/
│     │               └── Toolbar/
│     │                      ├── Toolbar.js
│     │                      └── Toolbar.module.css
│     └── UI/
│         ├── Backdrop/
│         │      ├── Backdrop.js
│         │      └── Backdrop.module.css
│         ├── Button/
│         │      ├── Button.js
│         │      └── Button.module.css
│         └── Modal/
│                ├── Modal.js
│                └── Modal.module.css
│
├── containers/
│       └── BurgerBuilder/
│                └── BurgerBuilder.js
├── App.js
├── App.test.js
├── index.js
├── index.css
│
```

## New Toolbar.js

```jsx title="Toolbar.js" {}
import React from "react";
import classes from "./Toolbar.module.css";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div>LOGO</div>
    <nav>
      <ul>...</ul>
    </nav>
  </header>
);

export default toolbar;
```

## New Toolbar.module.css

```jsx title="Toolbar.module.css" {}
.Toolbar {
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
}

.Toolbar nav {
  height: 100%;
}
```

## Layout.js

```jsx title="Layout.js" {2,7}
import React, { Fragment } from "react";
import Toolbar from "../Navigation/Tollbar/Toolbar";
import classes from "./Layout.module.css";

const layout = (props) => (
  <Fragment>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Fragment>
);
export default layout;
```

## Layout.module.css

```jsx title="Layout.module.css" {2}
.Content {
  margin-top: 72px;
}

```
