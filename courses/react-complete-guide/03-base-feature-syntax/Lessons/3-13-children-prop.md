---
id: 3-13-children-prop
title: 3.13 Children Prop
date: 2021-03-12 20:01:25
---

The special `props.children` property for data between the start end end tags.

You should know that after this:

```jsx {7}
const person = (props) => {
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  )
}

// With <Person name="Stephanie" age="26" />
```

You got this in the browser:

```html {4}
...
      <div>
        <p>I'm Stephanie and I am 26 years old!</p>
        <p></p>
      </div>
...
```

If between the opening and closing tags is empty.
