---
id: 3-18-manipulating-state
title: 3.18 Manipulating State
date: 2021-03-12 23:09:42
---

If you do this:

```jsx
 switchNameHandler = () => {
   this.state.persons[0].name = 'Maximilian'
  }

```

you get the error:

```
(property) persons: {
    name: string;
    age: number;
}[]

Do not mutate state directly. Use setState().eslint(react/no-direct-mutation-state)
```

DON'T DO THIS!

There actually only are two, changing `state` and what else? You could already see it in action, `props`.

You need to use `setState` method (`this.setState`).

## `setState` method

:::danger
This feature only available in class-based components.
:::

```jsx {9,14-20}

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },   // old state
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },   // old state
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },   // new state
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },   // new state
      ],
    })
  }
```

:::tip
It will not discard `otherState` but it will simply merge the old state with the new one.
:::

And this is the main difference from [useState() hook](3-20-usestate-hook).
