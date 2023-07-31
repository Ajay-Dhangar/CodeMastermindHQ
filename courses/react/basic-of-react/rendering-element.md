---
id: rendering-element
sidebar_position: 2
title: Rendering Elements in React
sidebar_label: Rendering Elements
---

In React, rendering elements is the process of converting React components into actual DOM elements that are displayed on the web page. Understanding how rendering works is crucial to building React applications effectively. In this section, we will explore how to render elements in React and demonstrate the process with code examples.

## 1 What are React Elements?

React elements are lightweight descriptions of what should appear on the screen. They are simple JavaScript objects that represent the structure and properties of a user interface component. React elements are the building blocks of React applications.

## 2 Creating React Elements

To create a React element, we use the `React.createElement()` function or JSX syntax.

### 2.1 Using `React.createElement()`

```jsx
import React from 'react';

const element = React.createElement('h1', null, 'Hello, World!');
```

In this example, we create a simple React element representing an `<h1>` tag with the text "Hello, World!".

### 2.2 Using JSX

JSX provides a more intuitive and readable way to define React elements.

```jsx
import React from 'react';

const element = <h1>Hello, World!</h1>;
```

JSX allows us to write HTML-like syntax directly in our JavaScript code, making it easier to visualize and work with React components.

## 3 Rendering React Elements

Once we have created a React element, we need to render it to the DOM. We do this using the `ReactDOM.render()` method, which is responsible for updating the DOM with the React element.

### 3.1 Basic Rendering

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, World!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

In this example, we use `ReactDOM.render()` to render the `element` into the DOM, replacing the content of the element with the ID `root`. The rendered output will display "Hello, World!" on the webpage.

### 3.2 Rendering Variables and Expressions

JSX allows us to include variables and expressions within our elements.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const name = 'John Doe';
const element = <h1>Hello, {name}!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

Here, the `name` variable is embedded within the JSX expression using curly braces `{}`.

## 4 Updating Rendered Elements

React elements are immutable. Once an element is created and rendered, you cannot change its children or attributes. However, you can update the UI by creating a new element and re-rendering it.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
  const element = (
    <div>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

In this example, we create a function `tick()` that updates the element with the current time every second using `setInterval()`. The React application automatically re-renders the updated element.

## 5 Additional Resources

- React Documentation on Rendering Elements: [React Docs - Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
- JSX In-Depth: [React Docs - JSX In-Depth](https://reactjs.org/docs/jsx-in-depth.html)


## Live Coding

### Example: 1

```jsx live
function Counter () {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```
---

This content covers the basics of rendering elements in React, including creating React elements, rendering them to the DOM, updating elements, and using JSX. 