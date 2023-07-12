---
id: 4-12-practice-solution
title: 4.12 Practice - Solution
date: 2021-04-03 14:38:51
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## Folder Structure

```bash
│
├── src
│   └── App.js
│
├── Validation
│   └── Validation.js
│
├── Char
│   └── Char.js
│
```

## App.js

<Tabs defaultValue="setstate" values={[
    { label: "setState", value: "setstate" },
    { label: "useState()", value: "usestate" }
]}>
<TabItem value="setstate">

<a href='https://github.com/PaPa31/react-complete-guide/commit/58521730943a1da5208c261554e75c3ae0ed155d' class='external'>github.com: Practice-4-1 (branch), last commit</a>

```jsx title="App.js"
import React, { Component } from "react";
import "./App.css";
import Char from "./Char/Char";
import Validation from "./Validation/Validation";

class App extends Component {
  state = {
    userInput: "",
  };
  inputChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };
  deleteCharHandler = (charIndex) => {
    const text = this.state.userInput.split("");
    text.splice(charIndex, 1);
    const updatedText = text.join("");
    this.setState({
      userInput: updatedText,
    });
  };
  render() {
    const userText = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          char={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.userInput}
          onChange={(event) => this.inputChangeHandler(event)}
        />
        <p>{this.state.userInput.length}</p>
        <Validation inputLength={this.state.userInput.length} />
        {userText}
      </div>
    );
  }
}

export default App;
```

</TabItem>

<TabItem value="usestate">

<a href='https://github.com/PaPa31/react-complete-guide/commit/bce166b0b17ed921e944a82580a366a9b17a9ca9' class='external'>github.com: useState-4-1 (branch), last commit</a>

```jsx title="App.js"
import React, { useState } from "react";
import "./App.css";
import Char from "./Char/Char";
import Validation from "./Validation/Validation";

const app = () => {
  const [inputUserState, setInputUserState] = useState({
    userInput: "",
  });
  const changeInputHandler = (event) => {
    setInputUserState({
      userInput: event.target.value,
    });
  };
  const deleteCharHandler = (charIndex) => {
    const text = inputUserState.userInput.split("");
    text.splice(charIndex, 1);
    const updatedText = text.join("");
    setInputUserState({
      userInput: updatedText,
    });
  };
  const userText = inputUserState.userInput.split("").map((ch, index) => {
    return (
      <Char char={ch} key={index} clicked={() => deleteCharHandler(index)} />
    );
  });
  return (
    <div className="App">
      <input
        type="text"
        onChange={(event) => changeInputHandler(event)}
        value={inputUserState.userInput}
      />
      <p>{inputUserState.userInput.length}</p>
      <Validation textLength={inputUserState.userInput.length} />
      {userText}
    </div>
  );
};

export default app;
```

</TabItem>
</Tabs>

## Validation.js

```jsx title="Validation.js"
import React from "react";

const validation = (props) => {
  let validationMessage = "Text too short";
  if (props.textLength > 5) validationMessage = "Text long enough";
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;
```

## Char.js

```jsx title="Char.js"
import React from "react";

const char = (props) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid #ccc",
    cursor: "pointer",
  };
  return (
    <div style={style} onClick={props.clicked}>
      {props.char}
    </div>
  );
};

export default char;
```
