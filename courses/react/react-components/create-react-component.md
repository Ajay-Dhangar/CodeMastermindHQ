---
id: create-react-component
title: Creating Functional Components
sidebar_position: 2
sidebar_label: Creating Functional Components
tags:
  - React
  - Functional Components
  - Props
  - JSX
  - Reusability
  - Children
keywords:
  - React Functional Components
  - Creating Components in React
  - React Props
  - Reusable Components
  - JSX Syntax
  - React Children
  - Rendering UI Elements
  - Stateless Components
  - React Reusability
  - Functional Components with Props
  - Nested Components
--- 


In React, components are the building blocks of user interfaces. Functional components are one of the core types of components in React and are widely used due to their simplicity and reusability. In this topic, we will cover the basics of creating functional components, understanding their structure, and how to use them effectively.

## 1. Introduction to Functional Components

Functional components are JavaScript functions that return React elements (UI components). They are commonly used for simple, stateless presentations of UI elements. Functional components are also referred to as "stateless components" because they do not manage their own state.

A functional component can be created using a regular JavaScript function or an arrow function. They receive data (props) as input and return JSX elements to be rendered.

## 2. Creating a Simple Functional Component

Let's start by creating a simple functional component to display a basic greeting message.

**Example: Greeting.js**
```jsx
// Import the React library
import React from 'react';

// Define the functional component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Export the component to make it available for other parts of the application
export default Greeting;
```

In this example, we import the necessary `React` library and define a function called `Greeting`. The function takes a `props` parameter (short for properties), which allows us to pass data to the component from its parent.

Inside the function, we return a JSX element that displays a greeting message along with the name received through the `props`.

## 3. Using the Functional Component

Once we have created the `Greeting` component, we can use it in other parts of our application.

**Example: App.js**
```jsx
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Greeting name="John" />
      <Greeting name="Alice" />
    </div>
  );
}

export default App;
```

In this example, we import the `Greeting` component and use it inside the `App` component. We pass different names as props to the `Greeting` component, which will be displayed as part of the greeting message.

## 4. Rules for Functional Components

When creating functional components, there are some rules to keep in mind:

- Functional components must return a single JSX element. If you need to return multiple elements, wrap them in a parent element (e.g., `<div>`).
- The component name must start with a capital letter. This is to differentiate components from regular HTML elements.

## 5. Additional Resources

- React Documentation on Functional Components: [React Docs - Components and Props](https://reactjs.org/docs/components-and-props.html)
- CodeSandbox Example: [Creating a Functional Component](/LiveCodeEditor)
