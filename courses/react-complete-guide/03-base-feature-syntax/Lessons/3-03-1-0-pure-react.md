---
id: 3-03-1-0-pure-react
title: 3.03.1.0 Pure React
date: 2021-03-21 17:28:24
---

Let's start by writing pure React.

Create an `index.html` file and add this code to it:

```html title="index.html" {11-12}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
  </head>
  <body>
    <div id="app">not rendered</div>
    <script src="https://unpkg.com/react@17.0.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js"></script>
    <script>
      // React code here
    </script>
  </body>
</html>
```

Open *index.html* in your browser. You should see a line of text saying: ***not rendered***.

Inside of *index.html*, we have two script tags:

- `React library`: Interface between the file and React (just API). All methods (except one) will be via this library.
- `React DOM`: Rendering layer. Since we're rendering to the browser, we're using **React DOM**. There are other React libraries like **React Native**, **React 360** (formerly React VR), **A-Frame React**, **React Blessed**, and others.

Add the following React code between the last `<script>` tags:

```jsx title="React code"
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello World!")
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

:::caution
Note that the order of all scripts tags is important. It is also important that you placed all of these scripts after `<div id="app">` container. The browser first creates the DOM, then fills it with content.
:::

## Finished File

You should have:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello World</title>
  </head>
  <body>
    <div id="app">not rendered</div>
    <script src="https://unpkg.com/react@17.0.1/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js"></script>
    <script>
      class App extends React.Component {
        render() {
          return React.createElement(
            "div",
            {},
            React.createElement("h1", {}, "Hello World!")
          );
        }
      }
      ReactDOM.render(React.createElement(App), document.getElementById("app"));
    </script>
  </body>
</html>
```

This is about the simplest React app you can build.
