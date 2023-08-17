---
id: react-interview-day-3
title: React Interview Day 3
sidebar_position: 3
sidebar_label: Day 3
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'

import UserProfile from './lab-practice/UserProfile';
```

### 17. What are React Life cycles Explain each one with Example?

<details>
    <summary>Answer:</summary>

React has transitioned to using function components and hooks as the primary way to manage component lifecycles. Class components, which used the lifecycle methods, are still relevant but not the recommended approach for new projects. I'll provide an overview of both class component lifecycle methods and functional component equivalents.

**Class Component Lifecycle:**

1. **Mounting Phase:**
   These methods are called when an instance of a component is being created and inserted into the DOM.

   - `constructor()`: This is the first method called when a component is created. It's used to initialize state and bind event handlers.
   
   - `render()`: This method is used to return the JSX that represents the component's UI.
   
   - `componentDidMount()`: Called after the component is rendered into the DOM. It's a good place to fetch data or set up subscriptions.

   ```jsx
   class ExampleComponent extends React.Component {
     constructor(props) {
       super(props);
       this.state = { count: 0 };
     }
   
     componentDidMount() {
       console.log('Component mounted');
       // You can perform API calls or set up timers here
     }
   
     render() {
       return <div>{this.state.count}</div>;
     }
   }
   ```

2. **Updating Phase:**
   These methods are called when a component is being re-rendered due to changes in props or state.

   - `componentDidUpdate(prevProps, prevState)`: Called after the component's update has been flushed to the DOM. You can perform actions based on the previous props and state.

   ```jsx
   class ExampleComponent extends React.Component {
     componentDidUpdate(prevProps, prevState) {
       if (this.props.someValue !== prevProps.someValue) {
         console.log('Props changed');
       }
     }
   
     render() {
       return <div>{this.props.someValue}</div>;
     }
   }
   ```

3. **Unmounting Phase:**
   This method is called before a component is removed from the DOM.

   - `componentWillUnmount()`: Used to clean up resources, subscriptions, or timers created in `componentDidMount`.

   ```jsx
   class ExampleComponent extends React.Component {
     componentWillUnmount() {
       console.log('Component will unmount');
       // Clean up resources here
     }
   
     render() {
       return <div>{this.props.data}</div>;
     }
   }
   ```

**Functional Component Equivalents with Hooks:**

React introduced hooks to manage component logic in functional components.

1. **Effect Hook (`useEffect`):**
   The equivalent of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.

   ```jsx
   import React, { useState, useEffect } from 'react';

   function ExampleComponent() {
     const [count, setCount] = useState(0);

     useEffect(() => {
       console.log('Component mounted');
       // You can perform API calls or set up timers here

       return () => {
         console.log('Component will unmount');
         // Clean up resources here
       };
     }, []); // Empty array means this effect only runs on mount and unmount

     return <div>{count}</div>;
   }
   ```


</details>

### 18. What is Props Drilling Concept ?What is State Uplifting ?

<details>
    <summary>Answer:</summary>

In React, Props Drilling and State Lifting are concepts related to how you manage and share data between components. Let's break them down in simple terms with examples:

**Props Drilling:**

Imagine you have a tree-like structure of components, where a component A needs to pass data to component C, but component B is in between them. To get the data from A to C, you have to pass the data through B, even though B doesn't need the data itself. This passing of data through intermediate components is called Props Drilling.

**Example:**

Let's say you have a parent component `App`, a middle component `ParentComponent`, and a child component `ChildComponent`. You want to pass a piece of data from `App` to `ChildComponent`:

```jsx title="App.js"
// 
import React from 'react';
import ParentComponent from './ParentComponent';

function App() {
  const dataToPass = "Hello from App!";

  return (
    <div>
      <ParentComponent data={dataToPass} />
    </div>
  );
}

export default App;
```

```jsx title="ParentComponent.js"
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent(props) {
  return (
    <div>
      <ChildComponent data={props.data} />
    </div>
  );
}

export default ParentComponent;
```

```jsx title="ChildComponent.js"
import React from 'react';

function ChildComponent(props) {
  return <div>{props.data}</div>;
}

