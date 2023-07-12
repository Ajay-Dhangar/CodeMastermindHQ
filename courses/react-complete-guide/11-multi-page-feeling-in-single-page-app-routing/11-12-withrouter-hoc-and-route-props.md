---
id: 11-12-withrouter-hoc-and-route-props
title: 11.12 withRouter Hoc And Route Props
date: 2021-04-15 12:11:37
---

If you add `console.log()` (we need to refactor the component a bit to insert console.log correctly) to get `props` in simple component (not a container, like we did in previous page):

```jsx title="Post.js" {4-6,14}
import React from "react";
import "./Post.css";

const post = (props) => {
  console.log(props);
  return (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

export default post;
```

You will not be able to get these props (related to routing).

So the routing relay the props are not **passed down the component tree**, we can't access them in components which we simply embed as part of the JSX code of a container.

## 1st simplest way

You can transfer them from `Posts.js` to `Post.js` with either `spread operator`:

```jsx title="Posts.js" {12}
...
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            {...this.props}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}
export default Posts;
```

or explicitly target certain props like this:

```jsx title="Posts.js" {8}
...
      posts = this.state.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            match={this.props.match}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
...
```

## 2d way with `withRouter`

```jsx title="Post.js" {2,5-7,15,17}
import React from "react";
import { withRouter } from "react-router-dom";
import "./Post.css";

const post = (props) => {
  console.log(props);
  return (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

export default withRouter(post);
```
