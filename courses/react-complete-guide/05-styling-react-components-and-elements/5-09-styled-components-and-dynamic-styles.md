---
id: 5-09-styled-components-and-dynamic-styles
title: 5.09 Styled Components And Dynamic Styles
date: 2021-04-04 17:24:25
---

```jsx title="App.js" {7,14,26}
import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
      background-color: ${(props) => (props.alt ? "red" : "green")};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      &:hover {
        background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
        color: #333
      },
`;

    ...

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
```