export default ChildComponent;
```

In this example, `ParentComponent` is receiving the data from its parent `App` and then passing it down to `ChildComponent`. This is props drilling, as the data is being drilled through `ParentComponent` even though it doesn't directly use the data itself.

**State Lifting:**
State Lifting involves moving the state from a child component up to a parent component when multiple child components need access to that state. This way, the state becomes shared among these child components through their common parent.

Example:
Suppose you have two sibling components, `CounterA` and `CounterB`, and you want them to share the same counter value:

```jsx title="CounterA.js" 
import React from 'react';

function CounterA(props) {
  return (
    <div>
      <p>Counter A: {props.counter}</p>
      <button onClick={props.onIncrement}>Increment A</button>
    </div>
  );
}

export default CounterA;
```

```jsx title="CounterB.js"

import React from 'react';

function CounterB(props) {
  return (
    <div>
      <p>Counter B: {props.counter}</p>
      <button onClick={props.onIncrement}>Increment B</button>
    </div>
  );
}

export default CounterB;
```

```jsx title="ParentComponent.js"
import React, { useState } from 'react';
import CounterA from './CounterA';
import CounterB from './CounterB';

function ParentComponent() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <CounterA counter={counter} onIncrement={incrementCounter} />
      <CounterB counter={counter} onIncrement={incrementCounter} />
    </div>
  );
}

export default ParentComponent;
```

In this example, the state (`counter`) is lifted from both `CounterA` and `CounterB` to their common parent, `ParentComponent`. This way, both child components share the same state and can update it by calling the `onIncrement` function.

</details>

### 20. What is Context api?

<details>
    <summary>Answer:</summary>

Imagine you're building a large React app with multiple components, and many of these components need to access the same data, like a user's authentication status or theme preferences. Instead of passing this data through props from parent to child components, React offers a more efficient way to share data across components, called the Context API.

Think of Context API as a global messenger service for your components. It allows you to create a centralized place where you can store and share data that multiple components need, without having to pass it down manually.

**Example: Theme Context**

Let's say you're building a website with a light and dark theme, and you want all your components to be aware of the current theme. Using Context API, you can achieve this without passing the theme as a prop through all your components.

1. **Create the Context:**
   First, you define a context. Think of it as a container for your shared data.
   
   ```jsx title="ThemeContext.js"
   import React from 'react';
   
   const ThemeContext = React.createContext();
   
   export default ThemeContext;
   ```

2. **Provide the Data:**
   Somewhere near the top of your component tree, you wrap your components with a provider. This provider makes the shared data available to all components underneath it.
   
   ```jsx title="App.js"

   import React from 'react';
   import ThemeContext from './ThemeContext';
   import Header from './Header';
   
   function App() {
     const theme = 'dark'; // You can have logic to determine the theme
   
     return (
       <ThemeContext.Provider value={theme}>
         <Header />
         {/* Other components */}
       </ThemeContext.Provider>
     );
   }
   
   export default App;
   ```

3. **Consume the Data:**
   In any component that needs the theme, you can use the `useContext` hook to access the shared data without having to pass it through props.
   
   ```jsx title="Header.js"
  
   import React, { useContext } from 'react';
   import ThemeContext from './ThemeContext';
   
   function Header() {
     const theme = useContext(ThemeContext);
     const headerStyle = {
       backgroundColor: theme === 'dark' ? 'black' : 'white',
       color: theme === 'dark' ? 'white' : 'black',
     };
   
     return (
       <header style={headerStyle}>
         {/* Header content */}
       </header>
     );
   }
   
   export default Header;
   ```

By using the Context API, you've made it easy for components to access and use the theme information without prop-drilling. This simplifies your code and makes it more maintainable, especially when dealing with larger applications with complex component hierarchies.

</details>

### 21. What is UseState Hook ?(Implementation)

<details>
    <summary>Answer:</summary>

In React, the `useState` hook is a feature that allows you to add state management to functional components. It lets you create and manage a piece of state within a functional component without the need for class components or complex state management libraries.

Here's a simple explanation of how to use the `useState` hook with an example:

Let's say you're building a counter component. You want the counter to increase by 1 every time a button is clicked. Here's how you would achieve this using the `useState` hook:

```jsx live

