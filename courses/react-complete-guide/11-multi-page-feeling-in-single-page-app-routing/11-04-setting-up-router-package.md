---
id: 11-04-setting-up-router-package
title: 11.04 Setting Up Router Package
date: 2021-04-14 20:24:07
---

## Installing `react-router` and `react-router-dom`

```bash npm2yarn
npm install --save react-router react-router-dom
```

## Folder Structure

```bash

src/
│
├── components/
│       └── Post/
│             ├── Post.css
│             └── Post.js
│
├── containers/
│        └── Blog/
│              ├── FullPost
│              │      ├── FullPost.css
│              │      └── FullPost.js
│              ├── NewPost
│              │      ├── NewPost.css
│              │      └── NewPost.js
│              ├── Posts
│              │     └── Post.js
│              ├── Blog.css
│              └── Blog.js
│
├── axios.js
├── App.js
├── App.css
├── App.test.js
├── index.js
├── index.css
│
```

## `App.js`

:::caution
First of all need to enable routing in our react app, we do this in the `index.js` or the `app.js` file. There you now need to wrap the part which should be able to render routes and to read routes, you need to wrap it with a component you import from the react-router-dom package.
:::

```jsx title="App.js" {2,8,12}
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
