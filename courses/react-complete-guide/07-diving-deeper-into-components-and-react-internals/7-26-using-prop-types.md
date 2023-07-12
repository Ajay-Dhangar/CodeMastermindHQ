---
id: 7-26-using-prop-types
title: 7.26 Using PropTypes
date: 2021-04-08 20:34:49
---

## Installation `prop-types`

Source: <a href='https://www.npmjs.com/package/prop-types' class='external'>npmjs.com: Prop Types</a>

```bash npm2yarn
npm install --save prop-types
```

## Usage `prop-types`

```jsx title="Person.js" {1,5-10}
import PropTypes from "prop-types";

...

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
```

Feel free to use them on any component you have or on your most important components and definitely consider using them if you are building a component library which you want to share with other developers. So consider using them whenever you have scenarios where other people are using your components, and it might not be super clear which props your components take and which type of data goes into which prop.
