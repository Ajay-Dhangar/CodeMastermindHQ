---
id: 6-5-using-error-boundaries
title: 6.5 Using Error Boundaries
date: 2021-04-06 11:40:16
---

> Wrap code which might fail at runtime, which you can't prevent, and then show a custom error message or some fallbacks page or content.

Source: <a href='https://codepen.io/gaearon/pen/wqvxGa?editors=0010' class='external'>codepen.io: WqvxGa</a>

## ErrorBoundary.js

```jsx title="ErrorBoundary/ErrorBoundary.js" {}
import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: "",
  };

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error,
    });
  };
  render() {
    if (this.state.hasError) {
      return (
        <h1>{this.state.errorMessage && this.state.errorMessage.toString()}</h1>
      );  // If you try to display {this.state.errorMessage}, you will catch a blank screen
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
```

## App.js

:::caution
Note, that the `key={person.id}` attribute is moved up one level: from the `Person` tag to the `ErrorBoundary` tag.
:::

```jsx title="App.js" {3,17,24}
import React, { Component } from "react";
import classes from "./App.css";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

    ...

  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React app!</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
```

## Where to Place Error Boundaries

Source: <a href='https://reactjs.org/docs/error-boundaries.html#where-to-place-error-boundaries' class='external'>reactjs.org: Where To Place Error Boundaries</a>

The granularity of error boundaries is up to you. You may wrap top-level route components to display a “Something went wrong” message to the user, just like how server-side frameworks often handle crashes. You may also wrap individual widgets in an error boundary to protect them from crashing the rest of the application.
