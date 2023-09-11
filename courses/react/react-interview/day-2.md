---
id: react-interview-day-2
title: React Interview Day 2
sidebar_position: 2
sidebar_label: Day 2
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
import { useState, useEffect } from 'react';

import TodoItem from './lab-practice/TodoItem';
```

### 11. How do you pass data from parent to child?

<details>
    <summary>Answer:</summary>

In React, you can pass data from a parent component to a child component by using "props". Props are like parameters you provide to a function – they're pieces of data that you want to send from the parent to the child component.

**How it works in simple terms:**

1. **Parent Component:** This is the component that holds the data you want to pass to the child component.

```jsx title="ParentComponent.js"
import React from 'react';
import ChildComponent from './ChildComponent'; // Import the child component

function ParentComponent() {
  const dataToPass = "Hello from Parent!"; // Data you want to pass

  return (
    <div>
      {/* Pass data as a prop to the child component */}
      <ChildComponent message={dataToPass} />
    </div>
  );
}

export default ParentComponent;
```

2. **Child Component:** This is the component that will receive and use the data from the parent component.

```jsx title="ChildComponent.js"
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      {/* Access the data passed from the parent using props */}
      <p>{props.message}</p>
    </div>
  );
}

export default ChildComponent;
```

In this example, the parent component (`ParentComponent`) passes a message as a prop to the child component (`ChildComponent`). The child component receives the prop through its `props` parameter and can access and display the message.

<BrowserWindow>
    <div>
        <p>Hello from Parent!</p>
    </div>
</BrowserWindow>

Remember, you can pass any type of data as props – strings, numbers, objects, functions, etc. This allows you to create reusable components that can be customized with different data from their parent components.
</details>

### 12. What is the Difference between react and react native? Which one is library or framework?

<details>
    <summary>Answer:</summary>

**The main differences between React and React Native:**

| Aspect               | React                   | React Native          |
|:---------------------|:------------------------|:----------------------|
| **Purpose**          | Web application UI      | Mobile app UI         |
| **Platform**         | Web browsers            | Mobile devices       |
| **Components**       | HTML-based components   | Native components    |
| **Rendering**        | Browser DOM             | Native UI components |
| **Performance**      | Typically faster        | Optimized for mobile |
| **Code Sharing**     | Limited                 | High degree of sharing|
| **Development**      | Web development tools   | Mobile development tools|
| **Native Access**    | Limited                 | Extensive access     |
| **UI/UX**            | Web-style               | Native look and feel |
| **Community**        | Large and active        | Active               |
| **Learning Curve**   | Moderate                | Moderate             |
| **Ecosystem**        | Rich ecosystem          | Growing ecosystem    |

React is a JavaScript library for building user interfaces primarily for web applications. It's focused on handling the UI components and rendering in web browsers using a virtual DOM. On the other hand, React Native is a framework for building mobile applications using JavaScript. It allows you to create mobile apps with a native look and feel using components that are translated to native UI elements. React Native has a more extensive access to native device features compared to React.

:::tip
React is a JavaScript library primarily used for building user interfaces in web browsers, while React Native is a JavaScript framework used for building native mobile applications for iOS and Android platforms. React Native provides a more native experience on mobile devices, while React focuses on creating web-based interfaces.
:::

:::tip
| No. | React JS | React Native |
|:---:|:--------:|--------------|
|1.   | JS Library | Mobile Framework|
|2.   |Best instrument for building complex highly functional web applications. | Best instrument for a native look and feel in cross-platform mobile applications.|
|3.   | React.JS implement V-DOM for browser code rendering. |React Native implements native APIs for mobile components rendering. |
|4.   |React.JS is implemented for web (Browser) platforms. | it's more difficult to work with React Native across different platforms. |
|5.   |in React.JS, software engineers can create robust animation with the help of CSS. | To implement animation in react native, Software engineers have to use API.|
:::

</details>

### 13. How do you switch one component to another, Conditional Rendering?

<details>
    <summary>Answer:</summary>

Conditional rendering in React is a technique used to show or hide components based on certain conditions. It's like making a decision in your code to display one thing or another thing depending on the situation.

Imagine you have a website with a user profile. You want to show a "Welcome" message if the user is logged in, but if they're not logged in, you want to show a "Login" button instead. This is where conditional rendering comes in.

**Simple example of how you might do this using conditional rendering in React:**


```jsx title="UserProfile.js" live

