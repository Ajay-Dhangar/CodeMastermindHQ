---
id: 3-06-add-event-handler-method
title: 3.06 Add Event Handler Method
date: 2021-03-19 23:30:12
---

```jsx title="App.js" {14-22}
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

```jsx title="UserInput.js"
import React from 'react'

const userInput = () => {
  return <input type="text"></input>
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
