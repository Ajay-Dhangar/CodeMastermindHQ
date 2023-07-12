---
id: 8-24-adding-custom-button-component
title: 8.24 Adding Custom Button Component
date: 2021-04-10 23:38:27
---

## OrderSummary.js

```jsx title="OrderSummary.js" {3-4}
...

      <button>CANCEL</button>
      <button>CONTINUE</button>
    </Fragment>
  );
};

export default orderSummary;
```

## New Button.js

```jsx title="Button.js" {}
import React from "react";
import classes from "./Button.module.css";

const button = (props) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
```

## New Button.module.css

```css title="Button.module.css" {}
.Button {
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
}

.Button:first-of-type {
  margin-left: 0;
  padding-left: 0;
}

.Success {
  color: #5c9210;
}

.Danger {
  color: #944317;
}
```
