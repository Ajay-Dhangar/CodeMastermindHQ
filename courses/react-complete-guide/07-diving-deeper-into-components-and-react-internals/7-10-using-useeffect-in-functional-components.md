---
id: 7-10-using-useeffect-in-functional-components
title: 7.10 Using useEffect In Functional Components
date: 2021-04-07 20:17:47
---

useEffect = componentDidMount + componentDidUpdate

```jsx title="Cockpit.js" {5-8}
import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
  });
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) btnClass = classes.Red;
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
```
