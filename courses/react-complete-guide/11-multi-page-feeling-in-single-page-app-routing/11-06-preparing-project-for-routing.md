---
id: 11-06-preparing-project-for-routing
title: 11.06 Preparing Project For Routing
date: 2021-04-14 21:52:04
---

:::caution
First of all need to enable routing in our react app, we do this in the `index.js` or the `app.js` file. There you now need to wrap the part which should be able to render routes and to read routes, you need to wrap it with a component you import from the react-router-dom package.
:::

## `App.js`

```jsx title="App.js"
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Blog from "./containers/Blog/Blog";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
```

## New `Posts.js`

```jsx title="Posts.js" {}
import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Pash",
          };
        });
        this.setState({ posts: updatedPosts });
        //   console.log(response);
      })
      .catch((error) => {
        console.log(error);
        // this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
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

## New `Posts.css`

```css title="Posts.css" {}
.Posts {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 80%;
  margin: auto;
}
```

## Refactor `Blog.js`

```jsx title="Blog.js" {}
// import axios from "axios";
import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Posts />
      </div>
    );
  }
}

export default Blog;
```

## Refactor `Blog.css`

```css title="Blog.css" {}
.Blog ul {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
}

.Blog li {
  display: inline-block;
  margin: 20px;
}

.Blog a {
  text-decoration: none;
  color: #000;
}

.Blog a:hover,
.Blog a:active {
  color: #fa923f;
}

```
