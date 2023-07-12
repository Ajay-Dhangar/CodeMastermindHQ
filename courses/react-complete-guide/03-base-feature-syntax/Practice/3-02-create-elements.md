---
id: 3-02-create-elements
title: 3.02 Create Elements
date: 2021-03-19 22:51:16
---

```jsx title="App.js"
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
```

```jsx title="UserInput.js" {4}
import React from 'react'

const userInput = () => {
  return <input type="text"></input>
}

export default userInput
```

```jsx title="UserOutput.js" {6,7}
import React from 'react'

const userOutput = () => {
  return (
    <div>
      <p>Viva!</p>
      <p>Cuba!</p>
    </div>
  )
}

export default userOutput
```
