---
id: 16-10-using-action-creators-and-get-state
title: 16.10 Using Action Creators And Get State
date: 2021-07-14 18:00:58
---

## `result.js`

```jsx title="src\store\actions\result.js" {12-15}
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
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);

      dispatch(saveResult(res));
    }, 2000);
  };
};
```
