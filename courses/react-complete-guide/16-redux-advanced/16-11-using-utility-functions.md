---
id: 16-11-using-utility-functions
title: 16.11 Using Utility Functions
date: 2021-07-14 19:03:10
---

## New `utility.js`

```jsx title="src\store\utility.js" {}
export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues,
  };
};
```

## `reducers/counter.js`

```jsx title="src\store\reducers\counter.js" {2,11,14,17,20}
import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });

    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });

    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + action.value });

    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - action.value });

    default:
  }
  return state;
};

export default reducer;
```

## `reducers/result.js`

```jsx title="src\store\reducers\result.js" {2,12-14,22}
import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // Change data
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result }),
      });
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return updateObject(state, { results: updatedArray });
    default:
  }
  return state;
};

export default reducer;
```

## `actions/result.js`

```jsx title="src\store\actions\result.js" {14-15}
import * as actionTypes from "./actionTypes";

export const saveResult = (res) => {
  // const updatedResult = res * 2
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
};

export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      //   const oldCounter = getState().ctr.counter;
      //   console.log(oldCounter);

      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId,
  };
};
```
