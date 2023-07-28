---
id: your-cra-1st
title: Creating Your First React Project
sidebar_position: 3
sidebar_label: First React project
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
import '../../../docs/react/create-react-app/css/style.css'
```

In this section, we'll walk you through the process of creating your very first React project from scratch. By the end of this topic, you will have a basic understanding of how to set up a React application and get it running.

## 1. Prerequisites

Before we get started, make sure you have the following installed on your system:

- Node.js: React requires Node.js, a JavaScript runtime, to work. You can download and install it from the official website: [https://nodejs.org](https://nodejs.org)

## 2. Setting Up the Development Environment

### 2.1 Install Create React App

Create React App is a popular tool that helps you set up a new React project quickly. To install it, open your terminal or command prompt and run the following command:

```
npm install -g create-react-app
```

### 2.2 Create a New React Project

Now that Create React App is installed, you can use it to create a new React project. In your terminal, navigate to the folder where you want to create the project, and run the following command:

```
npx create-react-app my-first-react-app
```

This will create a new directory named `my-first-react-app`, and all the necessary files and dependencies for your React project will be set up inside it.

### 2.3 Navigate to Your Project Folder

Once the project is created, navigate to the project folder using the following command:

```
cd my-first-react-app
```

## 3. Understanding the Project Structure

Before we start coding, let's take a quick look at the project structure created by Create React App:

```
my-first-react-app/
  ├── node_modules/
  ├── public/
  │   ├── index.html
  │   └── ...
  ├── src/
  │   ├── App.css
  │   ├── App.js
  │   ├── App.test.js
  │   ├── index.css
  │   ├── index.js
  │   └── ...
  ├── package.json
  ├── package-lock.json
  └── ...
```

- `node_modules/`: This folder contains all the dependencies installed for your project. It's automatically generated when you run `npm install`.

- `public/`: This folder contains the publicly accessible files, such as the main `index.html` file that loads your React application.

- `src/`: This folder contains your application's source code. The main entry point for your app is `index.js`, and you'll be doing most of your coding here.

- `package.json` and `package-lock.json`: These files keep track of your project's dependencies and configurations.

## 4. Running Your React App

With the project set up, it's time to see your React app in action! In the terminal, run the following command:

```
npm start
```

This will start a development server, and your app will be accessible at [http://localhost:3000](http://localhost:3000) in your web browser.


<BrowserWindow style={{backgroundColor: "#282c34"}}>
    <body >
    <div style={{textAlign: 'center'}}>
      <header style={{minHeight: '80vh', display:' flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 'calc(10px + 2vmin)', color: '#fff'}}>
        <img src="https://raw.githubusercontent.com/CodeMastermindHQ/CodeMastermindHQ/7072abb527b8d225d5646fe4a2d73b7dc50ef7ae/static/dev-img/react.svg" className="App-logo" alt="logo" />
        <br/>
        <p>
          Edit src/App.js and save to reload.
        </p> 
        <a
          style={{color: '#61dafb'}}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </body>
</BrowserWindow>

You should see a default React app with the React logo spinning on the screen. Congratulations, you've just created and run your first React project!

## 5. Related Resources

- [React Official Documentation](https://reactjs.org/docs/getting-started.html): The official documentation is a comprehensive resource for learning React. It covers everything from the basics to advanced topics.

- [Create React App Documentation](https://create-react-app.dev/docs/getting-started): Explore more about Create React App and its configuration options in the official documentation.

- [React Tutorial](https://reactjs.org/tutorial/tutorial.html): This interactive tutorial will take you through building a simple tic-tac-toe game in React and is a great way to reinforce your understanding.

- [React Cheat Sheet](https://devhints.io/react): A handy cheat sheet with React syntax and commonly used methods for quick reference.

Congratulations! You've successfully created your first React project and have it up and running. In the next topics, we'll dive deeper into React's core concepts and explore how to build more complex applications. Happy coding!