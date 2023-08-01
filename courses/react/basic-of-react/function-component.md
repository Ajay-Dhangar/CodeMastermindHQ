---
id: function-component
title: Creating Functional Components
sidebar_position: 4
sidebar_label: Functional Components
tags: [React, functional components, props, JSX, React Hooks, state management, component composition, React development, React beginners, React tutorials, React course]
meta:
  - name: description
    content: Learn how to create functional components in React from scratch. Understand their syntax, work with props, and leverage React Hooks for state management. Build reusable and efficient components for your React applications.
  - name: keywords
    content: React, functional components, props, JSX, React Hooks, state management, component composition, React development, React beginners, React tutorials, React course
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

In React, components are the building blocks of UI elements. Functional components are one of the two main types of components in React, the other being class components. Functional components are simpler and easier to write compared to class components, and they are commonly used in modern React applications. In this section, we will learn how to create functional components, understand their structure, and use them to build UI elements.

## 1. Introduction to Functional Components

Functional components are JavaScript functions that return React elements (UI components). They are stateless and do not have their own internal state or lifecycle methods. Functional components are typically used for simple UI elements or presentational components. They receive data as props and render UI based on that data. Let's create a simple functional component to understand the basics.
- Explanation of functional components and their importance in React development.
- Code example of a basic functional component.

**Code Example: `SimpleComponent.jsx`**

```jsx title="SimpleComponent.jsx"
// Importing React library
import React from 'react';

// Defining the functional component
function SimpleComponent() {
  return <div>Hello, I am a functional component!</div>;
}

// Exporting the component to use in other parts of the application
export default SimpleComponent;
```

## 2. Using Functional Components in Other Components

Functional components can be used just like any other React component in other parts of the application. We can import the functional component into another file and include it in the JSX code of other components. Let's see an example of how to use the `SimpleComponent` we defined earlier in another component.

**Code Example: `App.js`**

```jsx title="App.js"
import React from 'react';
import SimpleComponent from './SimpleComponent';

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <SimpleComponent />
    </div>
  );
}

export default App;
```

<BrowserWindow>
    <div>
      <h1>Welcome to My App</h1>
      <div>Hello, I am a functional component!</div>
    </div>
</BrowserWindow>

In the above example, we import the `SimpleComponent` from the `SimpleComponent.js` file and use it within the `App` component's JSX code.

## 3. Props in Functional Components

Props are a way to pass data from a parent component to a child component in React. Functional components can accept props as arguments and use them to render dynamic content. Let's create a functional component that receives props and uses them to render dynamic content.

**Code Example: `Greeting.jsx`**

```jsx title="Greeting.jsx"
import React from 'react';

function Greeting(props) {
  return <div>Hello, {props.name}! Welcome to {props.location}.</div>;
}

export default Greeting;
```

**Usage in Another Component:**

```jsx title="App.js"
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Greeting name="Ajay Dhangar" location="USA" />
      <Greeting name="Jane" location="India" />
    </div>
  );
}

export default App;
```

<BrowserWindow>
    <div>
       <h1>Welcome to My App</h1>
       <div>Hello, Ajay Dhangar! Welcome to USA.</div>
       <div>Hello, Jane! Welcome to India.</div>
    </div>
</BrowserWindow>

In the above example, the `Greeting` component receives `name` and `location` as props and uses them to render personalized greetings.

## 4. Destructuring Props

In functional components, we can use destructuring to access props more conveniently. Instead of using `props.name` and `props.location`, we can destructure them in the function's parameter itself. Let's modify the `Greeting` component to use destructuring.

**Code Example: Updated `Greeting.jsx`**

```jsx title="Greeting.jsx"
import React from 'react';

function Greeting({ name, location }) {
  return <div>Hello, {name}! Welcome to {location}.</div>;
}

export default Greeting;
```

<BrowserWindow>
    <div>
       <h1>Welcome to My App</h1>
       <div>Hello, Ajay Dhangar! Welcome to USA.</div>
       <div>Hello, Jane! Welcome to India.</div>
    </div>
</BrowserWindow>

The result is the same as before, but the code looks cleaner and more concise.

## 5. Fragment Short Syntax

When a functional component returns multiple elements, we need to wrap them inside a single parent element. Prior to React 16.2, we used to wrap them inside a `div`, but it can cause unnecessary nesting. With React 16.2+, we can use a shorthand syntax called Fragment to avoid the extra `div` wrapper.

**Code Example: Using Fragment**

```jsx title="MyComponent.jsx"
import React from 'react';

function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>How are you?</p>
    </>
  );
}

export default MyComponent;
```

<BrowserWindow>
    <div>
       <h1>Hello</h1>
       <p>How are you?</p>
    </div>
</BrowserWindow>

## 6. Arrow Function Syntax

We can also use the arrow function syntax to create functional components. The arrow function syntax is concise and can be handy in certain situations.

**Code Example: Arrow Function Syntax**

```jsx title="MyComponent.jsx"
import React from 'react';

const MyComponent = () => {
  return <div>Hello from Arrow Function Component!</div>;
}

export default MyComponent;
```

<BrowserWindow>
    <div>
       Hello from Arrow Function Component!
    </div>
</BrowserWindow>

Both the traditional function syntax and the arrow function syntax are valid ways to create functional components.

## 7. Resources and Links

- [React Documentation: Components and Props](https://reactjs.org/docs/components-and-props.html)
- [React Hooks Introduction](https://reactjs.org/docs/hooks-intro.html)

## Summary

In this section, we learned about functional components in React. We saw how to create functional components, use them in other components, pass props to them, and utilize destructuring for cleaner code. We also explored the use of fragments and the arrow function syntax for creating functional components. Functional components are the foundation of building UI elements in React, and they are widely used in modern React applications.

