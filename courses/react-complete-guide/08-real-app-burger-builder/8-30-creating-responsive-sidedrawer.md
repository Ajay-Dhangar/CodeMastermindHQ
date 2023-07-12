---
id: 8-30-creating-responsive-sidedrawer
title: 8.30 Creating Responsive Sidedrawer
date: 2021-04-11 14:57:39
---

## New SideDrawer.js

```jsx title="SideDrawer.js" {}
import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  //...
  return (
    <div className={classes.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
```

## New SideDrawer.module.css

```css title="SideDrawer.module.css" {}
.SideDrawer {
  position: fixed;
  width: 28px;
  min-width: 280px;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: #fff;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3 ease-out;
}

@media (min-width: 500px) {
  .SideDrawer {
    display: none;
  }
}

.Open {
  transform: translateX(0);
}

.Close {
  transform: translateX(-100%);
}
```

## Layout.js

```jsx title="Layout.js" {2,9}
import React, { Fragment } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Tollbar/Toolbar";
import classes from "./Layout.module.css";

const layout = (props) => (
  <Fragment>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Fragment>
);
export default layout;
```
