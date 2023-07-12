---
id: 11-30-lazy-loading-with-react-suspense
title: 11.30 Lazy Loading With React Suspense
date: 2021-04-17 19:44:26
---

## `App.js` (Suspense branch in GitHub)

```jsx title="App.js" {1,4-5,8-13,17-24}
import React, { Component, Suspense } from "react";
import User from "./containers/User";

// import Posts from './containers/Posts';
const Posts = React.lazy(() => import("./containers/Posts"));

class App extends Component {
  state = { showPosts: false };
  modeHandler = () => {
    this.setState((prevState) => {
      return { showPosts: !prevState.showPosts };
    });
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={this.modeHandler}>Toggle Mode</button>
        {this.state.showPosts ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Posts />
          </Suspense>
        ) : (
          <User />
        )}
      </React.Fragment>
      // <BrowserRouter>
      //   <React.Fragment>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route path="/user" component={User} />
      //     <Route
      //       path="/posts"
      //       render={() => (
      //         <Suspense fallback={<div>Loading...</div>}>
      //           <Posts />
      //         </Suspense>
      //       )}
      //     />
      //   </React.Fragment>
      // </BrowserRouter>
    );
  }
}
```
