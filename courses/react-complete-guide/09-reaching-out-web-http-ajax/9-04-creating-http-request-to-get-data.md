---
id: 9-04-creating-http-request-to-get-data
title: 9.04 Creating Http Request To Get Data
date: 2021-04-13 11:00:59
---

## Blog.js

```jsx title="Blog.js" {1,9-13}
import axios from "axios";
import React, { Component } from "react";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import Post from "../../components/Post/Post";
import "./Blog.css";

class Blog extends Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
    });
  }
  render() {
    return (
      <div>
        <section className="Posts">
          <Post />
          <Post />
          <Post />
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
```
