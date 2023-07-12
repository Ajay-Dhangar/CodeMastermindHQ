---
id: 3-05-add-state-to-class
title: 3.05 Add State To Class
date: 2021-03-19 23:15:08
---

```jsx title="App.js" {6-12,18-19,24-25,30-31}
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
