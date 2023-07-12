---
id: 11-08-rendering-components-for-routes
title: 11.08 Rendering Components For Routes
date: 2021-04-14 22:35:45
---

We can load components just like with `render` but with the `component` property.

## `Blog.js`

```jsx title="Blog.js" {5,25}
// import axios from "axios";
import React, { Component } from "react";
import { Route } from "react-router-dom";
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
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home2</h1>} /> */}
        <Route path="/" exact component={Posts} />
      </div>
    );
  }
}

export default Blog;
```
