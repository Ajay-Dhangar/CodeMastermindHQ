---
id: 5-06-using-radium-for-media-queries
title: 5.06 Using Radium For Media Queries
date: 2021-04-03 23:35:45
---

```jsx title="Person.js" {1,6-9,12,22}
import Radium from "radium";
import React from "react";
import "./Person.css";

const person = (props) => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px",
    },
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
```

This is a component made available by `Radium` and whilst wrapping the export with Radium is enough for its pseudo selectors, for basically transforming selectors like `media queries` or other `animations` with keyframes, we need to **wrap the entire application in a special component** provided by Radium.

```jsx title="App.js" {2,10,19}
import color from "color";
import Radium, { StyleRoot } from "radium";
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

    ...

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React app!</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
```