function Counter() {
  // Declare a piece of state named "count" with an initial value of 0.
  // The "setCount" function is used to update the "count" state.
  const [count, setCount] = useState(0);

  // Event handler for the button click
  const increment = () => {
    // Use the "setCount" function to update the "count" state.
    // It takes the new value as an argument and re-renders the component.
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

```

**In this example:**

1. We import the `useState` hook from React.
2. Inside the `Counter` component, we declare a state variable named `count` using the `useState` hook. The initial value of `count` is set to `0`.
3. We also get a function named `setCount` from the `useState` hook. This function is used to update the value of `count` and trigger a re-render of the component.
4. When the button is clicked, the `increment` function is called. Inside this function, we use `setCount` to increase the value of `count` by 1.
5. The updated `count` value is displayed in the JSX using curly braces `{count}`.
6. The button's `onClick` attribute is set to the `increment` function, so clicking the button triggers the increment logic.

The `useState` hook helps you manage the state of your component in a simple and straightforward manner, making it a powerful tool for state management in React functional components.

</details>

### 22. What is useEffect Hook ?(Implementation)

<details>
    <summary>Answer:</summary>

`useEffect` is a built-in React hook that allows you to perform side effects in your functional components. Side effects might include data fetching, DOM manipulation, subscriptions, or anything that needs to happen after rendering. It's a way to introduce lifecycle behavior to functional components, similar to what class components do with methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

**Example:**
Let's say you're building a weather app. You want to fetch weather data from an API and display it when the component renders, and you also want to update the weather data whenever the user's location changes.

Here's how you could use the `useEffect` hook to achieve this:

```jsx
import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('New York');

  // This useEffect runs after the component renders
  useEffect(() => {
    // Simulating an API call to fetch weather data
    fetch(`https://api.example.com/weather?location=${location}`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error(error));
  }, [location]); // The effect will re-run if location changes

  return (
    <div>
      <h1>Weather App</h1>
      <p>Current Location: {location}</p>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Condition: {weatherData.condition}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default WeatherApp;
```

In this example, the `useEffect` hook is used to fetch weather data from an API when the component renders. It also monitors the `location` state. If the `location` changes, the effect will re-run, fetching the new weather data based on the updated location. This way, you're handling both the initial rendering and any subsequent updates to the component's data.


</details>

### 23. clean up in useEffect

<details>
  <summary>Answer:</summary>

In React, a `useEffect` hook is used to perform side effects in your components. Side effects could include things like data fetching, subscriptions, or manually changing the DOM. Sometimes, these side effects need to be cleaned up or undone when the component is removed from the screen or when the relevant data changes.

Cleaning up in `useEffect` means making sure that any resources or effects you set up are properly removed or reverted when they're no longer needed. This helps prevent memory leaks and ensures that your application runs smoothly.

**Simple analogy:**

Imagine you're at a campfire, and you want to roast marshmallows. After you're done roasting, it's important to extinguish the fire properly, so it doesn't cause any problems. Cleaning up in `useEffect` is similar – you're ensuring that any "fires" you started in your component are put out when you're done with them.

Now, let's relate this to React with an example:

```jsx
import React, { useState, useEffect } from 'react';
```

```jsx live
function CampfireComponent() {
  const [roasting, setRoasting] = useState(false);

  useEffect(() => {
    // This is like starting the campfire
    console.log('Campfire started');

    // Clean-up function
    return () => {
      // This is like extinguishing the campfire
      console.log('Campfire extinguished');
    };
  }, [roasting]);

  const toggleRoasting = () => {
    setRoasting((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggleRoasting}>
        {roasting ? 'Stop Roasting' : 'Start Roasting'}
      </button>
      <p>Roasting: {roasting ? 'Yes' : 'No'}</p>
    </div>
  );
}

```

In this example, the `useEffect` hook sets up the "campfire" when `roasting` state changes. The `return` function inside the `useEffect` acts as the cleanup step when the component unmounts or when the `roasting` state changes again. This ensures that any resources or effects initiated during the "campfire" are properly cleaned up when they're no longer needed.

During an interview, you can explain how this analogy applies to React's `useEffect`, emphasizing that it's a way to manage resources and effects to maintain the performance and stability of your application.

</details>

### 24. What is UseReducer Hook ?(Implementation)

<details>
  <summary>Answer:</summary>

The `useReducer` hook in React is a way to manage complex state logic in your components. It's an alternative to the more commonly used `useState` hook. While `useState` is great for simple state management, `useReducer` is more suitable when your state transitions involve multiple actions and become intricate.

**Think of it like this:** Imagine you're driving a car, and you need to make various maneuvers like accelerating, braking, and turning. If your car actions become more intricate, it's easier to use a steering wheel (like `useReducer`) than pushing pedals (like `useState`).

**Example:**

Let's say you're building a simple counter app using `useReducer`.

First, you'll need to import `useReducer` at the top of your component file:

```jsx
import React, { useReducer } from 'react';
```

Now, let's create a reducer function. The reducer takes the current state and an action as parameters and returns the new state based on the action. In this example, we'll increment and decrement the count based on the action type.

```jsx
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

Now, in your component, you can use the `useReducer` hook like this:

```jsx
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}
```

```jsx live
function Counter() {
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button> 
      <span> </span>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}
```

In this example, `state` holds the current state object, and `dispatch` is a function that sends actions to the reducer. When the buttons are clicked, they dispatch the respective actions, and the reducer function updates the state accordingly.

This way, you're using `useReducer` to manage the state transitions more effectively, especially when the logic becomes more complex. It's like having a dedicated tool (reducer) for handling different actions and their effects on the state.

</details>

### 25. What is UseMemo Hook ?(Implementation)

<details>
  <summary>Answer:</summary>

Imagine you're building a React application, and sometimes your components need to perform some heavy calculations or operations to generate data. Now, if these calculations are done every time your component renders, it could slow down your app's performance, especially if the input data hasn't changed. This is where `useMemo` comes in handy.

`useMemo` is a React hook that allows you to optimize performance by memoizing (caching) the result of a function or computation. It remembers the result of a calculation based on the dependencies you provide, and only recalculates when those dependencies change.

**Simple example:**

```jsx
import React, { useState, useMemo } from 'react';
```

```jsx live
function App() {
  const [count, setCount] = useState(0);
  
  // Without useMemo: This function gets called every time the component renders
  const expensiveCalculation = () => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 1; i <= count; i++) {
      result += i;
    }
    return result;
  };

  // With useMemo: This function will only re-run when 'count' changes
  const memoizedResult = useMemo(() => {
    console.log("Calculating (with useMemo)...");
    let result = 0;
    for (let i = 1; i <= count; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <p>Expensive Calculation Result: {expensiveCalculation()}</p>
        <p>Memoized Result: {memoizedResult}</p>
      </div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}
```

In this example, we're using the `useMemo` hook to cache the result of the calculation based on the `count` dependency. When you click the "Increment Count" button, you'll notice that the "Expensive Calculation Result" changes every time because the calculation runs with every render. However, the "Memoized Result" only recalculates when the `count` changes, as indicated by the console logs.

By using `useMemo`, you can improve your app's performance by avoiding unnecessary recalculations and only updating when needed, which is particularly important for components with complex computations.

</details>

### 26. What is UseRef Hook ?(Implementation)

<details>
  <summary>Answer:</summary>

In React, the `useRef` hook is used to access and interact with DOM elements or to store mutable values that won't trigger a re-render when they change. Unlike the `useState` hook, changes to the `useRef` value won't cause the component to update, making it useful for managing things that don't affect the UI directly.

**Example:**
Let's say you have a simple component that includes a button. When you click the button, you want to focus on an input field without causing the whole component to re-render.

```jsx
import React, { useRef } from 'react';
```

```jsx live
function FocusExample() {
  // Create a ref using the useRef hook
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // Use the ref to focus on the input element
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
```

In this example, the `useRef` hook is used to create a reference (`inputRef`) to the input element. When the button is clicked, the `handleButtonClick` function is called, and it uses the `inputRef` to focus on the input element without causing a re-render of the component.

</details>

### 27. High Order Component in react js ?

<details>
  <summary>Answer:</summary>

A Higher Order Component (HOC) is a design pattern used in React that enhances the behavior or functionality of a component by wrapping it inside another component. It's like a function that takes a component as input and returns a new component with some additional features or props. HOCs are often used to reuse logic, apply cross-cutting concerns (like authentication or data fetching), and keep the codebase modular.

**Example:**
Let's say you have a component named `UserProfile` that displays a user's information. You want to add some conditional rendering logic to this component to show a "Premium User" badge if the user has a premium subscription. Instead of cluttering your `UserProfile` component with this logic, you can use an HOC.

**How you might define an HOC to achieve this:**

```jsx
import React from 'react';

// This is the Higher Order Component
const withPremiumBadge = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const { isPremiumUser, ...rest } = this.props;

      return (
        <div>
          {isPremiumUser && <div>Premium User</div>}
          <WrappedComponent {...rest} />
        </div>
      );
    }
  };
};

// This is the original component
class UserProfile extends React.Component {
  render() {
    const { name, isPremiumUser } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        {isPremiumUser ? <p>Premium User Content</p> : <p>Regular User Content</p>}
      </div>
    );
  }
}

// Wrap UserProfile component with the withPremiumBadge HOC
const UserProfileWithBadge = withPremiumBadge(UserProfile);

// Usage
const App = () => {
  return (
    <div>
      <UserProfileWithBadge name="Shivay" isPremiumUser={true} />
      <UserProfileWithBadge name="Ajay Dhangar" isPremiumUser={false} />
    </div>
  );
};

export default App;
```

<BrowserWindow>
  <div>
    <UserProfile/>
  </div>
</BrowserWindow>

In this example, the `withPremiumBadge` HOC takes the `UserProfile` component as input and returns a new component that conditionally renders the premium badge and then renders the original `UserProfile` component. This allows you to keep your `UserProfile` component clean and focused on displaying user information, while the HOC takes care of adding the badge based on the `isPremiumUser` prop.

:::tip
Remember, HOCs are a powerful tool in React to enhance component behavior and reusability. They can be used for a wide range of scenarios, from handling authentication to managing state or props.
:::
</details>

### 28. Difference between callback and useCallback Hook ?

<details>
    <summary>Answer:</summary>


| Aspect            | Callback                           | useCallback Hook                               |
|-------------------|-----------------------------------|------------------------------------------------|
| Purpose           | Function passed as an argument to another function, to be called at a specific time or event. | Hook provided by React to optimize the performance of functional components by memoizing functions. |
| Usage Scenario    | Commonly used in scenarios like event handling, asynchronous operations, and passing functions as props. | Used to prevent unnecessary re-renders in functional components that use reference-equality checks. |
| Function Creation | A new function is created every time the parent function/component re-renders, even if the arguments are the same. | Creates a memoized version of the function that only changes if its dependencies (input values) change. |
| Performance Benefit | Can lead to performance issues if not managed properly, as new functions can cause unnecessary re-renders of child components. | Helps improve performance by reusing the same function reference if the dependencies remain the same, reducing re-renders. |


:::tip

**Callback Function:**

A callback function in React is a regular JavaScript function that you pass as an argument to another function or component. It's a way to tell that function/component what to do once a specific action or event occurs. Callbacks are often used to handle asynchronous tasks, such as responding to user interactions or data fetching.

Example:
```jsx
function Button(props) {
  return <button onClick={props.onClick}>Click me</button>;
}

function App() {
  const handleClick = () => {
    console.log("Button was clicked!");
  };

  return <Button onClick={handleClick} />;
}
```

In this example, `handleClick` is a callback function that gets executed when the button is clicked. It's passed as a prop to the `Button` component, and the component triggers this function when the button is clicked.

**useCallback Hook:**

The `useCallback` hook is a part of the React library and is used to optimize performance in scenarios where you need to memoize (remember) a function instance between renders. This is particularly useful when dealing with child components that depend on the function reference, as it prevents unnecessary re-renders of those child components.

Example:
```jsx
import { useState, useCallback } from 'react';

function Button(props) {
  return <button onClick={props.onClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button was clicked!");
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Button onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}
```

In this example, the `handleClick` function is wrapped with the `useCallback` hook. The second argument to `useCallback` is an array of dependencies, in this case `[count]`. This means that the `handleClick` function will be memoized and only recreated if the `count` value changes. This prevents unnecessary recreation of the function on each render, improving performance.

To summarize, a callback is a general concept in JavaScript used to handle functions passed as arguments for specific actions. The `useCallback` hook is a React-specific tool for optimizing performance by memoizing functions, ensuring that they don't get recreated unnecessarily and avoiding unnecessary re-renders of dependent components.
:::


</details>