---
id: 7-11-controlling-useeffect-behavior
title: 7.11 Controlling useEffect Behavior
date: 2021-04-07 20:42:56
---

## If Person component Changed

```jsx title="Cockpit.js" {11}
import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
  }, [props.persons]);

  // useEffect()

  const assignedClasses = [];
  ...
```

## If first time Person Component renders

= componentDidMount

```jsx title="Cockpit.js" {11}
import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
  }, []);

  // useEffect()

  const assignedClasses = [];
```
