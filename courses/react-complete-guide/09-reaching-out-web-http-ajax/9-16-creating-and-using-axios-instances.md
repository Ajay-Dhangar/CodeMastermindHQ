---
id: 9-16-creating-and-using-axios-instances
title: 9.16 Creating And Using Axios Instances
date: 2021-04-13 19:17:43
---

## New axios.js

```jsx title="axios.js" {}
import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instance.defaults.headers["Authorization"] = "AUTH TOKEN FROM INSTANCE";

// instance.interceptors.request...
export default instance;
```

## Blog.js

```jsx title="Blog.js" {1,3}
// import axios from "axios";
import React, { Component } from "react";
import axios from "../../axios";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import Post from "../../components/Post/Post";
import "./Blog.css";

...
```
