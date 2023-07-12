---
id: 5-08-more-on-styled-components
title: 5.08 More On Styled Components
date: 2021-04-04 17:06:52
---

```jsx title="App.js" {2,6-17,25-27}
import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
      background-color: green;
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      &:hover {
        background-color: lightgreen;
        color: #333
      },
`;

...

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
```
