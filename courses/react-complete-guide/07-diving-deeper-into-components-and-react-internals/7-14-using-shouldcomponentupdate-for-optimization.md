---
id: 7-14-using-shouldcomponentupdate-for-optimization
title: 7.14 Using shouldComponentUpdate For Optimization
date: 2021-04-07 23:13:54
---

```jsx title="Persons.js" {}
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    if (nextProps.persons === this.props.persons) {
      return false;
    } else {
      return true;
    }
  }
```
