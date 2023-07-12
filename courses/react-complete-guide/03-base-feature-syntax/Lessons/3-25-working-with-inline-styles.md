---
id: 3-25-working-with-inline-styles
title: 3.25 Working With Inline Styles
date: 2021-03-14 01:10:28
---

There is nothing wrong with using `css files` and `classes`, and it might even be the preferred way, but what you also often see in `react apps` is that you actually design your styles in `JavaScript`.

## CSS-in-JS

Let's make a variable `style`, to be precise the constant:

```jsx {3,15} title="App.js"
...
  render() {
    const style = {  // object 
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler('MAx')}>
          Switch Name
        </button>
...
```

The *style* constant it's not a `css class property` is an object. `Label -> value`. Value is a string. Is always. Because it's JavaScript. As you can see, the *css* style properties have JavaScript representations. In *camelCase*:

```jsx
background-color -> backgroundColor
```

:::caution
In JavaScript, *kebab-case* doesn't fit because of syntax rule. `-` is not allowed in identifier so `padding-top` is not valid for variable or property name. <a href='https://stackoverflow.com/questions/55433344/why-does-vanilla-html-js-and-react-use-camelcase-for-stylings-while-css-does' class='external'>stackoverflow.com</a>
:::

You can't wrap *kebab-case* form in quotes:

```jsx
'background-color': 'white' // error
```

Read more about React structure <a href='https://stackoverflow.com/questions/55221433/is-there-an-official-style-guide-or-naming-convention-for-react-based-projects' class='external'>stackoverflow.com</a>

See docs on styling here <a href='https://reactjs.org/docs/dom-elements.html#style' class='external'>reactjs.org</a> and see FAQ: Styling and CSS <a href='https://reactjs.org/docs/faq-styling.html' class='external'>reactjs.org</a>
