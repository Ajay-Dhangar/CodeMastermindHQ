---
id: react-interview-day-1
title: React Interview Day 1
sidebar_position: 1
sidebar_label: Day 1
---


```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

### 1. What is React and Feature of React?

<details>

<summary>Answer:</summary>

<p>React is an open-source JavaScript library used for building user interfaces or UI components. It was developed by Facebook. Think of it as a set of tools that make it easier for you to create interactive and dynamic elements on your web pages. </p>

<h3>features of React:</h3>

1. <b>Component-Based:</b> React divides your web page into smaller building blocks called components. These components are like puzzle pieces that you can put together to create a complete picture. Each component can have its own logic and behavior, making it easier to manage and reuse code.

2. <b>Virtual DOM:</b> React uses something called a Virtual DOM (Document Object Model) to keep track of changes in your components. When something in your component changes, React doesn't immediately update the actual webpage. Instead, it updates the Virtual DOM first, and then figures out the most efficient way to update the real DOM. This makes your web app faster and more efficient.

3. <b>Declarative Syntax:</b> In React, you describe what you want your user interface to look like in a simple and declarative way. You tell React how you want things to be, and it takes care of updating the actual interface for you. This is different from the traditional way of web development where you might have had to worry about each small change.

4. <b>Reusability</b> Since React encourages you to break your interface into components, you can reuse these components across different parts of your website. This saves you time and helps maintain consistency in your design and functionality.

5. <b>One-Way Data Flow:</b> React follows a one-way data flow, which means that the data flows in a single direction: from parent components to child components. This makes it easier to understand how data changes and where those changes are coming from.

6. <b>JSX:</b> JSX is a syntax extension for JavaScript that React uses. It allows you to write HTML-like code within your JavaScript, making it easier to visualize how your components will look in the browser.

Overall, React simplifies the process of building dynamic and interactive web interfaces by breaking down your webpage into smaller reusable parts and efficiently managing updates to the user interface. 
</details>

### 2. What is Virtual DOM?

<details>
   <summary>Answer:</summary>
The Virtual DOM is a lightweight in-memory representation of the actual DOM. React uses it to optimize and speed up updates. When the state of a component changes, React creates a virtual representation of the updated DOM. It then calculates the difference between the current virtual DOM and the new one (a process known as "reconciliation") and updates only the necessary parts of the actual DOM. This minimizes expensive direct manipulations of the real DOM, leading to improved performance.

<h3 align="center">OR</h3>

The Virtual DOM is a lightweight representation of the actual DOM in memory. It helps React efficiently update and render components by minimizing direct manipulation of the real DOM, thus improving performance.

:::tip
Imagine you have a real-world painting and a copy of that painting. You want to make changes to the copy without affecting the original. The Virtual DOM in React is like that copy of the painting.

In web development, the browser's "DOM" (Document Object Model) represents the structure of a webpage. When you use React, instead of directly changing the real DOM, React creates a Virtual DOM, which is a lightweight copy of the actual DOM.

When you make changes to your React components, these changes are first applied to the Virtual DOM. React then compares the Virtual DOM with the real DOM to figure out what parts of the actual DOM need to be updated. This comparison process is much faster than directly updating the real DOM every time you make a change.

So, think of the Virtual DOM as a smart assistant that helps React update the webpage efficiently. It's like making changes on a sketch before updating the actual painting, making the whole process smoother and faster.
:::

</details>

### 3. What is SPA?

<details>
    <summary>Answer:</summary>
    SPA stands for Single Page Application. It's a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app, reducing page reloads. React is often used to build SPAs because it can efficiently manage the UI changes without requiring full page reloads.

:::tip
- An SPA, which stands for "Single Page Application," is a type of website that loads and displays all its content on a single web page. Traditional websites often load new pages when you click on links, which can make them a bit slower as the whole page needs to reload.

- But with SPAs, things work differently. When you interact with a button or a link in an SPA, only the necessary parts of the page get updated or replaced, without needing to reload the entire page. This makes SPAs feel faster and more responsive, similar to using a desktop application.
:::

</details>


### 4. What is the difference between class and functional components?

<details>
  <summary>Answer:</summary>
    <table width="100%">
      <tr>
         <th>Aspect</th>
         <th>Class Components</th>
         <th>Functional Components</th>
      </tr>
      <tr>
         <td>Definition</td>
         <td>Defined using ES6 classes.</td>
         <td>Defined as JavaScript functions.</td>     
      </tr>
     <tr>
        <td>State Management</td>
        <td>Can have local state using <code>this.state.</code></td>
        <td>Use the <code>useState</code> hook for state.</td>     
     </tr>
     <tr>
        <td>Lifecycle Methods</td>
        <td>Use lifecycle methods like <code>componentDidMount</code>, etc.</td>
        <td>Use the <code>useEffect</code> hook.</td>     
     </tr>
     <tr>
        <td>Syntax</td>
        <td>More verbose and requires binding of event handlers.</td>
        <td>Simpler syntax and no binding needed.</td>     
     </tr>
     <tr>
        <td>Performance</td>
        <td>Slightly heavier due to JavaScript classes.</td>
        <td>Lighter weight, potentially better performance.</td>     
     </tr>
     <tr>
        <td>Reusability</td>
        <td>More complex to reuse logic.</td>
        <td>Easier to reuse through custom hooks.</td>     
     </tr>
     <tr>
        <td>Context and Refs</td>
        <td>Easier access to <code>this.context</code> and refs.</td>
        <td>No <code>this.context</code> and refs, but can use <code>useRef</code>.</td>     
     </tr>
     <tr>
        <td>Learning Curve</td>
        <td>Can be steeper, especially for beginners.</td>
        <td>Generally easier for beginners to grasp.</td>     
     </tr>
     <tr>
        <td>Modern React Practices</td>
        <td>Not fully aligned with modern React practices.</td>
        <td>More aligned with modern practices.</td>     
     </tr>
   </table>

</details>

### 5. Difference b/w Stateful and stateless Component?

<details>
    <summary>Answer:</summary>

<table width="100%">
      <tr>
         <th>Aspect</th>
         <th>Stateful Components</th>
         <th>Stateless Components</th>
      </tr>
      <tr>
         <td>State Management</td>
         <td>Manage their own state using <code>this.state</code>.</td>
         <td>Receive data and display it, no internal state.</td>     
      </tr>
     <tr>
        <td>Purpose</td>
        <td>Used for dynamic behavior and interaction.</td>
        <td>Used for displaying UI without complex logic.</td>     
     </tr>
     <tr>
        <td>Functional Type</td>
        <td>Class components.</td>
        <td>Function components (using <code>function</code> keyword).</td>     
     </tr>
     <tr>
        <td>Lifecycle Methods</td>
        <td>Have access to lifecycle methods like <code>componentDidMount</code>, <code>componentDidUpdate</code>, etc.</td>
        <td>No lifecycle methods until React 16.8.</td>     
     </tr>
     <tr>
        <td>Reusability</td>
        <td>Slightly less reusable due to internal state.</td>
        <td>Highly reusable as they don't hold internal state.</td>     
     </tr>
     <tr>
        <td>Performance</td>
        <td>Can have some impact on performance due to state updates.</td>
        <td>Generally better for performance as they don't manage state.</td>     
     </tr>
        
   </table>

</details>


### 6. What does mean by state and its use in react?

<details>
    <summary>Answer:</summary>
State is an object that represents the data a component needs to maintain. It allows components to store and manage dynamic data. State can be updated using `this.setState()` in class components or using the `useState` Hook in functional components. For example, a counter component's state could store the current count value.

<h3 align="center">OR</h3>

State is a JavaScript object that represents the current data in a component. It allows components to manage and store dynamic data that can change over time.


:::tip
Imagine you're building a to-do list app using React. The state would be where you keep track of the list of tasks. Let's break it down:

1. <b>State:</b> Think of it as a container within a React component that holds data. This data can be anything you want, like numbers, text, arrays, or objects.

2. <b>Usage:</b> When your app needs to display dynamic information that can change over time, you use state. For instance, in the to-do list app, the list of tasks can change as you add or complete tasks.


In summary, state in React helps your components manage and remember data that can change as your app runs. It's a fundamental concept that allows your app to be interactive and responsive to user actions. 
:::

</details>


### 7. What is JSX and why do we use it instead of js?
<details>
    <summary>Answer:</summary>
     
- JSX stands for "JavaScript XML." 
- It's a special syntax that you use in React to describe what the user interface should look like. 
- JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. 
- It might look a bit like HTML, but it's actually a mix of JavaScript and XML-like code.
- It provides a more readable and declarative way to define UI components in React. 
- JSX code is transpiled into plain JavaScript by tools like Babel. 
- It helps in creating components that are easier to understand and maintain.

<b>why we use JSX in React:</b>

1. <b>Readability:</b> JSX makes your code more readable and understandable. It closely resembles the actual UI you want to create, which makes it easier to visualize and work with.

2. <b>Familiarity:</b> If you've worked with HTML before, JSX will feel somewhat familiar. This makes it easier for web developers to transition into React.

3. <b>Components:</b> In React, you build your UI using components. JSX makes it simple to define these components by writing HTML-like code.

4. <b>JavaScript Integration:</b> JSX allows you to embed JavaScript expressions directly within the markup. This dynamic nature lets you generate dynamic content and interact with data easily.

5. <b>Performance:</b> Under the hood, JSX gets compiled to regular JavaScript by tools like Babel. This compiled code is optimized for better performance, making your app run faster.

6. <b>Tooling:</b> JSX is well-supported by development tools and extensions, which can help catch errors and provide useful hints as you code.


</details>




### 8. What is package.json?

<details>
    <summary>Answer:</summary>

    `package.json` is a JSON file in a Node.js project that contains metadata about the project and its dependencies. It includes information about the project's name, version, description, scripts, and dependencies. It's also used to manage project dependencies and scripts for running tasks like building and testing.

:::tip
package.json is a JSON file used to manage a project's dependencies, scripts, and other metadata. It's commonly used in Node.js projects and is also essential for managing React applications.
:::

</details>

### 9. What is the package name you are using for routing?

<details>
    <summary>Answer:</summary>

    React Router is a popular package used for routing in React applications. It allows you to create a single-page application with dynamic routing. You can install it using `npm install react-router-dom`.

</details>

### 10. Routing Implementation:

<details>
  <summary>Answer:</summary>

  React Router provides a way to handle routing within a single-page application. Here's a basic example of routing using React Router:
  
  ```jsx title="App.js"
  import React from 'react';
      import { Routes, Route, Link } from 'react-router-dom';
  
      const Home = () => <h1>Home Page</h1>;
      const About = () => <h1>About Page</h1>;
  
      const App = () => (
        <Routes>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
  
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Routes>
      );
  
    export default App;
  ```

</details>