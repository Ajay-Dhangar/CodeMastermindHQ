---
id: intro-jsx
title: Introduction to JSX in React - JavaScript XML Explained
sidebar_position: 1
sidebar_label: Introduction to JSX
tags: [JSX in React, JavaScript XML in React, Introduction to JSX, JSX syntax explained, Using JSX in React, JSX vs HTML, React components with JSX, Embedding JavaScript in JSX, JSX attributes and expressions, JSX in Create React App, JSX transformation in React, React JSX tutorial for beginners, JSX best practices in React, Getting started with JSX]
meta:
  - name: description
    content: Learn about JSX (JavaScript XML) in React - a syntax extension for writing HTML-like code within JavaScript. Understand how JSX works and how to use it to build UI components in React applications.
  - name: keywords
    content: JSX in React, JavaScript XML in React, Introduction to JSX, JSX syntax explained, Using JSX in React, JSX vs HTML, React components with JSX, Embedding JavaScript in JSX, JSX attributes and expressions, JSX in Create React App, JSX transformation in React, React JSX tutorial for beginners, JSX best practices in React, Getting started with JSX
---


```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
const greeting = 'Hello, JSX World!';
const currentDate = new Date();
const formattedDate = currentDate.toDateString();
const userName = 'Learners';
const num1 = 10;
const num2 = 5;
const sum = num1 + num2;
```

## 1. What is JSX?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like code within JavaScript. JSX makes it easier to create and manipulate UI components in React applications by providing a more concise and familiar syntax.

In JSX, we can write HTML elements, attributes, and event handlers directly in our JavaScript code. The JSX code is then transformed into regular JavaScript code during the build process using tools like Babel.

## 2.Why Use JSX?
JSX offers several benefits:

**1. Readability:** JSX code closely resembles HTML, making it easier for developers to understand and maintain.

**2. Expressiveness:** JSX enables a concise and expressive way of defining component structures, making React code more elegant and intuitive.

**3. Performance:** JSX can be compiled to optimized JavaScript code, resulting in better performance compared to dynamically creating elements.

**4. Declarative Syntax:** JSX allows you to express how the UI should look based on the current state of your application. It makes it easier to reason about the UI and its behavior.

**5. JavaScript Power:** Since JSX is just a syntax extension of JavaScript, you can seamlessly integrate JavaScript expressions, variables, and functions within JSX code.

## 3. Getting Started with JSX

To use JSX in a React project, we need to set up a development environment first. Let's create a new React project using Create React App.

### Prerequisites:

- Node.js and npm installed on your machine.

### Step 1: Create a New React Project

Open your terminal or command prompt and run the following command:

```bash
npx create-react-app jsx-intro-demo
```

This will create a new React project named "jsx-intro-demo."

### Step 2: Exploring the Project Structure

After the project is created, navigate to the project folder:

```bash
cd jsx-intro-demo
```

Now, let's explore the project structure:

```
jsx-intro-demo
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
└── ...
```

- The `public` folder contains the static assets and the main `index.html` file where our React application is rendered.

- The `src` folder contains the source code of our React application. The main entry point is the `index.js` file.

## 4. Using JSX in React Components

Let's create a simple React component that demonstrates the usage of JSX.

### Step 1: Create a New Component

Create a new file named `HelloWorld.jsx` inside the `src` folder:

```jsx title="HelloWorld.jsx"
// File: src/HelloWorld.jsx
import React from 'react';

const HelloWorld = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React component using JSX.</p>
    </div>
  );
};

export default HelloWorld;
```

In this example, we have created a functional component named `HelloWorld`. Inside the component, we are returning JSX code, which includes a `div` element with an `h1` heading and a `p` paragraph.

### Step 2: Using the Component

Now, let's use the `HelloWorld` component in our `App.js` file:

```jsx title="App.js"
// File: src/App.js
import React from 'react';
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;
```

In this code, we import the `HelloWorld` component and render it inside the `App` component using JSX.

### Step 3: Running the Application

Save the files, and start the development server:

```bash
npm start
```

Now, open your browser and navigate to `http://localhost:3000`. You should see the "Hello, World!" message displayed on the screen.

<BrowserWindow>
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React component using JSX.</p>
    </div>
</BrowserWindow>

Congratulations! You have successfully created a React component using JSX and rendered it in your application.

## 5. JSX Expressions and Embedding JavaScript

JSX allows us to embed JavaScript expressions within curly braces `{}`. This enables dynamic content rendering and data manipulation.

Let's modify our `HelloWorld` component to use JSX expressions:

