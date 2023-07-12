---
id: 11-31-routing-and-server-deployment
title: 11.31 Routing And Server Deployment
date: 2021-04-17 21:13:00
---

```jsx title="App.js" {8}
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Blog from "./containers/Blog/Blog";

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my-app">
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
