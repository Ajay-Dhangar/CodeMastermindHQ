---
id: 5-05-adding-and-using-radium
title: 5.05 Adding And Using Radium
date: 2021-04-03 22:56:30
---

Using radium is one way of getting the best of both worlds `scoped styles` and advance CSS features like `pseudos selectors` and `media queries`.

## Install Radium

Source: <a href='https://www.npmjs.com/package/radium' class='external'>npmjs.com: Radium</a>

```bash npm2yarn
npm install --save radium
```

If error:

```shell
 Found: react@17.0.2
npm ERR! node_modules/react
npm ERR!   react@"^17.0.1" from the root project
...
```

Then (read more: <a href='https://stackoverflow.com/questions/64529958/error-when-trying-to-install-react-redux-dependency' class='external'>stackoverflow.com: Error When Trying To Install React Redux Dependency</a>):

```shell
npm install --legacy-peer-deps
```

## Using Radium

```jsx title="App.js" {1-2,15-18,41-44}
import color from "color";
import Radium from "radium";
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
    ...
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: color("green").lighten(0.75),
        color: "black",
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: color("red").lighten(0.5),
        color: "black",
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }
    ...
```

You have the normal CSS `pseudo selectors` you can add, and you still have scoped styles which you can easily edit from within your JavaScript code.

Now `Radium` doesn't limit you to using pseudo selectors as we did, you can also add `media queries`.
