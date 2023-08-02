---
id: nested-component
title: Nesting Components within Each Other
sidebar_position: 4
sidebar_label: Nesting Components
tags: [React, component nesting, UI composition, modular UI, component hierarchy]
keywords: [React components, nesting components, component composition, UI composition, modular UI, component hierarchy, React UI structure]
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

In React, components can be thought of as building blocks that you can use to create more complex user interfaces. One of the powerful features of React is the ability to nest components within each other. This allows you to break down your UI into smaller, manageable pieces and create a modular structure for your application.

## 1. Introduction to Component Nesting

When you're building a user interface, you often encounter scenarios where you want to reuse certain parts of your UI in different places. This is where component nesting becomes invaluable. Instead of duplicating code, you can create reusable components and nest them within each other.

## 2. Understanding Component Nesting

Nesting components means that you can use a component as a child within another component. This allows you to compose your user interface by combining multiple components together. By breaking down your UI into smaller, self-contained components, you can achieve better organization, reusability, and maintainability.

Let's start by understanding how to nest components within each other using a simple example.

### Example: Creating a Basic Card Component

Imagine we want to create a basic card component that can be used to display various types of content. We'll start by creating a `Card` component and then nesting it within a `CardContainer` component.

**1. Create the `Card` Component (`Card.js`):**

```jsx title="src/Card.js"
import React from 'react';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
```

**2. Create the `CardContainer` Component (`CardContainer.js`):**

```jsx title="src/CardContainer.js"
import React from 'react';
import Card from './Card';

const CardContainer = () => {
  return (
    <div className="card-container">
      <h1>Featured Cards</h1>
      <Card title="Card 1" content="This is the content of Card 1." />
      <Card title="Card 2" content="This is the content of Card 2." />
      <Card title="Card 3" content="This is the content of Card 3." />
    </div>
  );
};

export default CardContainer;
```

**3. Using the `CardContainer` Component in `App.js`:**

```jsx title="src/App.js"
import React from 'react';
import CardContainer from './CardContainer';

const App = () => {
  return (
    <div className="app">
      <h1>My React App</h1>
      <CardContainer />
    </div>
  );
};

export default App;
```

<BrowserWindow>
    <body >
        <div>
          <h1>My React App</h1>
          <div className="card-container">
             <h1>Featured Cards</h1>
                <div className="card">
                  <h2>Card 1</h2>
                  <p>This is the content of Card 1.</p>
                </div>
                <div className="card">
                  <h2>Card 2</h2>
                  <p>This is the content of Card 2.</p>
                </div>
                <div className="card">
                  <h2>Card 3</h2>
                  <p>This is the content of Card 3.</p>
                </div>
           </div>
        </div>
    </body>
</BrowserWindow>


## 3. Creating Parent and Child Components

In React, components can be categorized into parent and child components. Parent components are higher-level components that encapsulate one or more child components. Child components are the building blocks that the parent component uses to compose its UI.

Let's take a look at an example:

### `Header` Component (Parent)

```jsx
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Welcome to My Website</h1>
    </header>
  );
};

export default Header;
```

### `MainContent` Component (Child)

```jsx
import React from 'react';

const MainContent = () => {
  return (
    <main>
      <p>This is the main content of the website.</p>
    </main>
  );
};

export default MainContent;
```

## 4. Using Child Components within Parent Component

Now that we have the `Header` and `MainContent` components, we can use them within a parent component like this:

### `App` Component (Parent)

```jsx
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};

export default App;
```

<BrowserWindow>
    <body >
        <div>
          <header>
            <h1>Welcome to My Website</h1>
          </header>
          <main>
            <p>This is the main content of the website.</p>
          </main>
        </div>
    </body>
</BrowserWindow>



In this example, the `App` component is the parent component that nests the `Header` and `MainContent` child components. This approach makes the UI structure clearer and more maintainable.

## 5. Benefits of Component Nesting

- **Modularity**: Nesting components allows you to create modular and reusable code, making it easier to manage and maintain your application.
- **Readability**: By breaking down your UI into smaller components, your code becomes more readable and understandable.
- **Isolation**: Each component can have its own logic and state, allowing you to isolate functionality and reduce side effects.
- **Collaboration**: Component nesting promotes collaboration among team members since different members can work on different components independently.

## Summary

Nesting components within each other is a powerful technique in React that allows you to create modular and reusable user interfaces. By breaking down your UI into smaller components and composing them together, you can build complex and organized applications.

In the example above, we created a basic `Card` component and nested it within a `CardContainer` component. This is just the beginning of what you can achieve with component nesting in React.

As you continue your journey in React, you'll find that component nesting is essential for building scalable and maintainable applications.


### 5. Resources and Further Learning

1. React Official Documentation: [Components and Props](https://reactjs.org/docs/components-and-props.html)
2. React Composition vs Inheritance: [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
3. React Component Reusability: [Component Reusability](https://www.smashingmagazine.com/2020/12/reusable-components-customization-react/)
3. React Props and PropTypes: [Props and PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)