---
id: 5-07-introducing-styled-components
title: 5.07 Introducing Styled Components
date: 2021-04-04 11:50:39
---

> Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress - <a href='https://github.com/styled-components/styled-components' class='external'>github.com: Styled Components</a>

## Installation

Source: <a href='https://styled-components.com/' class='external'>styled-components.com</a>

```bash npm2yarn
npm install --save styled-components
```

## Usage

This is `regular JavaScript` though it's a feature called `tacked templates` and [attached](5-13-useful-resources) you find a link where you can learn more about it.

It has nothing to do with `React` that is available in `vanilla JavaScript` as well.

This method creates backticks in general can be used in JavaScript to create a so-called `template literal`.

This is a React component:

```jsx
const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`
```

Every method provided by this styled object no matter if that's `div`, `h1` or whatever it is returns a React component.

```jsx title="Person.js" {2,4-15,19,25}
import React from "react";
import styled from "styled-components";

const StyleDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  return (
    <StyleDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyleDiv>
  );
};

export default person;

```

We have a nice mixture of JSX and JavaScript all in one file with help of `styled components`.
