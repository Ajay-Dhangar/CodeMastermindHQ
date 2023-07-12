---
id: 7-23-another-form-hoc
title: 7.23 Another Form HOC
date: 2021-04-08 17:52:35
---

Using regular JavaScript...

This higher order component has the purpose of adding a div with a certain CSS class around any element and therefore, getting that class name that should be added makes a lot of sense, of course you can also accept as many arguments as you want based on what your higher order component does.

## WithClass.js → withClass.js

The lowercase because we'll not use this as a component anymore because well, it isn't a component anymore, it's a normal function, a function that returns a component function but not a component itself.

```jsx title="src/hoc/withClass.js" {}
import React from "react";

const withClass = (WrappedComponent, className) => {
  return (peops) => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withClass;
```

```jsx title="App.js" {2-3,7,24,29}
...
import Aux from "../hoc/Auxiliary";
import withClass from "../hoc/withClass";
...

    return (
      <Aux>
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
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
```
