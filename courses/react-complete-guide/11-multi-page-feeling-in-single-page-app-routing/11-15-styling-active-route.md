---
id: 11-15-styling-active-route
title: 11.15 Styling Active Route
date: 2021-04-16 19:47:04
---

The key takeaway is you have to use to nav link object, not the regular link object and you might need to use exact to make sure you only style the links for the routes you want to style and you don't use the to part here as a prefix when it comes to determining whether a route is active or not.

## `Blog.js`

```jsx title="Blog.js" {3,16,18-23,26,29,37}
// import axios from "axios";
import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "./Blog.css";
import NewPost from "./NewPost/NewPost";
import Posts from "./Posts/Posts";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home2</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
```

## `Blog.css`

```jsx title="Blog.css" {21}
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
.Blog a:active,
.Blog a.active {
  color: #fa923f;
}
```
