---
id: 3-19-function-components-naming
title: 3.19 Function Components Naming
date: 2021-03-07 23:17:22
---

In the **next lecture**, we’ll learn how to manage state in functional components (instead of class-based components).

In case you’re getting an error with the code shown in the next lecture, simply assign a capitalized variable name to the variable that holds your functional component.

**Example:**

Use

```jsx
const App = () => { ... }
```

instead of

```jsx
const app = () => { ... }
```

Technically, that’s not required but depending on your project setup, the built-in linter (a code quality checking tool) that comes with create-react-app might not like the lowercase variable name.

You can also avoid this by creating projects with the **right react-scripts version**, which I would **recommend for this course** anyways (see the [setup video, lecture 26](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/14320208)):

```jsx
create-react-app my-app --scripts-version 1.1.5
```

or

```jsx
npx create-react-app react-complete-guide --scripts-version 1.1.5
```
