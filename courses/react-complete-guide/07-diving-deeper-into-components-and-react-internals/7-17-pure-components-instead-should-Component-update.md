---
id: 7-17-pure-components-instead-should-Component-update
title: 7.17 PureComponents Instead shouldComponentUpdate
date: 2021-04-08 11:51:25
---

If you implemented `shouldComponentUpdate` with a check like this:

```jsx title="Persons.js" {6-8}
...

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    if (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    ) {
      return true;
    } else {
      return false;
    }
  }
...
```

You can do instead this:

```jsx title="Persons.js" {2,4}
import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {

...

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[Persons.js] shouldComponentUpdate");
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   // return true;
  // }

...
```

The result will be the same.

Because `PureComponent` in the end is just a normal component that already implements `shouldComponentUpdate` with a complete `props` check, so that checks for any changes in any prop of that component.
