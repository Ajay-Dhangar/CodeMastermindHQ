---
id: 7-22-higher-order-components-hoc-intro
title: 7.22 Higher Order Components HOC Intro
date: 2021-04-08 16:42:21
---

Another example for a `higher order component` that you could create would be a component that sets up a div that contains a class or sets up a class, like here.

```jsx title="App.js" {4}
...

 return (
      <div className={classes.App}>
        <button
...
```

There is nothing wrong with just using a Div with a class name, but this serves as a good example for a custom Higher Order Component you could create, that does more than the Aux component.

## WithClass.js

```jsx title="src/hoc/WithClass.js" {}
import React from "react";

const withClass = (classes) => {
  return <div className={props.classes}>{props.children}</div>;
};

export default withClass;
```

```jsx title="App.js" {2,7,24}
...
import WithClass from "../hoc/WithClass";

...

    return (
      <WithClass classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </WithClass>
    );
  }
}

export default App;
```
