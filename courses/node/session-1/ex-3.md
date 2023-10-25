---
id: http-module
title: HTTP Module in Node.js
sidebar_position: 3
sidebar_label: HTTP Module
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

The HTTP module in Node.js allows you to create an HTTP server that can handle incoming HTTP requests and send HTTP responses. It's a fundamental part of building web applications in Node.js.

## Setting Up an HTTP Server

To get started, you need to import the HTTP module and create an HTTP server. Here's a basic example:

```js title="index.js"
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello, World!\n');
});

// Listen on a specific port and host
const port = 3000;
const hostname = 'localhost';
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

In this example, we import the HTTP module, create a server, and specify a response when someone accesses the server. We then listen on a specific port and host.

<BrowserWindow>
   <p>Hello, World!</p>
</BrowserWindow>

## Handling Different HTTP Methods

HTTP supports various methods like GET, POST, PUT, and DELETE. You can handle these methods in your server. Here's an example of handling GET and POST requests:

```js title="index.js"
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Handle GET request
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('This is a GET request.\n');
  } else if (req.method === 'POST') {
    // Handle POST request
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`This is a POST request with data: ${body}\n`);
    });
  }
});

const port = 4000;
const hostname = '127.0.0.1';
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

In this code, we check the request method (GET or POST) and respond accordingly.

<!-- <video width="320" height="240" controls>
  <source src="video/http-method.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> -->

<video src="/video/http-method.mp4" width="95%" height="40%" controls autoplay loop></video>

## Handling URL Paths

You can also handle different URL paths by parsing the `req.url` property. Here's an example:

```js title="index.js"
const http = require('http');

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === 'GET' && url === '/hello') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<p>Hello, Node.js!</p>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<p>Not Found</p>');
  }
});

const port = 3000;
const hostname = '127.0.0.1';
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

Visit `http://127.0.0.1:3000/hello` in your browser

<BrowserWindow url="http://127.0.0.1:3000/hello">
   <p>Hello, Node.js!</p>
</BrowserWindow>

Visit `http://127.0.0.1:3000` in your browser

<BrowserWindow url="http://127.0.0.1:3000/">
   <p>Not Found</p>
</BrowserWindow>

In this example, we check both the method and the URL path.