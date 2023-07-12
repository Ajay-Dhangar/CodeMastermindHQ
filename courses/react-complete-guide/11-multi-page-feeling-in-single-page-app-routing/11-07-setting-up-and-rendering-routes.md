---
id: 11-07-setting-up-and-rendering-routes
title: 11.07 Setting Up And Rendering Routes
date: 2021-04-14 22:22:51
---

`<Route>` simply replaces itself with the content you define in the `render` attribute.  
First, the `react router` checks: it compares the `path attribute` with the `page path`. If your current path starts from this path,it will be displayed:  
`path attribute` === `page path (without domain)` + ...

If you add the `exact` attribute, then the check will compare the  entire paths:  
`path attribute` === `page path (without domain)`

## `Blog.js`

```jsx title="Blog.js" {3,22-23}
// import axios from "axios";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Blog.css";

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
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home2</h1>} />
      </div>
    );
  }
}

export default Blog;
```
