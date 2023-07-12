---
id: 3-04-passing-data-through-props
title: 3.04 Passing Data Through Props
date: 2021-03-19 23:06:00
---

```jsx title="App.js" {9-17}
import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserOutput name="Pasha" age="47">
          Git!
        </UserOutput>
        <UserOutput name="Masha" age="37">
          Queen!
        </UserOutput>
        <UserOutput name="Chelsea" age="1">
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

```jsx title="UserOutput.js" {6-9}
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
