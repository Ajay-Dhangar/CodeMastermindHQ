---
id: 7-13-cleanup-work-with-useeffect-example
title: 7.13 Cleanup Work With useEffect Example
date: 2021-04-07 23:08:54
---

## setTimeout() setup

```jsx title="Cockpit.js" {8,12}
import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    const timer = setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);
  ...
```
