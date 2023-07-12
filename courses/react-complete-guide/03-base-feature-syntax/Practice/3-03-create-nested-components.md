---
id: 3-03-create-nested-components
title: 3.03 Create Nested Components
date: 2021-03-19 22:29:03
---

```jsx title="App.js" {9-11}
import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserOutput />
        <UserOutput />
        <UserOutput />
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

const userOutput = () => {return ()}

export default userOutput
```
