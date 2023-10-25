---
id: node-handson-1
title: Create a Dynamic Web Server
sidebar_position: 5
sidebar_label: Node Handson 1
---
 
## Description:
In this hands-on session, your task is to create a dynamic web server using Node.js. The goal is to respond to HTTP requests with different messages based on the request URL.

## Requirements:

1. Create a Node.js server that listens on port 3000.

2. When a user accesses the server, the server should respond with a welcoming message like "Welcome to My Dynamic Node Server."

3. If the user accesses a URL like `http://localhost:3000/about`, the server should respond with a message specific to the "about" page, for example, "This is the About Page."

4. If the user accesses a URL like `http://localhost:3000/contact`, the server should respond with a message specific to the "contact" page, for example, "You can reach us at contact@example.com."

5. Implement a 404 error message for any other URLs that are not explicitly handled.

## Additional Challenges (Optional):

6. Add custom logic to handle other routes or URLs of your choice.

7. Implement error handling for different HTTP status codes (e.g., 500 Internal Server Error).

## Hints:
- You can use the `http` module to create the server.
- Explore the `req.url` property to determine the requested URL.
- Use conditional statements to respond differently based on the URL.

<div align="right"><a href="/"><button className="btn" style={{backgroundColor:'blue', color:'#fff'}}>Submit</button></a></div>