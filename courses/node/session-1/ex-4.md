---
id: introduction-to-expressjs
title: Introduction to Express.js
sidebar_position: 4
sidebar_label: 🧑‍💻Express.js Intro...
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

Express.js, commonly referred to as Express, is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It's designed to build web applications and APIs quickly and efficiently.

#### Key Features of Express:

1. **Routing**: Express makes it easy to define routes for your application. Routes are used to map specific HTTP methods and URLs to functions that handle them.

2. **Middleware**: Middleware functions are a powerful feature of Express. They can be used to perform tasks before the request reaches its final handler. This can include tasks like authentication, logging, and data parsing.

3. **Templating**: Express allows you to use various template engines like EJS, Pug, or Handlebars to dynamically generate HTML.

4. **Static Files**: You can serve static files (like HTML, CSS, and JavaScript) using Express, making it ideal for building single-page applications and static websites.

5. **Error Handling**: Express provides a clean and effective way to handle errors in your application.

#### Installing Express

Before you can use Express, you need to install it. You can install Express using npm (Node Package Manager). Open your terminal and run:

```bash
npm install express
```

#### Creating a Simple Express Application

Let's create a basic Express application and see how it works. First, create a file, for example, `app.js`. Then, add the following code:

```js title="app.js"
const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

In this example, we:

- Import the Express module.
- Create an Express application.
- Define a route for the root URL ('/').
- Use the `app.get` method to handle HTTP GET requests.
- Send a response of "Hello, Express!" when someone accesses the root URL.
- Start the server on port 3000.

To run this application, use the following command:

```bash
node app.js
```

Now, if you open a web browser and go to `http://localhost:3000`, you'll see "Hello, Express!" displayed in your browser.

<BrowserWindow>
   <p>Hello, Express!</p>
</BrowserWindow>

This is a simple example, but it demonstrates the basics of creating an Express application and defining routes. You can build on this foundation to create more complex web applications and APIs.