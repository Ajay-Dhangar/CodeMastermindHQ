---
id: updating-element
title: Updating Element
date: 2021-02-21 21:46:57
description: Updating the Rendered React Element
---

The simplest way to update the element is create a new Element and pass it to `ReactDOM.render`:

```jsx
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

[Try it on CodePen](https://codepen.io/papa31/pen/NWbaqJZ)

React only [updates what's necessary](updating-necessary).

<a href='https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element' class='external'>reactjs.org</a>
