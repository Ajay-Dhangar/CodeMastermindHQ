---
id: react-interview-day-5
title: React Interview Day 5
sidebar_position: 5
sidebar_label: Day 5
---

### 34. What is an event in react?

<details>
    <summary>Answer:</summary>

In React, events are actions or interactions triggered by users on a web page. These interactions can include clicking a button, typing in a text field, hovering over an element, and more. Events allow your React components to respond and update based on user actions, making your web application interactive and dynamic.

Think of events as the way your React components listen and respond to what the user does. Just like when you press a button on your TV remote to change channels, in React, you use events to make your components respond to user actions.

**An example to illustrate this concept:**

Imagine you're building a simple React application that displays a counter. The user can click a button to increase the counter value.

```jsx
import React, { useState } from 'react';
```

```jsx live
function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

```

**In this example:**
- We start with a counter value of 0, managed by the `useState` hook.
- The `handleIncrement` function is defined to update the counter value when the "Increment" button is clicked.
- The `<button>` element has an `onClick` attribute that references the `handleIncrement` function. This means that when the button is clicked, the `handleIncrement` function will be called.

So, when the user clicks the "Increment" button, an event is triggered (`onClick` event), and the `handleIncrement` function is executed. As a result, the counter value increases, and the UI updates to reflect the new value.

</details>

### 35. What is memory leak and how to overcome?

<details>
    <summary>Answer:</summary>

**Memory Leak Explanation:**
Think of memory in your computer like a limited resource. A memory leak occurs when a program (like a React application) uses up more memory over time without releasing or clearing the memory it no longer needs. This can lead to performance issues and even crashes if the memory usage becomes excessive.

**Example:**
Imagine you're building a React application that fetches and displays a list of items. Each time the user clicks a button, the application fetches new items and updates the list. If you're not careful with managing memory, you might unintentionally keep references to the old lists, causing them to accumulate and use up more memory over time.

```jsx
import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState([]);

  const fetchItems = () => {
    // Imagine fetching items from an API and setting them in state
    const newItems = // ... fetch logic
    setItems(newItems);
  };

  return (
    <div>
      <button onClick={fetchItems}>Fetch Items</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
```

In this example, every time the "Fetch Items" button is clicked, new items are fetched and added to the `items` state. However, the old items are not cleared from memory. If the user keeps clicking the button, the application will keep fetching new items and retaining references to all the previous lists of items. This can lead to a memory leak as the application's memory usage grows over time.

**How to Overcome Memory Leaks:**
1. **Identify Leaks:** Use browser development tools or memory profiling tools to identify memory leaks in your React application. Monitor memory usage over time and check if it's continuously increasing.

2. **Cleanup:** Make sure to clean up resources when they are no longer needed. In React, this means using techniques like cleaning up event listeners or subscriptions in `useEffect` with the cleanup function.

3. **Unsubscribe:** If your components use event listeners or subscriptions, ensure you unsubscribe or remove them when the component unmounts. This prevents unnecessary memory usage.

4. **Avoid Circular References:** Be cautious of circular references in your data structures, as they can prevent garbage collection. Break these references if not needed.

5. **Use Memoization:** Utilize React's `memo` and `useMemo` features to prevent unnecessary re-renders and calculations, which can contribute to memory leaks.

6. **Use Profiling Tools:** React has built-in tools like the React Profiler to analyze your application's performance, identify bottlenecks, and spot memory issues.
   
:::info
Remember, the key is to be mindful of your application's memory usage and ensure that resources are released when they are no longer needed, allowing the garbage collector to do its job and prevent memory leaks.
:::

</details>

### 36. Do you prefer function-based or class component and why ?

<details>
    <summary>Answer:</summary>

**Function-based Components:**
Function-based components are a simpler and more modern way of creating components in React. They are written as JavaScript functions and return JSX (JavaScript XML) to describe the UI. Function components are considered easier to read, write, and test, and they encourage the use of React's Hooks API for managing state and other side effects.

**Here's an example of a function-based component:**

