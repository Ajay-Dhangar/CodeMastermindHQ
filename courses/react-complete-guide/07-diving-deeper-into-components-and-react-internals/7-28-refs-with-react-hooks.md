---
id: 7-28-refs-with-react-hooks
title: 7.28 Refs With React Hooks
date: 2021-04-08 23:01:12
---

I automatically want to click this button here whenever this entire page loads.

```jsx title="Cockpit.js" {1,5,13,25}
import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    // setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  ...

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
```

So that is how you can set references with the `useRef()` hook, here when using React hooks in functional components and that also hopefully served as an example of how `useEffect()` works and how it actually executes this function only after this JSX code was passed and rendered for the first time, so that React did have a chance of connecting your reference here.
