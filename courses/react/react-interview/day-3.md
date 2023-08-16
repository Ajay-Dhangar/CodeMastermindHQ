---
id: react-interview-day-3
title: React Interview Day 3
sidebar_position: 3
sidebar_label: Day 3
---

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
</details>

### 24. What is UseReducer Hook ?(Implementation)

<details>
    <summary>Answer:</summary>
</details>

### 25. What is UseMemo Hook ?(Implementation)

<details>
    <summary>Answer:</summary>
</details>

### 26. What is UseRef Hook ?(Implementation)

<details>
    <summary>Answer:</summary>
</details>

### 27. High Order Component in react js ?

<details>
    <summary>Answer:</summary>
</details>

### 28. Difference between callback and useCallback Hook ?

<details>
    <summary>Answer:</summary>
</details>