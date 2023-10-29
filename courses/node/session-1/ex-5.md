---
id: node-handson-1
title: Creating a Basic HTTP Route in Node.js
sidebar_position: 5
sidebar_label: 🧑‍💻Node Handson 1
---
 
### Description:
In this hands-on session, you will get your first taste of Node.js by creating a simple HTTP route. We'll explore the fundamentals of Node.js and how it handles HTTP requests. By the end of this exercise, you will be able to create a basic route that can send responses in both HTML and JSON formats.

### Requirements:
- A computer with Node.js installed
- A code editor (e.g., Visual Studio Code)
- Basic understanding of JavaScript

### Additional Challenges (Optional):
If you're looking for an extra challenge, try the following:
1. Enhance your route to handle different HTTP methods like POST or GET.
2. Implement error handling for invalid routes or requests.
3. Create multiple routes and organize your code effectively.

### Hints:
- Start by creating a Node.js script.
- Use the 'http' module to create an HTTP server.
- Define a route that listens for incoming requests.
- When a request is received, send an HTML response using the 'response' object.
- To send a JSON response, use the 'JSON.stringify' method.

### Instructions:
1. Open your code editor.
2. Create a new JavaScript file (e.g., `app.js`).
3. Import the 'http' module and create an HTTP server.
4. Define a route (e.g., '/hello') that listens for incoming requests.
5. When a request is made to your route, send an HTML response containing a greeting message.
6. Additionally, modify your route to respond with a JSON object that includes a message.
7. Test your route by opening a web browser and accessing 'http://localhost:PORT/route-name'.
8. Verify that both HTML and JSON responses are displayed in the browser.

By completing this hands-on exercise, you'll gain a solid understanding of creating HTTP routes in Node.js and how to respond with different content types. This is a foundational skill for building web applications with Node.js. Good luck!

:::tip

```js title="app.js"
const http = require('http');
const port = 3000; // You can choose any available port

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    // Handle the root path
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello, this is an HTML response</h1>');
  } else if (request.url === '/json') {
    // Handle a JSON route
    const jsonData = { message: 'This is a JSON response' };
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(jsonData));
  } else {
    // Handle 404 Not Found
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>404 - Not Found</h1>');
  }
});


server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

```

<div align="right"><a href="/"><button className="btn" style={{backgroundColor:'blue', color:'#fff'}}>Submit</button></a></div>