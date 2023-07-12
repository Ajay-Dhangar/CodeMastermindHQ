---
id: 3-04-1-ide-setup
title: 3.04.1 Ide Setup
date: 2021-03-11 11:21:52
---

Whichever toolchain you choose, you need to customize it. This process is broken down into a build process, code formatting, linting, testing, and type checking.

Editors Syntax Highlighting <a href='https://babeljs.io/docs/en/editors/' class='external'>babeljs.io</a> with plugins

## Displaying Lint Output in the Editor

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

```
{
  "extends": "react-app"
}
```

I created this file, but I don't know why?

## Debugging in the Editor

Visual Studio Code and WebStorm support debugging out of the box with Create React App. This enables you as a developer to write and debug your React code without leaving the editor, and most importantly it enables you to have a continuous development workflow, where context switching is minimal, as you don’t have to switch between tools.

### Visual Studio Code

You would need to have the latest version of VS Code and VS Code <a href='https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome' class='external'>Chrome Debugger Extension (marketplace.visualstudio.com)</a>.

Then add the block below to your `launch.json` file and put it inside the `.vscode` folder in your app’s root directory.

I took `launch.json` from here: <a href='https://medium.com/@JSantaCL/how-to-debug-an-angular-app-using-vs-code-and-chromium-7eb60b0b0cee' class='external'>medium.com</a>

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chromium against localhost",
      "url": "http://localhost:3001",
      "webRoot": "${workspaceFolder}",
      "runtimeExecutable": "/usr/bin/chromium",
      "runtimeArgs": [
        "--new-window",
        "-user-data-dir=/${workspaceFolder}/DevProfile",
        "--remote-debugging-port=9222",
        "--disable-background-networking"
      ]
    }
  ]
}
```

Extension seems to work, but I don't know the best practices. Read more about configure <a href='https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#troubleshooting' class='external'>Troubleshooting (github.com)</a>.

## Formatting Code Automatically

:::caution
I don't know if it's necessary. I think the VS Code `prettier` extension is working fine and the setup below is not required.
:::

To format our code whenever we make a commit in git, we need to install the following dependencies:

```
npm install --save husky lint-staged prettier
```

- `husky` makes it easy to use githooks as if they are npm scripts.
- `lint-staged` allows us to run scripts on staged files in git. See this blog post about lint-staged to learn more about it.
- `prettier` is the JavaScript formatter we will run before commits.

Now we can make sure every file is formatted correctly by adding a few lines to the `package.json` in the project root.

Add the following line to `scripts` section:

```json {2}
  "scripts": {
    "precommit": "lint-staged",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

Next we add a 'lint-staged' field to the `package.json`, for example:

```json {4-9}
 "dependencies": {
    // ...
  },
  "lint-staged": {
    "src/**/*.{js,jsx,json,css}": [
      "prettier --single-quote --write",
      "git add"
    ]
  },
  "scripts": {
```

Now, whenever you make a commit, Prettier will format the changed files automatically.

## Formatting at Project Start

You can also run (from your project root):

```bash
./node_modules/.bin/prettier --single-quote --write "src/**/*.{js,jsx,json,css}"
```

to format your entire project for the first time.

## Source

Read more: <a href='https://github.com/PaPa31/react-complete-guide' class='external'>github.com: React Complete Guide</a>
