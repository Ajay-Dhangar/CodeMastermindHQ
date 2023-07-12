---
id: 3-24-adding-styling-with-stylesheets
title: 3.24 Adding Styling With Stylesheets
date: 2021-03-14 00:30:54
---



Make a new file `Person.css`:

```css title="Person.css"
.Person {
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
}
```

> One important thing, whichever css code I write in here (in `person.css`) is not scoped to this `person.js` component, it is global css code. So I will define a new css class which I named `Person` with a capital P, still I could add this anywhere in my application since it is global but by using my component name, I can rule out the danger of and accidentally using it somewhere else.

Add `import` line to `Person.js` and add styles from this file to some tag using the `className` keyword:

```jsx {2,6} title="Person.js"
import React from 'react'
import './Person.css'

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

```

You can't find these style tags in the html file in the public folder. The style text are injected dynamically by the `webpack` into the final file in the head section.

```html title="final html file"
<head>
...
<style type="text/css">.Person {
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  -webkit-box-shadow: 0 2px 3px #ccc;
          box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
}
</style>
...
</head>
```
