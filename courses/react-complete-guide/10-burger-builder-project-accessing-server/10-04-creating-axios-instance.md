---
id: 10-04-creating-axios-instance
title: 10.04 Creating Axios Instance
date: 2021-04-13 20:58:08
---

## Installing `axios`

```bash npm2yarn
npm install --save axios
```

## New axios-orders.js

```jsx title="axios-orders.js" {}
import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://react-burger-bf7e8-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
```
