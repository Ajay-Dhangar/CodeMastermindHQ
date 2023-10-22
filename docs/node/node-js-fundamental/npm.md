---
id: npm
sidebar_position: 3
title: Using the Node Package Manager (NPM)
tags: [Node Package Manager, NPM for beginners, Managing Node.js packages, Dependency management, NPM installation, Package.json file, NPM commands, Using external packages, Updating packages, Removing packages, Node.js development, Web development tools, JavaScript packages, NPM tutorial, Package management in Node.js]
sidebar_label: 🧑‍💻NPM📦
description: Learn how to manage Node.js packages with NPM. Install, update, and use packages effectively in your projects
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

In this module, we will explore the Node Package Manager (NPM), a powerful tool that comes with Node.js. NPM allows you to easily manage and install packages (libraries) in your Node.js applications. These packages can include everything from utility functions to entire web frameworks, making it an essential tool for Node.js developers.

## What is NPM?

NPM stands for Node Package Manager. It is a package manager for Node.js, which means it helps you manage external libraries and dependencies for your Node.js applications. NPM is installed automatically when you install Node.js. It provides access to thousands of packages that you can use in your projects.

## Installing Packages with NPM

You can use NPM to install packages globally or locally. To install a package globally, it's available to all your projects, while local installations are specific to a particular project. To install a package locally, navigate to your project directory in the terminal and use the following command:

```bash
npm install package-name
```

For example, to install the popular Express.js web framework, you would run:

```bash
npm install express
```

This will download the Express.js package and add it to your project's `node_modules` folder.

## Package.json and Dependency Management

NPM uses a file called `package.json` to keep track of the packages your project depends on. This file includes metadata about your project and its dependencies. You can create a `package.json` file for your project using the following command:

```bash
npm init
```

Follow the prompts to fill in the project details. You can also manually create or edit this file.

## Managing Dependencies

Once you have a `package.json` file, you can easily manage your project's dependencies. To save a package as a dependency, use the `--save` flag when installing:

```bash
npm install package-name --save
```

This updates your `package.json` file with the new dependency. When you share your project with others or deploy it, they can run `npm install`, and NPM will install all the required dependencies listed in `package.json`.

## Using Installed Packages

After installing a package, you can use it in your Node.js code. For example, if you've installed Express.js, you can include it in your code like this:

```js title="index.js"
const express = require('express');
const app = express();
```

You can now use the features and functions provided by the Express.js package in your application.

## Updating and Removing Packages

To update a package to the latest version, use the following command:

```bash
npm update package-name
```

To remove a package, use the `uninstall` command:

```bash
npm uninstall package-name
```

## Example:

here's a full working Node.js code example using Express to display a paragraph.

```js title="index.js"
const express = require('express');
const app = express();
const port = 3000; // You can choose any available port number

// Define a route to display the paragraph with the name "Ajay"
app.get('/', (req, res) => {
  const paragraph = "Hello, my name is Ajay. I'm learning Node.js with Express!";
  res.send(`<p>${paragraph}</p>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

To run this code:

1. Make sure you have Node.js and NPM (Node Package Manager) installed on your system.
2. Create a new directory for your project and navigate to it in your terminal.
3. Create a new file, e.g., `app.js`, and paste the code into it.
4. Open your terminal and run the following command to install the Express package if you haven't already:

   ```bash
   npm install express
   ```

5. Run your Node.js application:

   ```bash
   node app.js
   ```

6. Open your web browser and visit `http://localhost:3000` (or the port you specified) to see the paragraph.

<BrowserWindow>
    <p>Hello, my name is Ajay. I'm learning Node.js with Express!</p>
</BrowserWindow>

This code sets up a basic Express server that listens for incoming requests on the root route ('/'). When you access this route, it responds with a paragraph containing.

## Conclusion

The Node Package Manager (NPM) is an essential tool for managing dependencies and packages in your Node.js applications. Understanding how to use NPM effectively is crucial for modern web development, as it allows you to leverage a vast ecosystem of open-source packages to streamline your projects. In the next module, we will explore event-driven programming in Node.js.