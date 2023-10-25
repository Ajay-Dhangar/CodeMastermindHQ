---
id: node-js-intro
title: Node.js Introduction
sidebar_position: 1
sidebar_label: Node.js Intro...
---

Welcome to the exciting world of Node.js! In this session, we will dive into the fundamentals of Node.js, understanding its core concepts, and exploring its vast capabilities in building scalable and high-performing applications.

### What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. It is based on the V8 JavaScript engine from Google, making it efficient and lightning-fast. With Node.js, you can create powerful server-side applications, APIs, and real-time applications.

### Key Features of Node.js:

1. **Asynchronous and Event-Driven:** Node.js operates on a non-blocking, event-driven architecture, making it lightweight and efficient for handling a large number of concurrent connections.

2. **Fast and Scalable:** Leveraging the V8 engine, Node.js executes code swiftly, making it suitable for building applications that require high scalability and real-time data exchange.

3. **Vast Package Ecosystem:** Node.js offers a rich repository of open-source libraries through the Node Package Manager (NPM), providing developers with a wide range of tools and modules for building diverse applications.

### Setting up Node.js Environment:

Let's get started with a hands-on example. Follow these steps to set up Node.js on your local machine:

1. **Install Node.js:** Visit the official Node.js website (https://nodejs.org/) and download the installer suitable for your operating system. Follow the installation instructions provided.

2. **Verify Installation:** Open your terminal and type `node -v` to check the Node.js version. And also, run `npm -v` to verify the installation of NPM.

3. **Create a Simple Server:** Now, let's create a basic server using Node.js. Write the following code in a file named `server.js`:

    ```js title="server.js"
    const http = require('http');
    
    const hostname = 'localhost';
    const port = 3000;
    
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to the Node.js server!');
    });
    
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
    ```

4. **Run the Server:** Execute the command `node server.js` in your terminal. Open your web browser and navigate to `http://localhost:3000/` to see your Node.js server in action.

### Conclusion

Congratulations! You have now taken your first steps into the world of Node.js. In the next sessions, we will delve deeper into Node.js functionalities and explore its various modules to build robust and efficient applications.