---
id: 7-03-splitting-app-into-components
title: 7.03 Splitting App Into Components
date: 2021-04-06 23:48:34
---

## Refactor App.js

```jsx title="App.js" {2-3,12-16,22-26}
import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";

...

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
```

## New Persons.js

```jsx title="Persons.js" {5,8,12}
import React from "react";
import Person from "./Person/Person";

const persons = (props) =>
  props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
      />
    );
  });

export default persons;
```

## New Cockpit.js

```jsx title="Cockpit.js" {7-8,11,15,18}
import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
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
      <h1>Hi, I'm a React app!</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
```

## Refactor App.css

```jsx title="App.css"
.App {
  text-align: center;
}
```

## New Cockpit.css

```jsx title="Cockpit.css" {9,18,23,27}
.red {
  color: red;
}

.bold {
  font-weight: bold;
}

.Cockpit button {
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
}

.Cockpit button:hover {
  background-color: lightgreen;
  color: #333;
}

.Cockpit button.Red {
  background-color: red;
}

.Cockpit button.Red:hover {
  background-color: salmon;
}
```
