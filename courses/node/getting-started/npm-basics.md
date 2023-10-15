---
id: npm-intro
sidebar_position: 3
title: NPM (Node Package Manager) Basics
tags: [NPM basics, Node Package Manager, NPM commands, NPM installation, Managing packages with NPM, Node.js package manager, Package.json file, NPM tutorial, Node.js dependency management, NPM global installation, Node.js, Package management, JavaScript, Dependency management, NPM commands, NPM installation, Package.json, Node.js development, Software development]

sidebar_label: NPM Basics
---

## Introduction to NPM

NPM, or Node Package Manager, is a powerful tool that comes bundled with Node.js. It is used to manage and distribute packages (libraries and modules) for JavaScript development, making it an essential tool for Node.js developers. In this module, we'll explore the basics of NPM and how to use it effectively.

### What is a Package Manager?

A package manager is a tool that simplifies the process of installing, updating, configuring, and removing software. In the context of Node.js, NPM is primarily used for managing JavaScript packages.

## Getting Started with NPM

Before diving into the specifics of NPM, let's ensure you have it installed. To check if NPM is installed on your system, open your terminal or command prompt and run the following commands:

```bash
npm -v
```

You should see the version number if NPM is installed. If not, you can install Node.js, which includes NPM.

### Installing Node.js and NPM

1. Visit the [Node.js official website](https://nodejs.org/).
2. Download the LTS (Long-Term Support) version for stability.
3. Follow the installation instructions for your operating system.

## NPM Commands

NPM is a command-line tool, and it uses a variety of commands to perform different tasks. Here are some essential NPM commands:

### `npm init`

This command initializes a new Node.js project by creating a `package.json` file. The `package.json` file contains metadata about your project and its dependencies.

```bash
npm init
```

### `npm install`

Use this command to install packages and dependencies for your project. You can specify packages to install, and NPM will automatically fetch them from the NPM registry.

```bash
npm install package-name
```

### `npm install -g`

The `-g` flag installs packages globally, making them available to all Node.js projects on your system.

```bash
npm install -g package-name
```

### `npm list`

This command lists all the installed packages in your project and displays their versions.

```bash
npm list
```

### `npm search`

Use this command to search for packages on the NPM registry. You can find packages by name, description, or keywords.

```bash
npm search package-name
```

### `npm uninstall`

Uninstalling packages is as simple as using the `uninstall` command with the package name.

```bash
npm uninstall package-name
```

### `npm update`

This command updates packages to their latest versions.

```bash
npm update package-name
```

### `npm outdated`

Check which packages in your project are outdated and need updates.

```bash
npm outdated
```

## Working with `package.json`

The `package.json` file is a critical part of any Node.js project. It defines your project's metadata, dependencies, and scripts. Here's an example of a `package.json` file:

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A Node.js application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

- `name`: The name of your project.
- `version`: The version of your project.
- `description`: A brief description of your project.
- `main`: The entry point for your application.
- `scripts`: Custom scripts for your project.
- `dependencies`: A list of project dependencies.

## Conclusion

NPM simplifies the management of packages in your Node.js projects, enabling you to leverage a vast ecosystem of libraries and modules. In this module, you've learned the basics of NPM, from installation to using common NPM commands and working with `package.json`. These skills are essential for building robust Node.js applications and will serve as a foundation for further learning in Node.js development.