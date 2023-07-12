---
id: 3-03-0-create-new-react-app
title: 3.03.0 Create New React App
date: 2021-03-09 15:56:53
description: Use an integrated framework for the best user and developer experience
---

First, you need to choose a framework.

:::info
The frameworks recommended on this page **don’t require configuration to get started** (see: <a href='https://reactjs.org/docs/create-a-new-react-app.html#create-react-app' class='external'>reactjs.org</a>).
:::

## Without a Framework

You can simply <a href='https://reactjs.org/docs/add-react-to-a-website.html' class='external'>add React as a plain `<script>` tag on an HTML page</a>, optionally with [JSX](3-06-0-jsx).

This is also **the easiest way to integrate React into an existing website**. You can always add a lager framework if you find it helpful!

## Frameworks

### Create-react-app

[Create-react-app](3-03-2-0-using-create-react-app) doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. Under the hood, it uses <a href='https://babeljs.io/' class='external'>Babel</a> and <a href='https://webpack.js.org/' class='external'>webpack</a>.

The React team primarily recommends these solutions:

- If you’re learning React or creating a new single-page app, use [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app).
- If you’re building a server-rendered website with Node.js, try Next.js.
- If you’re building a static content-oriented website, try Gatsby.
- If you’re building a component library or integrating with an existing codebase, try More Flexible frameworks.
