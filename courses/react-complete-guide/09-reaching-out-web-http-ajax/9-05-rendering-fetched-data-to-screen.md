---
id: 9-05-rendering-fetched-data-to-screen
title: 9.05 Rendering Fetched Data To Screen
date: 2021-04-13 11:40:25
---

## Blog.js

```jsx title="Blog.js" {9-11,14-15,19-21,24}
import axios from "axios";
import React, { Component } from "react";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import Post from "../../components/Post/Post";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({ posts: response.data });
      //   console.log(response);
    });
  }
  render() {
    const posts = this.state.posts.map((post) => {
      return <Post key={post.id} title={post.title} />;
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
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

## Post.js

```jsx title="Post.js" {6}
import React from "react";
import "./Post.css";

const post = (props) => (
  <article className="Post">
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">Author</div>
    </div>
  </article>
);

export default post;
```

## Post.css

```css title="Post.css" {2}
.Post {
  width: 250px;
  padding: 16px;
  text-align: center;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  margin: 10px;
  box-sizing: border-box;
  cursor: pointer;
}

.Post:hover,
.Post:active {
  background-color: #c0ddf5;
}

.Author {
  margin: 16px 0;
  color: #ccc;
}
```
