---
id: render-element
title: Render Element
date: 2021-02-21 18:50:35
description: Rendering an React Element into the DOM
---

You need a parent DOM node for embedding React Elements:

```jsx
<div id="root"></div>
```

To render, pass both an Element and a parent node:

```jsx
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

[Try it CodePen](https://codepen.io/papa31/pen/GRNMJoO)

The parent node with embedded React Elements forms the React DOM.

[Updating the Rendered Element](updating-element)
