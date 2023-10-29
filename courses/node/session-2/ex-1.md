---
id: http-methods
title: HTTP Methods in Node.js
sidebar_position: 1
sidebar_label: 🧑‍💻HTTP Methods
---

## GET Method
The GET method is used to retrieve data from a specified resource. It should not have any side-effects on the server, meaning it should only retrieve data and not modify it.

**Example:**
```js title="index.js"
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        // Handle GET request
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is a GET request');
    }
});

// Listen on a port
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

## POST Method
The POST method is used to send data to be processed to a specified resource. It can be used to create a new resource or update an existing one on the server.

**Example:**
```js title="index.js"
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        // Handle POST request
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            // Process the data
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Data received and processed: ' + data);
        });
    }
});

// Listen on a port
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

## PUT Method
The PUT method is used to update or replace a resource or create a new one if it doesn't exist at the specified URL.

**Example:**
```js title="index.js"
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'PUT') {
        // Handle PUT request
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is a PUT request');
    }
});

// Listen on a port
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

## DELETE Method
The DELETE method is used to request the removal of a resource identified by a specific URL.

**Example:**
```js title="index.js"
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'DELETE') {
        // Handle DELETE request
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is a DELETE request');
    }
});

// Listen on a port
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

These code examples demonstrate how to handle HTTP methods in Node.js, providing a practical understanding of how to use them for creating and managing resources on a server.