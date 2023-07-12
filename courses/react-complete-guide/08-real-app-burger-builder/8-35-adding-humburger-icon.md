---
id: 8-35-adding-humburger-icon
title: 8.35 Adding Humburger Icon
date: 2021-04-11 21:51:28
---

## New DrawerToggle.module.css

```css title="DrawerToggle.module.css" {}
.DrawerToggle {
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
}

.DrawerToggle div {
  width: 90%;
  height: 3px;
  background-color: white;
}

@media (min-width: 500px) {
  .DrawerToggle {
    display: none;
  }
}
```

## DrawerToggle.js

```jsx title="DrawerToggle.js" {2,5-8}
import React from "react";
import classes from "./DrawerToggle.module.css";

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
```
