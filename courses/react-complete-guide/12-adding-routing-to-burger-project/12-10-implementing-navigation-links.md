---
id: 12-10-implementing-navigation-links
title: 12.10 Implementing Navigation Links
date: 2021-04-20 12:08:39
---

## `NavigationItems.js`

```jsx title="NavigationItems.js" {7,10}
import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </ul>
);

export default navigationItems;
```

## `NavigationItem.js`

```jsx title="NavigationItem.js" {2,7-10,13}
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
```
