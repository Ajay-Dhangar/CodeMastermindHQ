---
id: 3-10-add-styling
title: 3.10 Add Styling
date: 2021-03-20 00:11:31
---

<a href='https://github.com/PaPa31/react-complete-guide/commit/9b5a45ac1e30fbbba4504a3bcf4a754939c328d0' class='external'>github.com: 9b5a45ac1e30fbbba4504a3bcf4a754939c328d0</a>

```jsx title="App.js"
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

```jsx title="UserInput.js" {2-8,13}
import React from 'react'
const style = {
  border: '1px solid red',
  padding: '6px',
  textAlign: 'center',
  display: 'block',
  margin: '0 auto',
}

const userInput = (props) => {
  return (
    <input
      style={style}
      type="text"
      onChange={props.changed}
      value={props.name}
    ></input>
  )
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

```css title="UserOutput.css" {1-9}
.UserOutput {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 2px #ccc;
  width: 60%;
  margin: 16px auto;
  padding: 16px;
  background-color: #eee;
  text-align: center;
}
```
