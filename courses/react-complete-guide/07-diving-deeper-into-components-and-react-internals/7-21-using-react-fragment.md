---
id: 7-21-using-react-fragment
title: 7.21 Using React Fragment
date: 2021-04-08 16:06:01
---

Since React 16.2 there is a built-in aux component.

:::tip
You can use `React.Fragment` or just `Fragment` with import of Fragment from React.
:::

## React.Fragment

```jsx title="Person.js" {7,18}
import React, { Component } from "react";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default Person;
```

## Fragment

```jsx title="Person.js" {1,7,18}
import React, { Component, Fragment } from "react";

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

export default Person;
```

It does not contain its own logic, its own styling, or add any structure to the JSX code, or to the real DOM that will be rendered, it just wraps another component and then maybe adds some extra logic to it.
