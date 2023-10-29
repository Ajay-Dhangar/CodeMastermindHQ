---
id: middleware
title: Middleware in Node.js
sidebar_position: 3
sidebar_label: 🧑‍💻Middleware
---

Middleware in Node.js is a crucial component in the request-response cycle. It allows you to process and manipulate incoming and outgoing requests and responses. Middleware functions can be global (applied to all routes) or specific (applied to certain routes). They play a significant role in tasks like authentication, logging, error handling, and more.

### Global Middleware

Global middleware functions are executed for every incoming request, regardless of the route. They are typically used for tasks that should apply to the entire application. Let's create a global middleware for logging incoming requests:

```javascript
// Import required modules
const express = require('express');
const app = express();

// Global middleware for logging
app.use((req, res, next) => {
    console.log(`[${new Date().toUTCString()}] ${req.method} ${req.url}`);
    next(); // Move on to the next middleware or route handler
});

// Your route handlers go here

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

In this example, the global middleware logs the request method and URL for every incoming request.

### Specific Middleware

Specific middleware functions are applied to specific routes. They allow you to define middleware only for routes where it's needed. Here's an example of specific middleware for an authentication check:

```javascript
// Middleware function for authentication check
function authenticate(req, res, next) {
    if (req.isAuthenticated()) {
        next(); // User is authenticated, proceed to the route handler
    } else {
        res.status(401).send('Unauthorized'); // User is not authenticated
    }
}

// Apply specific middleware to a route
app.get('/protected', authenticate, (req, res) => {
    res.send('This route is protected.');
});

// Your other route handlers

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

In this example, the `authenticate` middleware is applied only to the `/protected` route. It checks if the user is authenticated before allowing access.

By using global and specific middleware, you can customize the behavior of your Node.js application at different levels, making it more efficient and secure. Experiment with different middleware functions to enhance your application's functionality.