function UserProfile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially, the user is not logged in

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome to your profile!</h2>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      )}
    </div>
  );
}
```

In this example, we're using the `useState` hook to manage the `isLoggedIn` state. The rest of the code works similarly to the class component example – we're using the value of `isLoggedIn` to determine what gets displayed. When the "Login" button is clicked, the `setIsLoggedIn` function is called to update the state, triggering a re-render and showing the "Welcome" message.

Function-based components and hooks are a more modern way of writing React code, and they offer a more concise and intuitive syntax for managing state and handling component logic.

</details>

### 14. Why do we need keys in react less?

<details>
    <summary>Answer:</summary>

In React, keys are special attributes that help identify individual items in a list of elements. They play a crucial role in optimizing how React renders and updates components efficiently. Imagine you have a list of items that you want to display using a loop. Each item in the list is a separate component, and React uses keys to keep track of these components effectively.

**Simple explanation with an example:**

Let's say you're building a to-do list app, and you have an array of to-do items like this:

```javascript
const todoItems = [
  { id: 1, text: "Buy groceries" },
  { id: 2, text: "Finish homework" },
  { id: 3, text: "Go for a run" },
];
```

Now, you want to render these items as React components in a list:

```jsx title="TodoItem.js"
function TodoList() {
  const todoItems = [
    { id: 1, text: "Buy groceries" },
    { id: 2, text: "Finish homework" },
    { id: 3, text: "Go for a run" },
  ];

  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </div>
  );
}

function TodoItem({ text }) {
  return <div>{text}</div>;
}
```

<BrowserWindow>
    <div>
        <TodoItem/>
    </div>
</BrowserWindow>

In this example, the `key` attribute is set to the `id` of each todo item. React uses these keys to efficiently track and update the components when the list changes. When a new item is added, removed, or rearranged in the `todoItems` array, React uses the keys to understand which specific components need to be created, updated, or removed. This optimization helps prevent unnecessary re-rendering of components and leads to better performance.

Without keys, React might have difficulty distinguishing between different items in the list, causing potential rendering and updating issues. Therefore, it's important to provide unique and stable keys for each item in your lists to ensure smooth and efficient React application behavior.

</details>

### 15. Difference between Axios and fetch

<details>
    <summary>Answer:</summary>

Axios and the `fetch` API are both used for making HTTP requests in JavaScript applications, including those built with React. 

| Feature             | Axios                                   | Fetch API                                      |
|:---------------------|:-----------------------------------------|:------------------------------------------------|
| Ease of Use         | Provides a more intuitive and user-friendly interface for making requests and handling responses. | Requires more manual setup and handling of requests and responses. |
| Promise-based      | Yes (Uses ES6 Promises)                  | Yes (Uses ES6 Promises)                        |
| Browser Support    | Supports older browsers                  | Relatively newer, may require polyfills       |
| Default Settings   | Handles response data and errors with JSON by default. | Fetches raw data and requires manual handling |
| Global Interceptor | Yes, allows intercepting requests and responses globally. | No, requires manual setup for each request.   |
| Error Handling     | Built-in support for error handling with response status codes. | Requires manual checking of response status and handling. |


**Example with Axios:**

```jsx 
import axios from 'axios';

// Making a GET request using Axios
axios.get('https://api.github.com/users')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
```

**Example with fetch:**

```jsx 
// Making a GET request using fetch
fetch('https://api.github.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
```
</details>

### 16. how to fetch the data from the JSON format?

<details>
    <summary>Answer:</summary>

1. **Import Required Modules:** First, make sure you have the necessary modules. In React, you typically use the `fetch` function or third-party libraries like `axios` to make HTTP requests.

   Example for `fetch`:
   ```jsx
   import React, { useState, useEffect } from 'react';
   ```

2. **State Declaration:** Declare a state variable to store the fetched data. Use the `useState` hook to initialize it.

   ```jsx
   const [jsonData, setJsonData] = useState([]);
   ```

3. **Fetching Data:** You can use the `useEffect` hook to fetch data when the component mounts. Inside the `useEffect` function, use the `fetch` function to retrieve the JSON data from an API endpoint.

   ```jsx
   useEffect(() => {
     fetch('https://api.github.com/users')
       .then(response => response.json())
       .then(data => setJsonData(data))
       .catch(error => console.error('Error fetching data:', error));
   }, []);
   ```

4. **Rendering Data:** Now you can use the fetched data in your component's render function. Map over the data and display it.

   ```jsx
   return (
     <div>
       <h1>Fetched Data</h1>
       <ul>
         {jsonData.map(item => (
           <li key={item.id}>{item.name}</li>
         ))}
       </ul>
     </div>
   );
   ```

**Putting it All Together:**

How the complete React component might look:

```jsx live
function DataFetchingComponent() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {jsonData.map(item => (
          <li key={item.id}>{item.login}</li>
        ))}
      </ul>
    </div>
  );
}
```
In this example, the `fetch` function is used to retrieve JSON data from an API endpoint. The fetched data is stored in the `jsonData` state variable, and it's rendered within a component using the `map` function to iterate over the array of data objects.


:::tip
| No. | Axios | Fetch   |
| :---| :-----| :-----|
|1. | Axios is 3rd party library | Builtin API|
|2. | Faster | Little bit slower |
|3. | Easier to handle the error | Harder to handle the error|
|4. | Automatically transform Data into JSON | Have to manually transform data | 
|5. | Need to install form npm (npm i / install axios) | No need to install externally|
:::
</details>
