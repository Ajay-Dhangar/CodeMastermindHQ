---
id: 4-1-create-input-field
title: 4.1 Create Input Field
date: 2021-04-03 14:20:46
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs defaultValue="setstate" values={[
    { label: "setState", value: "setstate" },
    { label: "useState()", value: "usestate" }
]}>
<TabItem value="setstate">

```jsx
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    userInput: "",
  };
  inputChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.userInput}
          onChange={(event) => this.inputChangeHandler(event)}
        />
        <p>{this.state.userInput.length}</p>
      </div>
    );
  }
}

export default App;
```

</TabItem>

<TabItem value="usestate">

```jsx
import React, { useState } from "react";
import "./App.css";

const app = () => {
  const [inputUserState, setInputUserState] = useState({
    userInput: "",
  });
  const changeInputHandler = (event) => {
    setInputUserState({
      userInput: event.target.value,
    });
  };
  return (
    <div className="App">
      <input type="text" onChange={(event) => changeInputHandler(event)} />
      <p>{inputUserState.userInput.length}</p>
    </div>
  );
};

export default app;
```

</TabItem>
</Tabs>
