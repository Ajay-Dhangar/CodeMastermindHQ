---
id: 3-09-add-two-way-binding
title: 3.09 Add Two Way Binding
date: 2021-03-20 00:06:55
---

```jsx title="App.js" {29}
import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
    state = {
    persons: [
      { name: 'Pasha', age: 47 },
      { name: 'Masha', age: 37 },
      { name: 'Chelsea', age: 1 },
    ],
  }

  onChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 47 },
        { name: 'Masha', age: 37 },
        { name: 'Chelsea', age: 1 },
      ],
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.onChangeHandler}
          name={this.state.persons[0].name}
        />
        <UserOutput
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          Git!
        </UserOutput>
        <UserOutput
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          Queen!
        </UserOutput>
        <UserOutput
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          Meow!
        </UserOutput>
      </div>
    );
  }
}

export default App;
```

```jsx title="UserInput.js" {4}
import React from 'react'

const userInput = (props) => {
  return <input type="text" onChange={props.changed}></input>
}

export default userInput
```

```jsx title="UserOutput.js"
import React from 'react'

const userOutput = (props) => {
  return (
    <div>
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  )
}

export default userOutput
```
