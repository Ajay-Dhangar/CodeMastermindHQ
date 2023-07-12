---
id: 8-31-0-working-on-responsive-adjustments
title: 8.31.0 Working On Responsive Adjustments
date: 2021-04-11 15:22:10
---

## 1st Way

### Logo.module.css

```jsx title="Logo.module.css" {4}
.Logo {
  background-color: #fff;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
}

.Logo img {
  height: 100%;
}
```

### Toolbar.js

```jsx title="Toolbar.js" {9}
import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo height="80%" />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
```

### Logo.js

```jsx title="Logo.js" {6}
import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="Burger Logo" />
  </div>
);

export default logo;
```

### SideDrawer.js

```jsx title="SideDrawer.js" {10}
import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  //...
  return (
    <div className={classes.SideDrawer}>
      <Logo height="11%" />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
```

## 2 Way
