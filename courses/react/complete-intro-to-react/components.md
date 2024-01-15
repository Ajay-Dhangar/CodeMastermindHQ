---
id: components
title: React Components, Building a Pet Adoption App
sidebar_position: 3
sidebar_label: Components
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

## Introduction
Welcome to the exciting world of React! In this section, we'll dive into creating components, the building blocks of React applications. We'll start by organizing our code and creating a basic structure for our Pet Adoption App.

### Separating Concerns
To follow best practices, let's move our code from the DOM script tag to its own script file. In your `src` directory, create a new file called `App.js` and paste your existing code there.

Modify your code to look like this:

```js title="src/App.js"
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),    
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
  ]);
};
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
    <div>
        <h1>Adopt Me!</h1>
        <div>
            <h1>Pepper</h1>
            <h2>Bird</h2>
            <h2>Cockatiel</h2>
        </div>
  </div>
</BrowserWindow>


Remember to replace the script tag in your `index.html` with a reference to your new file.

```html
<script src="./App.js"></script>
```

### Understanding the "Key" Prop
You might encounter a console warning about the absence of a unique "key" prop. This helps React optimize component re-rendering. To fix this, provide a unique key for each item in your list.

## Creating Reusable Components
Now that we've structured our app, let's enhance our `Pet` component to make it more flexible and reusable.

```js title="src/App.js"
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
  ]);
};
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
    <div>
        <h1>Adopt Me!</h1>
        <div>
          <h1>Luna</h1>
          <h2>Dog</h2>
          <h2>Havanese</h2>
        </div>
        <div>
          <h1>Pepper</h1>
          <h2>Bird</h2>
          <h2>Cockatiel</h2>
        </div>
        <div>
          <h1>Doink</h1>
          <h2>Cat</h2>
          <h2>Mix</h2>
        </div>
  </div>
</BrowserWindow>

Now, our `Pet` component accepts `props` from its parent, making it more versatile. You can customize each instance with different pet details.

## Conclusion
Congratulations! You've just embarked on your journey into React components. Remember, the power of React lies in creating reusable, flexible components that you can combine to build amazing applications. Stay tuned for more exciting React concepts on your learning journey! 🚀