---
id: 16-12-linear-switch-case-statement
title: 16.12 Linear Switch Case Statement
date: 2021-07-14 20:04:07
---

## `result.js`

```jsx title="src\store\reducers\result.js" {8-14,22}
import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    (result) => result.id !== action.resultElId
  );
  return updateObject(state, { results: updatedArray });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result }),
      });
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
  }
  return state;
};

export default reducer;
```
