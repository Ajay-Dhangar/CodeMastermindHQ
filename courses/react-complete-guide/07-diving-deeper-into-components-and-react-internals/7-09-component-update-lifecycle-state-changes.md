---
id: 7-09-component-update-lifecycle-state-changes
title: 7.09 Component Update Lifecycle State Changes
date: 2021-04-07 19:50:48
---

```jsx title="App.js" {}
...
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }
...
```
