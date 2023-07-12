---
id: 5-10-1-0-css-modules-usage
title: 5.10.1.0 CSS Modules Usage
date: 2021-04-04 21:35:40
---

After adding the configuration (see the previous page) you'll get an `object` and `properties` to access the CSS rules.

```css title="App.css" {13-25}
.App {
  text-align: center;
}

.red {
  color: red;
}

.bold {
  font-weight: bold;
}

.Button {
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
}

.Button:hover {
  background-color: lightgreen;
  color: #333;
}
```

```jsx title="App.js" {2,7,9,12,16,19}
import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

...

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red]
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React app!</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={classes.Button} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
```
