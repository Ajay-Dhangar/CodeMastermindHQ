---
id: 7-24-passing-unknown-props
title: 7.24 Passing Unknown Props
date: 2021-04-08 18:59:54
---

Let's now use it here, `withClass` and let's pass the person component as the first argument and the class I want to add is `classes.Person`, using the CSS modules and this person class here.

```jsx title="src/hoc/withClass.js" {6}
import React from "react";

const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
```

```jsx title="Person.js" {2-3,24}
import React, { Component, Fragment } from "react";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Fragment>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

export default withClass(Person, classes.Person);
```

It works just as it did before, thanks to props being used and props being passed to the `WrappedComponent`.
