---
id: 8-15-adding-build-control-component
title: 8.15 Adding Build Control Component
date: 2021-04-10 14:27:24
---

## New BuildControl.js

```jsx title="BuildControl.js" {}
import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = (props) => (
  <div classname={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
);

export default buildControl;
```

## New BuildControl.module.css

```css title="BuildControl.module.js" {}
.BuildControl {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
}

.BuildControl button {
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;
}

.BuildControl button:disabled {
  background-color: #ac9980;
  border: 1px solid #7e7365;
  color: #ccc;
  cursor: default;
}

.BuildControl button:hover:disabled {
  background-color: #ac9980;
  color: #ccc;
  cursor: not-allowed;
}

.Label {
  padding: 10px;
  font-weight: bold;
  width: 80px;
}

.BuildControl .Less {
  background-color: #d39952;
  color: white;
}

.BuildControl .More {
  background-color: #8f5e1e;
  color: white;
}

.BuildControl .Less:hover,
.BuildControl .Less:active {
  background-color: #daa972;
  color: white;
}

.BuildControl .More:hover,
.BuildControl .More:active {
  background-color: #99703f;
  color: white;
}
```
