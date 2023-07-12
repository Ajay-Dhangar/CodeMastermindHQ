---
id: 7-31-context-type-and-use-context
title: 7.31 contextType and useContext
date: 2021-04-09 11:00:20
---

We learned about the context API and this way of using it is perfectly fine, but there is a `more elegant way` for using it in class-based components and in functional components.

## class-based comps

In class-based components and only there, you can use an alternative pattern to using that `AuthContext.Consumer` that gets this function, because it only gives you access to the context in your JSX code here, where you render AuthContext.Consumer.

Since React 16.6...

```jsx title="Person.js" {14,17,22-26}
import PropTypes from "prop-types";
import React, { Component, Fragment } from "react";
import AuthContext from "../../../context/auth-context";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  static contextType = AuthContext;
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Fragment>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}

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
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};
export default withClass(Person, classes.Person);
```

## functional comps

```jsx title="Cockpit.js" {1,7-9,50}
import React, { useContext, useEffect, useRef } from "react";
import AuthContext from "../../context/auth-context";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    // setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  //}, [props.persons]);

  // useEffect()

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) btnClass = classes.Red;
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
```

We'll also learn a different concept that helps us with this, `Redux` later in the course, but knowing the context API is important, because you can build exciting things with that, and it will also make it easier to understand that Redux thing later once we dive into that.
