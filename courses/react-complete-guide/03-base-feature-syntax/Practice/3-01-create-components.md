---
id: 3-01-create-components
title: 3.01 Create Components
date: 2021-03-19 22:29:03
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

```jsx title="UserInput.js"
const userInput = () => {}

export default userInput
```

```jsx title="UserOutput.js"
import React from 'react'

const userOutput = () => {}

export default userOutput
```
