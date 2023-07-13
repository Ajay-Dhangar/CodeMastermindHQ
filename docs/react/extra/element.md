---
id: element
title: React Element
date: 2021-02-21 16:00:25
description: Elements are the smallest building blocks of React apps
---

Elements are the smallest building blocks of React apps.

```jsx
const name = <h1>Hello, World!</h1>
```

This variable `name` carries html, css and javascript. Three in one. Looks like html. But no.

```jsx
const name = <h1 className={textAlign: center}> Hello  {}
```

You take a DOM quantum (pseudo, because jsx converts to html), assign a variable to it, and work with that variable. This variable is a React Element.

- [Render an Element into the DOM](render-element)
- Elements constitute a [component](component).

<a href='https://reactjs.org/docs/rendering-elements.html' class='external'>reactjs.org</a>
