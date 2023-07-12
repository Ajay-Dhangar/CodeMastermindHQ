---
id: 11-32-practice
title: 11.32 Practice
date: 2021-04-17 21:52:38
---

## `App.js`

```jsx title="App.js" {}
import React, { Component } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
// import "./App.css";
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";

class App extends Component {
  render() {
    return (
      <div className="App">

      ...
      
        <nav>
          <ul style={{ listStyle: "none", margin: "auto", padding: "0" }}>
            <li style={{ margin: "10px", display: "inline-block" }}>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li style={{ margin: "10px", display: "inline-block" }}>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/users" component={Users} />
          {/* <Route path="/courses/:courseId" component={Course} /> */}
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
```

## `Courses.js`

```jsx title="Courses.js" {}
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Course from "../Course/Course";
import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <Link
                to={{
                  pathname: this.props.match.url + "/" + course.id,
                  search: "?title=" + course.title,
                }}
                key={course.id}
              >
                <article className="Course">{course.title}</article>
              </Link>
            );
          })}
        </section>
        <Route path={this.props.match.url + "/:courseId"} component={Course} />
      </div>
    );
  }
}

export default Courses;
```

## `Course.js`

```jsx title="Course.js" {}
import React, { Component } from "react";

class Course extends Component {
  state = {
    courseTitle: "",
  };
  componentDidMount() {
    this.parsQueryParams();
  }

  componentDidUpdate() {
    this.parsQueryParams();
  }

  parsQueryParams() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      if (this.state.courseTitle !== param[1]) {
        this.setState({ courseTitle: param[1] });
      }
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.courseTitle}</h1>
        <p>
          You selected the Course with ID: {this.props.match.params.courseId}
        </p>
      </div>
    );
  }
}

export default Course;
```

## `NoMatch.js`

```jsx title="NoMatch.js" {}
import React from "react";

const noMatch = () => <h1 style={{ textAlign: "center" }}>Page not Found</h1>;

export default noMatch;
```

## `index.js`

```jsx title="index.js" {}
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
```

## Dictation

We covered a lot of point throw out this module, now it's time to also practice though. Attached to this lecture here will find this starting setup. And there I already installed the `react-router` and `react-router-dom` packages for you. So by simply downloading this attached file you've got a project which is ready to go.

In this project you also find the instructions you can see on the page here. Here is your assignment test. And I try to practice the core features we learn about in this module with you.

1. Now the first test I want you to solve this, you should add some routes to load the `users` and `courses` components on different pages by entering URLs for the moment without adding Links.
Now you can see these components `Courses` and `Users` there already added to the project here. So you don't need to add them. You already have some components here. With some styles. That's a working.
Your task is to make sure that you add some routes and add route functionality so that you can load them. Pick any path you want like `/users` and `/courses` you told me free to set to sub you way you want.
2. Test #2 that is two a some simple navigation with two links. So if the 1st test without that Links no want you to add some links, so simply setup some very simple navigation of course feel free to style it. But this is not about the styling it's about functionality. So add this Links, one leading to your users and one leading to your courses route.
Score some bonus points by may be even using Links which get some active CSS class, ang assign some active styling to them if you want, we learned about add it this module too.
3. In the 3rd task you should then make the courses clickable, because in the courses component there are some individual course components. So here in the courses components you can see I render a list a `li` list of articles. And this articles here output a single course should be clickable. You learned different ways of making them clickable, by using a Link or programmatic routing. Feel free to choose if route to two or dry out both. And when you click on one course you should be navigated to that single course component. For now render that course component in the place of courses, and you don't need to pass any data any parameters for the moment.
4. In the fourth task distant changes, and you should pass the course id to that single course page to load since task #3. Also output the id there.
5. And task #5: I want you to pass the course.title to the course page two. So not just the ID but all the title, and you can pass as a params too. In this module I only showed you how to pass one param but the same way you pass one param you can of course add more to URL. You can even score some bonus points if you thereafter try to pass as query params. Bonus points because I have showed to how to do that because actually is a `felt` in to do the react-router. You can easily pass query params as you saw, but extracting them is something you have to do manually. And you will need to google a how to extract a query params from react router to implement it. It is a bonus it is required but feel free to implement it.
6. Task #6 then required to load the course component as a nested component of courses. Thus far we replaced courses with the course component, now it should be loaded below at the bottom of the courses component.
7. In task #7 I then want you to add a 404 error page and render it for unknown routes.
8. And the test #8 I then want you to redirect route which redirects all the requests soon to let say /`all-courses` to `/courses` forward ever you used below your courses page.

These are your tasks certainly challenging but stuff we learned in this module. Now that really try on your own feel free to tee into that bonus part with a query params and in solution video I will share my solution video of course.
