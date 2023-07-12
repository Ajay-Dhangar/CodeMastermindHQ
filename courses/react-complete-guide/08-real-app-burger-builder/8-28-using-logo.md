---
id: 8-28-using-logo
title: 8.28 Using Logo
date: 2021-04-11 12:01:40
---

![](pdf/8-28-burger-logo.png)

## New Logo.js

```jsx title="Logo.js" {}
import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burger Logo" />
  </div>
);

export default logo;
```

## New Logo.module.css

```jsx title="Logo.module.css" {}
.Logo {
  background-color: #fff;
  padding: 8px;
  height: 80%;
  box-sizing: border-box;
  border-radius: 5px;
}

.Logo img {
  height: 100%;
}
```

## Toolbar.js

```jsx title="Toolbar.js" {2,8}
import React from "react";
import Logo from "../../Logo/Logo";
import classes from "./Toolbar.module.css";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <ul>...</ul>
    </nav>
  </header>
);

export default toolbar;
```
