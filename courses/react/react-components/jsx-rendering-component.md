---
id: jsx-rendering-component
title: Working with JSX and Rendering Components
sidebar_position: 5
sidebar_label: JSX and Rendering Components
tags: [React JSX, JSX syntax, rendering components, creating components, embedding expressions in JSX, React rendering, JSX tutorial]
meta:
  - name: description
    content: Learn how to work with JSX and render components in React. Understand JSX syntax, rendering elements, creating custom components, and embedding expressions.
  - name: keywords
    content: React JSX, JSX syntax, rendering components, creating components, embedding expressions in JSX, React rendering, JSX tutorial
---



```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

## Introduction to JSX

**JSX** (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. It's a fundamental concept in React as it provides a way to define the structure and layout of your user interface.

**Explanation:**

JSX enables you to write components and their structure in a more intuitive way, making your code easier to read and maintain. It allows you to seamlessly integrate HTML-like elements with JavaScript logic.

**Basic JSX Syntax**

In JSX, you can use angle brackets to create elements, similar to HTML. However, JSX elements are not directly interpreted by browsers; they need to be compiled into plain JavaScript.

Here's a basic example:

```jsx
const element = <h1>Hello, JSX!</h1>;
```

## Rendering JSX Elements

To render JSX elements, you need to use **ReactDOM.render()**. This function takes two arguments: the JSX element you want to render and the target DOM element where you want to render it.

```jsx title="index.js"
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello, JSX!</h1>;

ReactDOM.render(element, document.getElementById('root'));
```
<BrowserWindow>
    <body >
        <div>
          <h1>Hello, JSX!</h1>
        </div>
    </body>
</BrowserWindow>

In the above code, the JSX element `<h1>Hello, JSX!</h1>` is rendered inside the DOM element with the `id` of 'root'.

## Creating React Components

Components are the building blocks of a React application. They allow you to split your UI into reusable pieces. Components can be created using either **functional components** or **class components**.

**Functional Component:**

```jsx title="Greeting.jsx"
import React from 'react';

function Greeting() {
  return <h1>Hello from a functional component!</h1>;
}

export default Greeting;
```

<BrowserWindow>
    <body >
        <div>
          <h1>Hello from a functional component!</h1>
        </div>
    </body>
</BrowserWindow>


**Class Component:**

```jsx title="Greeting.jsx"
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Hello from a class component!</h1>;
  }
}

export default Greeting;
```

<BrowserWindow>
    <body >
        <div>
          <h1>Hello from a class component!</h1>
        </div>
    </body>
</BrowserWindow>

### Using Components

Once you have components, you can use them within other components or directly in your render methods.

```jsx title="App.js"
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting'; // Assuming Greeting component is in a file named Greeting.jsx

const App = () => {
  return (
    <div>
      <Greeting /> {/* For Example we use Class Component */}
      <p>This is a React app using components!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

<BrowserWindow>
    <body >
        <div>
          <h1>Hello from a class component!</h1>
          <p>This is a React app using components!</p>
        </div>
    </body>
</BrowserWindow>

### Embedding Expressions in JSX

You can embed JavaScript expressions within JSX using curly braces `{}`. This allows you to dynamically include variables, calculations, or function calls in your JSX.

```jsx title="index.js"
import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Ajay';
const element = <p>Hello, {name}!</p>;

ReactDOM.render(element, document.getElementById('root'));
```

<BrowserWindow>
    <body >
        <div>
          <p>Hello, Ajay!</p>
        </div>
    </body>
</BrowserWindow>

### Additional Resources

1. **React JSX Documentation**: [JSX in Depth](https://reactjs.org/docs/jsx-in-depth.html)
2. **MDN Web Docs - Introducing JSX**: [MDN JSX Introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
3. **React.Component - React Docs**: [React.Component](https://reactjs.org/docs/react-component.html)
