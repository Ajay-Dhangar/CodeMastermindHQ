---
id: ejs-template-engine
title: Introduction to EJS Template Engine
sidebar_position: 2
sidebar_label: 🧑‍💻EJS Template Engine
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

## What is EJS?
EJS, which stands for "Embedded JavaScript," is a template engine for Node.js and JavaScript that allows you to generate dynamic HTML content. EJS enables you to embed JavaScript code within your HTML templates, making it easier to generate dynamic content, such as variables and conditional statements, in your web applications.

## Installing EJS
Before you can use EJS, you need to install it. You can do this using npm, the Node.js package manager, by running the following command in your project directory:

```bash
npm install ejs
```

## Setting Up EJS in Your Express Application
Assuming you have an Express.js application, here's how to set up EJS as the template engine:

1. First, include EJS in your Express application by requiring it:

```js title="index.js"
const express = require('express');
const app = express();
const ejs = require('ejs');
```

2. Tell Express to use EJS as the view engine:

```js title="index.js"
app.set('view engine', 'ejs');
```

3. Define the directory where your EJS templates are stored:

```js title="index.js"
app.set('views', 'views'); // 'views' is the default directory for EJS templates
```

## Creating an EJS Template
Let's create a simple EJS template called `index.ejs`. This template will display a variable called `message`:

```html title="views/index.ejs"
<!DOCTYPE html>
<html>
<head>
    <title>EJS Example</title>
</head>
<body>
    <h1><%= message %></h1>
</body>
</html>
```

- `<%= message %>` is the EJS tag that inserts the value of the `message` variable.

## Rendering an EJS Template
In your Express route, you can render the EJS template and pass data to it. Here's an example route that renders the `index.ejs` template with a message:

```js title="index.js"
app.get('/', (req, res) => {
    const data = {
        message: 'Hello, EJS!'
    };
    res.render('index', data);
});
```

The `res.render` method takes the name of the EJS template ('index') and the data object as parameters.

## Running Your Express Application
Now, start your Express application:

```js title="index.js"
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

Visit `http://localhost:3000` in your browser, and you'll see the message "Hello, EJS!" rendered from your EJS template.

<BrowserWindow>
   <h1>Hello, EJS!</h1>
</BrowserWindow>

This is just a basic introduction to EJS. You can expand on this by incorporating conditionals, loops, and more complex data into your templates. EJS is a powerful tool for creating dynamic web pages with Node.js.