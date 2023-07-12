---
id: 8-32-more-responsive-adjustments
title: 8.32 More Responsive Adjustments
date: 2021-04-11 16:33:42
---

## Toolbar.js

```jsx title="Toolbar.js" {12}
import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
```

## Toolbar.module.css

```css title="Toolbar.module.css" {24-28}
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

.Logo {
  height: 80%;
}

@media (max-width: 499px) {
  .DesktopOnly {
    display: none;
  }
}
```

## NavigationItems.module.css

```css title="Toolbar.module.css" {11-15}
.NavigationItems {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;
}

@media (min-width: 500px) {
  .NavigationItems {
    flex-flow: row;
  }
}
```

## NavigationItem.module.css

```css title="NavigationItem.module.css" {1-22,27,45}
.NavigationItem {
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
}

.NavigationItem a {
  color: #8f5c2c;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
}

.NavigationItem a:hover,
.NavigationItem a:active,
.NavigationItem a.active {
  color: #40a4c8;
}

@media (min-width: 500px) {
  .NavigationItem {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
  }

  .NavigationItem a {
    color: #fff;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
  }

  .NavigationItem a:hover,
  .NavigationItem a:active,
  .NavigationItem a.active {
    background-color: #8f5c2c;
    border-bottom: 4px solid #40a4c8;
    color: #fff;
  }
}
```

## SideDrawer.module.css

```css title="SideDrawer.module.css" {31}
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

.Logo {
  height: 11%;
  margin-bottom: 32px;
}
```