```jsx title="HelloWorld.jsx"
// File: src/HelloWorld.jsx
import React from 'react';

const HelloWorld = () => {
  const greeting = 'Hello, JSX World!';
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  return (
    <div>
      <h1>{greeting}</h1>
      <p>Today is {formattedDate}</p>
    </div>
  );
};

export default HelloWorld;
```

<BrowserWindow>
    <div>
      <h1>{greeting}</h1>
      <p>Today is {formattedDate}</p>
    </div>
</BrowserWindow>

In this example, we've used JavaScript variables `greeting` and `formattedDate` inside JSX expressions to display dynamic content.

## 6. JSX and HTML Attributes

We can use HTML attributes in JSX elements just like in regular HTML. However, instead of `class`, we use `className` because `class` is a reserved keyword in JavaScript.

Let's demonstrate the usage of HTML attributes in JSX:

```jsx title="HelloWorld.jsx"
// File: src/HelloWorld.jsx
import React from 'react';

const HelloWorld = () => {
  const userName = 'Learners';

  return (
    <div className="greeting-container">
      <h1 className="greeting">Hello, {userName}!</h1>
      <p className="description">Welcome to JSX in React.</p>
      <img src="/img/logo.png" alt="logo" />
    </div>
  );
};

export default HelloWorld;
```

<BrowserWindow>
    <div className="greeting-container">
      <h1 className="greeting">Hello, {userName}!</h1>
      <p className="description">Welcome to JSX in React.</p>
      <div style={{width:'100px'}}>
        <img src="/img/logo.png" alt="logo" />
      </div>
    </div>
</BrowserWindow>

In this example, we've used `className`, `src`, and `alt` attributes in JSX.

## 7. JSX and JavaScript Expressions

JSX allows us to use JavaScript expressions within curly braces `{}` to perform operations and calculations.

Let's create a simple React component that calculates the sum of two numbers using JSX:

```jsx title="SumCalculator.jsx"
// File: src/SumCalculator.jsx
import React from 'react';

const SumCalculator = () => {
  const num1 = 10;
  const num2 = 5;
  const sum = num1 + num2;

  return (
    <div>
      <p>The sum of {num1} and {num2} is: {sum}</p>
    </div>
  );
};

export default SumCalculator;
```

<BrowserWindow>
    <div>
      <p>The sum of {num1} and {num2} is: {sum}</p>
    </div>
</BrowserWindow>

In this example, we've used JavaScript expressions within JSX to calculate and display the sum of `num1` and `num2`.

## 8. JSX Comments

JSX also supports adding comments within curly braces `{/* */}`.

```jsx title="HelloWorld.jsx"
// File: src/HelloWorld.jsx
import React from 'react';

const HelloWorld = () => {
  // This is a JSX comment
  return (
    <div>
      {/* Another JSX comment */}
      <h1>Hello, World!</h1>
    </div>
  );
};

export default HelloWorld;
```

<BrowserWindow>
    <div>
      {/* Another JSX comment */}
      <h1>Hello, World!</h1>
    </div>
</BrowserWindow>
In this example, we've added both single-line and multi-line JSX comments.

---

This completes the "Introduction to JSX" section of the course. You've learned about JSX syntax, embedding JavaScript expressions, using HTML attributes, and more. With these concepts, you can now build UI components more efficiently and intuitively in React applications.

## 9. Resources and Links:

- [React Documentation on JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Babel JSX Transform](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx)

---

## 10. Live Coding

### Example: 1
```jsx live
function HelloWorld (){  
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React component using JSX.</p>
    </div>
  );
}
```

### Example: 2

```jsx live
function HelloWorld (){
  const greeting = 'Hello, JSX World!';
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  return (
    <div>
      <h1>{greeting}</h1>
      <p>Today is {formattedDate}</p>
    </div>
  );
}
```

### Example: 3

```jsx live
function HelloWorld (){
  const userName = 'Learners';

  return (
    <div className="greeting-container">
      <h1 className="greeting">Hello, {userName}!</h1>
      <p className="description">Welcome to JSX in React.</p>
      <img src="/img/logo.png" style={{width:'100px'}} alt="Profile Pic" />
    </div>
  );
}
```

### Example: 4
```jsx live
function SumCalculator () {
  const num1 = 10;
  const num2 = 5;
  const sum = num1 + num2;

  return (
    <div>
      <p>The sum of {num1} and {num2} is: {sum}</p>
    </div>
  );
}
```

### Example: 5

```jsx live
function HelloWorld () {
  // This is a JSX comment
  return (
    <div>
      {/* Another JSX comment */}
      <h1>Hello, World!</h1>
    </div>
  );
}
```

This section provides a detailed explanation of JSX in React, along with practical examples. The examples are provided as separate files, which can be created in the "src" folder of the React project. 