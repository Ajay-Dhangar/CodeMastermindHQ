---
id: 3-22-passing-methods-between-components
title: 3.22 Passing Methods Between Components
date: 2021-03-13 18:08:56
---

This feature can be useful when you want to bind some interactive functionality (click events, etc) to the `<button>` or `<a>` elements.

## Click Handlers

You can pass methods also as props so that you can call a method which might change the state in another component which doesn't have direct access to the state and which shouldn't have direct access to the state.

```jsx {19,29} title="App.js"
...
  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian'
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('MAx')}> //anonymus function
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')} // bind this
        />
...
```

```jsx {4} title="Person.js"
const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  )
}
```

It's a common pattern and it's important to know, you can pass down click handlers which allow you to change data in the parent component, in the app component in this case for the person component (see above).

## Two way binding

There are two ways of doing that, the first is that you call `bind`, here you may simply `bind this`, ***this*** controls what ***this*** inside the function will refer to. And second, pass here is an `anonymous function` which will be executed on a click and which then returns the result of this function getting executed. *See Code Blocks above.*

## Efficiency

Now this is a very convenient syntax but it can be inefficient, react can re-render certain things in your app too often so I don't necessarily recommend using this if you don't have to, use the bind syntax instead if you can.
