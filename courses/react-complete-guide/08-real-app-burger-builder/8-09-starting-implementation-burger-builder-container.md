---
id: 8-09-starting-implementation-burger-builder-container
title: 8.09 Starting Implementation Burger Builder Container
date: 2021-04-09 21:46:17
---

## Wrong Folder Structure

:::warning
I made a mistake! And organized the folders incorrectly.
The `BurgerBuilder` folder must be in the `containers` folder.
But despite this, everything works fine! I fixed it in [lesson 8.27](8-27-adding-toolbar).
:::

```bash
src/
│
├── assets/
│
├── BurgerBuilder
│     └── BurgerBuilder.js
│
├── components/
│     └── Layout/
│            ├── Layout.js
│            └── Layout.module.css
│
├── containers/
│
├── App.js
├── App.test.js
├── index.js
├── index.css
│
```

## New BurgerBuilder.js

```jsx title="BurgerBuilder.js" {}
import React, { Component, Fragment } from "react";

class BurgerBuilder extends Component {
  render() {
    return (
      <Fragment>
        <div>Burger</div>
        <div>Build Control</div>
      </Fragment>
    );
  }
}
export default BurgerBuilder;
```

## Layout.js

```jsx title="Layout.js" {2,7}
import React, { Fragment } from "react";
import classes from "./Layout.module.css";

const layout = (props) => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Fragment>
);
export default layout;
```

## New Layout.module.css

> This project supports CSS Modules alongside regular stylesheets using the [name].module.css file naming convention.

```css title="Layout.module.css" {}
.Content {
  margin-top: 16px;
}
```

## App.js

```jsx title="App.js" {2,10}
import React, { Component } from "react";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
```
