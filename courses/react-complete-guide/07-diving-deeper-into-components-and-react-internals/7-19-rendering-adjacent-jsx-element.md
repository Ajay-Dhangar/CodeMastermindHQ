---
id: 7-19-rendering-adjacent-jsx-element
title: 7.19 Rendering Adjacent JSX Element
date: 2021-04-06 16:58:19
---

[React Adjacent JSX PDF](pdf/19-react-adjacent-jsx.pdf)

## With Array

```jsx title="Person.js" {6-17}
import React, { Component } from "react";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return [
      <p key="i1" onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>,
      <p key="i2">{this.props.children}</p>,
      <input
        key="i3"
        type="text"
        onChange={this.props.changed}
        value={this.props.name}
      />,
    ];
  }
}

export default Person;

```

## With Auxiliary component

:::caution
And side note for Windows users, there `aux.js` will not work, so on Windows you should name this `auxiliary.js` simply because aux is a reserved word or name on Windows systems, on Linux and Mac, this is no problem.
:::

```jsx title="src/hoc/Auxiliary.js" {}
const auxillary = (props) => props.children;

export default auxillary;
```

```jsx title="Person.js" {2,8,19}
import React, { Component } from "react";
import Aux from "../../../hoc/Auxillary";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
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
      </Aux>
    );
  }
}

export default Person;
```
