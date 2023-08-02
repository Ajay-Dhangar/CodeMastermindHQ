---
id: create-class-component
title: Creating Class Components
sidebar_position: 3
sidebar_label: Creating Class Components
tags: [React, class components, React.Component, state management, lifecycle methods]
keywords: [React class components, creating class components, React.Component, state management in React, component lifecycle, React state, React render method]
---


In React, class components are a traditional way to define components. They are ES6 classes that extend the `React.Component` class and provide additional functionality and features. Class components are commonly used for their ability to manage state and handle lifecycle methods.

## 1. Understanding Class Components

Class components are JavaScript classes that inherit from `React.Component`. They use the `render()` method to return the component's UI (user interface) as JSX. Class components can hold and manage state and are ideal for more complex components that require lifecycle methods and state management.

**Example of a simple class component:**

```jsx
import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, Class Component!</h1>;
  }
}

export default Welcome;
```

## 2. Creating and Using Class Components

To create a class component, define a JavaScript class that extends `React.Component`. The component's UI is returned in the `render()` method.

**1. Create a new file named `Welcome.js`:**

```jsx
// Welcome.js
import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, Class Component!</h1>;
  }
}

export default Welcome;
```

**2. Use the class component in another component (e.g., `App.js`):**

```jsx
// App.js
import React from 'react';
import Welcome from './Welcome';

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
      </div>
    );
  }
}

export default App;
```

## 3. Managing State in Class Components

One of the key advantages of class components is their ability to manage state. State is a mechanism for a component to keep track of its own data and re-render when that data changes.

**Example of managing state in a class component:**

```jsx
import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

## 4. Class Component Lifecycle Methods

Class components have several lifecycle methods that allow you to perform actions at specific points in the component's lifecycle, such as mounting, updating, and unmounting.

Commonly used lifecycle methods:

- `componentDidMount()`: Called after the component is rendered to the DOM. Ideal for performing initialization that requires the DOM.
- `componentDidUpdate(prevProps, prevState)`: Called after the component's update is flushed to the DOM. Useful for interacting with the DOM after updates.
- `componentWillUnmount()`: Called right before the component is removed from the DOM. Useful for cleanup and releasing resources.

**Example using `componentDidMount()`:**

```jsx
import React from 'react';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <p>Seconds: {this.state.seconds}</p>
      </div>
    );
  }
}

export default Timer;
```

## 5. Resources and Further Learning

- React Documentation on Class Components: [React Class Components](https://reactjs.org/docs/react-component.html)
- React Class Components vs. Functional Components: [Functional Components vs. Class Components in React](https://www.digitalocean.com/community/tutorials/react-functional-components-vs-class-components)
- React State and Lifecycle: [React State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
