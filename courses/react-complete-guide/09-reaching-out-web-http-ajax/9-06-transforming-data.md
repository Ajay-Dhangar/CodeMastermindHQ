---
id: 9-06-transforming-data
title: 9.06 Transforming Data
date: 2021-04-13 13:05:25
---

## Blog.js

```jsx title="Blog.js" {14-21,27}
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
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: "Pash",
        };
      });
      this.setState({ posts: updatedPosts });
      //   console.log(response);
    });
  }
  render() {
    const posts = this.state.posts.map((post) => {
      return <Post key={post.id} title={post.title} author={post.author} />;
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

```jsx title="Post.js" {8}
import React from "react";
import "./Post.css";

const post = (props) => (
  <article className="Post">
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">{props.author}</div>
    </div>
  </article>
);

export default post;
```