```jsx live

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Class Components:**
Class components are the traditional way of creating components in React. They are defined using ES6 classes and extend the `React.Component` class. Class components have a lifecycle and are used to manage state and handle other component-related logic. However, they can become more complex and harder to maintain as the component grows.

Here's an example of a class-based component that does the same thing as the function-based component above:

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

**Which to Choose:**
For interviews, it's essential to highlight the advantages of function-based components:
- They are simpler to read and write.
- They encourage the use of modern React features like Hooks.
- They are the preferred approach in most new projects and official documentation.

However, it's also good to note that class components might be encountered when working with older codebases.

</details>

### 37. Explain reducer as pure function in redux

<details>
    <summary>Answer:</summary>

**Reducer as a Pure Function:**

In Redux, a reducer is a pure function that takes two arguments: the current state and an action. It then returns a new state based on the action. Let's break down what this means:

1. **Pure Function:** A pure function is a function that always produces the same output for the same input and doesn't have any side effects. In the context of Redux, this means that a reducer should only rely on its inputs (state and action) to produce an output (new state) without modifying anything outside its scope.

2. **Current State:** This refers to the current state of your application. It's an object that holds all the data your app needs to manage.

3. **Action:** An action is a plain JavaScript object that describes what happened. It must have a `type` property, which is a string that describes the type of action being performed. Other properties can also be included, carrying additional data.

4. **New State:** The reducer's job is to take the current state and the action and compute a new state based on the action. This new state represents the updated data of your application.

**Example: Counter App**

Let's consider a simple counter application in React with Redux.

Imagine you have a counter displayed on your UI, and you can increment or decrement it by clicking buttons. Here's how you would define a reducer for this scenario:

```javascript
// Reducer function
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Initial state
const initialState = 0;

// Redux store
const store = createStore(counterReducer, initialState);

// Dispatching actions
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // Output: 1

store.dispatch({ type: 'DECREMENT' });
console.log(store.getState()); // Output: 0
```

In this example, the `counterReducer` is a pure function. It takes the current state (which is the current count) and an action as inputs, and it returns a new state (updated count) based on the action. The reducer doesn't modify the existing state or any other external variables; it only calculates the new state based on its inputs.


</details>

### 38. What do you know about NPM?

<details>
    <summary>Answer:</summary>

**NPM (Node Package Manager)** is a tool that helps developers manage and share JavaScript code libraries and packages. It's commonly used in React projects to handle dependencies and streamline the development process.

Imagine NPM as a digital library where you can borrow books (packages) written by other people to help you with your own writing (code). These books contain various tools, functions, and components that you can use to build your projects more efficiently.

In a React project, NPM allows you to:

1. **Install Packages**: You can use NPM to easily install external packages that provide useful features or functionality. For example, if you need a date picker component for your React app, you can use NPM to install a package like `react-datepicker`.

2. **Manage Dependencies**: Many React projects rely on multiple packages. Some packages might depend on other packages to work properly. NPM helps you manage these dependencies, making sure that all the required packages are installed correctly.

3. **Update Packages**: As the authors of packages release updates, you can use NPM to update the packages in your project to their latest versions. This ensures you have access to bug fixes and new features.

4. **Project Initialization**: NPM can also be used to initialize a new React project. It sets up the basic structure and configuration files needed for your project.

5. **Scripts**: NPM allows you to define custom scripts in your project's `package.json` file. These scripts can automate tasks like starting the development server or building your project for production.

</details>

### 39. What is the Difference between library or framework?

<details>
    <summary>Answer:</summary>

**The main differences between a library and a framework:**

| Aspect          | Library                                     | Framework                                |
|:-----------------|:---------------------------------------------|:------------------------------------------|
| Control         | You control the flow of your code.         | The framework controls the flow of your code. |
| Inversion of Control | You call the library when needed.      | The framework calls your code as needed.      |
| Flexibility     | More flexible; you choose what to use.   | Less flexible; you work within the framework's structure. |
| Dependency      | You can use multiple libraries together. | One framework can have multiple libraries and components. |
| Size            | Smaller in size and scope.               | Bigger in size and provides a comprehensive structure. |
| Learning Curve  | Usually has a shorter learning curve.   | May have a steeper learning curve.          |
| Examples        | jQuery (JavaScript library)              | Ruby on Rails (Ruby framework)             |
| Use Case        | Provides specific functionalities.     | Provides a foundation for building apps.   |


</details>