---
id: 8-29-adding-reusable-navigation-items
title: 8.29 Adding Reusable Navigation Items
date: 2021-04-11 13:24:41
---

## New NavigationItems.js

```jsx title="NavigationItems.js" {}
import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
```

## New NavigationItems.module.css

```css title="NavigationItems.module.css" {}
.NavigationItems {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
}
```

## New NavigationItem.js

```jsx title="NavigationItem.js" {}
import React from "react";
import classes from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
```

## New NavigationItem.module.css

```css title="NavigationItem.module.css" {}
.NavigationItem {
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;
}

.NavigationItem a {
  color: #fff;
  text-decoration: none;
  height: 100%;
  padding: 16px 10px;
  border-bottom: 4px solid transparent;
  box-sizing: border-box;
  display: block;
}

.NavigationItem a:hover,
.NavigationItem a:active,
.NavigationItem a.active {
  background-color: #8f5c2c;
  border-bottom: 4px solid #40a4c8;
  color: #fff;
}
```

## Toolbar.js

```jsx title="Toolbar.js" {3,11}
import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
```
