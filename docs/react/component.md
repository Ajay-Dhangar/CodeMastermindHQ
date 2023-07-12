---
id: component
title: React Component
date: 2021-02-21 16:12:28
description: Component consist of elements
---

Components are like JavaScript functions. Takes input (called _props_) and return DOM element.

```jsx live
function Welcome(props) {
  const [likes, increaseLikes] = React.useState(0);

  return (
    <>
      <p>{likes} Likes</p>
      <h1>Hello, {props.name}</h1>
      <button class="button" onClick={() => increaseLikes(likes + 1)} />
    </>
  );
}
```
