---
id: 8-34-adding-sidedrawer-toggle-button
title: 8.34 Adding Sidedrawer Toggle Button
date: 2021-04-11 18:25:16
---

## DrawerToggle.js

```jsx title="DrawerToggle.js" {}
import React from "react";

const drawerToggle = (props) => <div onClick={props.clicked}>MENU</div>;

export default drawerToggle;
```

## Toolbar.js

```jsx title="Toolbar.js" {4,9}
import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import classes from "./Toolbar.module.css";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
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

## Layout.js

:::caution

If you plan on using the `state`, insert state, you shouldn't do it like this:

```jsx
  sideDrawerToggleHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer });
  };
```

Due to the asynchronous nature of `setState`, this may lead to unexpected outcomes.

So instead, use the function form, expect the previous `state` as input and in there, simply return the object:

```jsx
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
```

:::

```jsx title="Layout.js" {8,14-18,23}
import React, { Component, Fragment } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Tollbar/Toolbar";
import classes from "./Layout.module.css";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}
export default Layout;
```
