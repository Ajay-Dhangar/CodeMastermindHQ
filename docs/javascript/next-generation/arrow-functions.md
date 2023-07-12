---
id: arrow-functions
title: Arrow Functions
date: 2021-03-06 00:53:44

---

With `use strict` code work like `ES5` (`ECMAScript 5` or `ECMAScript 2009`).

```js
// Traditional Function
function (a){
  return a + 100;
}

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}

// 2. Remove the body brackets and word "return" -- the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
a => a + 100;
```

## `this` keyword
