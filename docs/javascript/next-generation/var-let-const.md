---
id: var-let-const
title: Var & Let & Const
date: 2021-03-06 00:42:13
description: Three scopes of variables
---

**let** and **const** Introduced in `ES6` (`ES6` is also known as `ECMAScript 6`  and `ECMAScript 2015`)

**let** - declares block level variables:

```js
// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
```

**const** - never changes:

```js
const Pi = 3.14; // variable Pi is set
Pi = 1; // will throw an error because you cannot change a constant variable.
```

**var** - available from the function:

```js
// myVarVariable *is* visible out here

for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
  // myVarVariable is visible to the whole function
}

// myVarVariable *is* visible out here
```

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#variables' class='external'>developer.mozilla.org</a>
