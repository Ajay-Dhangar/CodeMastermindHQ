---
id: useref-hook
title: useRef Hook in React
sidebar_position: 1
sidebar_label: useRef Hook
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import {useRef, useEffect} from 'react';
import card from '@site/src/css/markdown.module.css';
import AutoFocusInput from './AutoFocusInput';

```

In the world of React development, managing and interacting with the DOM (Document Object Model) is a common task. The `useRef` hook is a powerful tool that React provides to deal with DOM elements and other mutable values. In this course, we will delve into the `useRef` hook, exploring its definition, understanding its concepts, and learning why and how to use it in your React applications.

## What is useRef?

### Definition

The `useRef` hook is a built-in React hook that allows you to store mutable values. It returns a `ref` object with a `current` property that is initialized to the passed argument (`initialValue`). The `ref` object persists across renders and can be accessed and modified directly. It is commonly used to obtain and manipulate DOM elements directly.

### Description

Unlike `useState`, changing the `ref` object's `current` property doesn't trigger a re-render of the component. This makes `useRef` especially useful for keeping track of mutable values that don't affect the visual output of the component.

## Concepts Understanding

### 1 Ref Object

The `ref` object is a container for the `current` property, and it persists across renders. It allows us to access and interact with the mutable value it holds.

### 2 Mutable Values

`useRef` is not limited to DOM elements; it can hold any mutable value. This can include variables, functions, or even custom objects.

### 3 No Re-renders

One key concept is that modifying the `ref` object's `current` property won't trigger a re-render of the component. This makes it suitable for storing values that don't affect the component's visual output.

## Why Use useRef?

### 1 Keeping Values Between Renders

When you need to store values across renders without causing re-renders, `useRef` is the ideal choice. It helps maintain state between renders without triggering unnecessary updates.

### 2 Accessing and Modifying DOM Elements

`useRef` is commonly used to obtain and manipulate DOM elements directly. This can be beneficial when working with focus, animations, or other imperative DOM operations.

## How to Use useRef

### 1 Basic Usage

```jsx title="MyComponent.js"
import React, {useRef} from 'react';

function MyComponent() {
  const myRef = useRef(initialValue);

  // Access the current property
  console.log(myRef.current);

  return <div>My Component</div>;
}
```

### 4.2 Working with DOM Elements

```jsx title="AutoFocusInput.js"
import React, {useRef, useEffect} from 'react';

function AutoFocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    // Focus on the input element on mount
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}
```

<BrowserWindow>
    <AutoFocusInput />
</BrowserWindow>

## Live Demo

Let's create a live demo to showcase the practical usage of `useRef`. We'll build a simple counter component that maintains its state without triggering unnecessary renders.

```jsx title="imports in Counter component"
import React, {useRef, useState} from 'react';

function Counter() {
  // code here
}

export default Counter;
```

```jsx title="Counter.js" live
function Counter() {
  const countRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current++;
    setRenderCount(renderCount + 1);
  };

  return (
    <div>
      <p>Count: {countRef.current}</p>
      <p>Renders: {renderCount}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

In this course, we've covered the `useRef` hook in depth, from its definition to practical use cases. Whether you're dealing with DOM elements or need to persist values without triggering re-renders, `useRef` is a valuable tool in your React development toolbox.
