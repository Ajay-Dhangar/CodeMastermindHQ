---
id: 3-16-handling-events-with-methods
title: 3.16 Handling Events With Methods
date: 2021-03-12 22:35:56
---

For now important, don't add parentheses here, just pass a reference to this function:

```jsx {11}
 ...
  switchNameHandler = () => {
    console.log('Was clicked!')
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
...

// Don't do this: onClick={this.switchNameHandler()}
// Only without parentheses
```

I don't want to execute it immediately but only when this click occurs and then this function will execute.
