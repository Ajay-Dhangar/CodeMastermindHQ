---
id: class-component
title: Creating Class Components || Working with Class Components
sidebar_position: 5
sidebar_label: Class Components
tags: [React, class components, state, event handling, lifecycle methods, props, JavaScript, JSX, beginner-friendly]
meta:
  - name: description
    content: Learn how to create and work with class components in React. Understand state management, event handling, lifecycle methods, and more.
  - name: keywords
    content: React, class components, state, event handling, lifecycle methods, props, JavaScript, JSX, beginner-friendly
---


```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
const handleClick = () => {
    alert('Button clicked!');
};

```

In React, class components are a traditional way of defining components. They have been a fundamental part of React since its early days. Class components are defined using ES6 classes and are known for their ability to manage state, handle lifecycle events, and have access to more features compared to functional components. Although React now recommends using functional components with hooks for new projects, understanding class components is still valuable as you might encounter them in existing codebases or legacy projects.

### 1. Creating a Class Component

To create a class component, you need to define a JavaScript class that extends the `React.Component` base class. The class must include a `render()` method that returns the JSX to be rendered. Here's a simple example:

```jsx title="MyClassComponent.jsx"
import React from 'react';

class MyClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, I am a Class Component!</h1>
      </div>
    );
  }
}

export default MyClassComponent;
```

<BrowserWindow>
    <div>
       <h1>Hello, I am a Class Component!</h1>
    </div>
</BrowserWindow>

### 2. State in Class Components

One of the most significant advantages of class components is their ability to manage state. State represents the data that can change over time and influences the rendering of the component. To add state to a class component, you use the `constructor` method to initialize the state object, and later, you can update it using the `setState()` method. Here's an example:

```jsx title="Counter.jsx"
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

### 3. Handling Events in Class Components

Just like functional components, class components can handle events triggered by user interactions. You define event handlers as class methods, and then you can use them in JSX by passing them to event listeners. Here's an example of handling a button click event:

```jsx title="ClickHandler.jsx"
import React from 'react';

class ClickHandler extends React.Component {
  handleClick = () => {
    alert('Button clicked!');
  };

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default ClickHandler;
```

<BrowserWindow>
    <div>
       <button onClick={handleClick}>Click Me</button>
    </div>
</BrowserWindow>

### 4. Lifecycle Methods in Class Components

Class components have several lifecycle methods that provide control over the component's behavior during its different phases (mounting, updating, and unmounting). While hooks provide similar functionalities in functional components, understanding lifecycle methods can still be helpful. Here's an example of using some common lifecycle methods:

```jsx title="LifecycleExample.jsx"
import React from 'react';

class LifecycleExample extends React.Component {
  componentDidMount() {
    console.log('Component has been mounted.');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated.');
    console.log('Previous props:', prevProps);
    console.log('Previous state:', prevState);
  }

  componentWillUnmount() {
    console.log('Component will be unmounted.');
  }

  render() {
    return <div>Lifecycle Methods Example</div>;
  }
}

export default LifecycleExample;
```

### 5. Example: Class Component with State and Props
Let's create an example of a class component that uses both state and props:

```jsx title="Message.jsx"
import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello,',
    };
  }

  render() {
    const { name } = this.props;
    const { message } = this.state;
    return (
      <div>
        <h1>{message} {name}!</h1>
        <button onClick={() => this.setState({ message: 'Hi,' })}>
          Change Message
        </button>
      </div>
    );
  }
}

export default Message;
```


In this example, the component receives the `name` prop from its parent component, and it also manages the `message` state internally. When the button is clicked, the `message` state is updated, triggering a re-render of the component.

### 6. Class Components vs. Functional Components with Hooks

While class components have been the traditional way of defining components, React now recommends using functional components with hooks for new projects. Hooks offer a more concise and straightforward way to handle state and lifecycle events. However, class components are still relevant and can be useful in specific scenarios, especially when working with older codebases. Here's a comparison between class components and functional components with hooks:

**Class Component:**

```jsx title="ClassComponentExample.jsx"
import React from 'react';

class ClassComponentExample extends React.Component {
  // State, Lifecycle Methods, Event Handlers, etc.
  
  render() {
    return <div>Class Component Example</div>;
  }
}

export default ClassComponentExample;
```

**Functional Component with Hooks:**

```jsx title="FunctionalComponentExample.jsx"
import React, { useState, useEffect } from 'react';

function FunctionalComponentExample() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // Lifecycle Effect
    return () => {
      // Cleanup Effect
    };
  }, [dependency]);

  // Event Handlers, etc.
  
  return <div>Functional Component Example</div>;
}

export default FunctionalComponentExample;
```

### Resources and Links

1. React Class Components Documentation: [https://reactjs.org/docs/react-component.html](https://reactjs.org/docs/react-component.html)
2. State and Lifecycle in React: [https://reactjs.org/docs/state-and-lifecycle.html](https://reactjs.org/docs/state-and-lifecycle.html)
3. Handling Events in React: [https://reactjs.org/docs/handling-events.html](https://reactjs.org/docs/handling-events.html)
4. Comparison between Class and Functional Components: [https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both](https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both)

