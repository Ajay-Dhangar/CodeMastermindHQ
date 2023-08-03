---
id: composition-reusability
title: Component Composition and Reusability
sidebar_position: 6
sidebar_label: Composition and Reusability
---

Component composition is a fundamental concept in React that allows you to create complex user interfaces by assembling smaller, reusable building blocks. Reusability is a key principle in software development, and React's component-based architecture excels at promoting it. Instead of creating monolithic components, you build components that focus on a single responsibility, making them more manageable and versatile.

## What is Component Composition? 

Component composition in React involves combining smaller components to create larger, more complex components. This approach enhances maintainability, as you can update or replace individual components without affecting the entire application.

### Example: Building a Page Header

Let's say you're building a simple page header. Instead of putting all the header's content in a single component, you can break it down into smaller components like logo, navigation links, and user profile.

```jsx
// Logo.js
const Logo = () => {
  return <img src="logo.png" alt="Logo" />;
};

// Navigation.js
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

// UserProfile.js
const UserProfile = ({ username }) => {
  return <div>Welcome, {username}!</div>;
};

// Header.js (composed header)
const Header = ({ username }) => {
  return (
    <header>
      <Logo />
      <Navigation />
      <UserProfile username={username} />
    </header>
  );
};
```

## Code Reusability

Reusability is a core benefit of component composition. When you create small, focused components, you can reuse them throughout your application.

### Example: Reusing a Button Component

Let's create a reusable `Button` component that can be styled differently and customized with various labels.

```jsx
// Button.js
const Button = ({ label, onClick, style }) => {
  return (
    <button style={style} onClick={onClick}>
      {label}
    </button>
  );
};
```

Now, you can use the `Button` component across different parts of your application:

```jsx
// Using the Button component
<Button label="Submit" onClick={handleSubmit} style={{ backgroundColor: 'blue' }} />
<Button label="Cancel" onClick={handleCancel} style={{ backgroundColor: 'red' }} />
```

### Resources and Further Learning

1. **React Official Documentation on Composition and Reusability**: [Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)

2. **React Component Patterns**: Learn about different patterns for building reusable components: [React Component Patterns](https://reactpatterns.com/)

3. **React Component Libraries**: Explore existing component libraries to see how they handle composition and reusability. Some popular ones include:
   - [Material-UI](https://material-ui.com/)
   - [Ant Design](https://ant.design/)
   - [Chakra UI](https://chakra-ui.com/)

4. **Video Tutorial on Component Composition and Reusability**: [React Tutorial - Learn React In 30 Minutes](https://www.youtube.com/watch?v=hQAHSlTtcmY) by Mosh Hamedani.

Remember, the best way to solidify your understanding is by practicing. Experiment with different compositions of components and aim to create reusable components that you can leverage in multiple parts of your application. Happy coding!