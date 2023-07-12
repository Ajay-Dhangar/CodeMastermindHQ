---
id: 18-06-getting-a-token-from-backend
title: 18.06 Getting A Token From Backend
date: 2021-07-18 18:20:22
---

Endpoint see here: <a href='https://firebase.google.com/docs/reference/rest/auth#section-create-email-password' class='external'>firebase.google.com: Section Create Email Password</a>

```bash
https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
```

Request Body Payload see at the same place as the Endpoint. These are the three properties of the object:

```jsx
const authData = {
    email: email,
    password: password,
    returnSecureToken: true,
};
```

Web API Key see here: <a href='https://console.firebase.google.com/u/0/project/react-burger-bf7e8/settings/general' class='external'>console.firebase.google.com: General</a>

## `actions/auth.js`

```jsx title="src\store\actions\auth.js" {1,27-46}
import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDsmwPeH2yE7yqvoeYolCLgB9ju50rYivo",
        authData
      )
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
```
