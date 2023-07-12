---
id: 14-13-switching-case-in-reducer
title: 14.13 Switching Case In Reducer
date: 2021-04-24 20:46:44
---

## `reducer.js`

```jsx title="reducer.js" {6-7,11,15-16,20-21,25-28}
const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        counter: state.counter - 1,
      };

    case "ADD":
      return {
        counter: state.counter + action.value,
      };

    case "SUBTRACT":
      return {
        counter: state.counter - action.value,
      };
    default:
      return {
        counter: state.counter,
      };
  }
};

export default reducer;
```
