---
id: 7-30-using-context-api
title: 7.30 Using Context API
date: 2021-04-09 00:20:10
---

## From A -> D

`Context` was introduced by React and it helps us handle cases like this, where you need certain data, certain state in multiple components and you don't want to pass that state across multiple layers of components just to get it from component A at the top to component D at the very bottom when the components B, C in between don't really care about it  and that's exactly the use case here.

We want to skip the `Persons` component and with the React context feature, we can do that. How does it work then?

:::caution
The Context is a JavaScript object that can be passed between React components without using props, behind the scenes.
Technically, it doesn't have to be an object. You could also have an array, a string, a number etc. as a context value!
:::

## new `auth-context.js`

```jsx title="src/context/auth-context.js" {}
import React from "react";

const authContext = React.createContext({
  authenticated: false,
  login: () => {},
});

export default authContext;
```

For example, here I'll set *authenticated* to false and I'll also add a *login* method here. However this method will not do anything, it's an empty anonymous function and I'm adding this here because if I initialize my default value with everything I want to be able to access on this `context` from different components in my application, then I actually get better **auto-completion** from the IDE and that's the only reason.

## App.js

```jsx title="App.js" {2,15-20,30}
...
import AuthContext from "../context/auth-context";

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
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              personsLength={this.state.persons.length}
              showPersons={this.state.showPersons}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
```

## Persons.js

Not needed! Thanks to the `context`.

## Person.js

```jsx title="Person.js" {2,10-15}
...
import AuthContext from "../../../context/auth-context";

...

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Fragment>
        <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
```

## Cockpit.js

```jsx title="Cockpit.js" {2,13-15}
...
import AuthContext from "../../context/auth-context";

...

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);
```

This is especially useful if you have very long chains of data you're passing around and if you don't want to pass data from component to component, if you don't need it in these in-between components, then `context` is a great way of bypassing components and directly passing data from A to D.
