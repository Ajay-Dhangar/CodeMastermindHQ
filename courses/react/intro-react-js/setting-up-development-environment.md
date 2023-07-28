---
id: Setting-Up-Environment
title: Setting up the Development Environment (Node.js, npm, Create React App)
sidebar_position: 2
sidebar_label: Setting Up the Development Environment
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
import '../../../docs/react/create-react-app/css/style.css'
```

In this topic, we'll guide you through setting up your development environment to start building React applications. We'll cover installing Node.js and npm (Node Package Manager) to manage dependencies, and then we'll use Create React App to create a new React project with ease.

### 1. Introduction to Node.js and npm

Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. It comes with npm, a package manager that helps you install, manage, and share JavaScript libraries and tools.

**Resources:**
- [Node.js Official Website](https://nodejs.org/)
- [npm Official Website](https://www.npmjs.com/)

### 2. Installing Node.js and npm

To get started, we need to install Node.js and npm on your computer. Follow these steps based on your operating system:

**For Windows Users:**
1. Go to the Node.js official website (https://nodejs.org/).
2. Download the LTS (Long-Term Support) version for Windows.
3. Run the installer and follow the installation instructions.

**For macOS Users:**
1. Go to the Node.js official website (https://nodejs.org/).
2. Download the LTS (Long-Term Support) version for macOS.
3. Run the installer and follow the installation instructions.

**For Linux Users:**
1. For Linux, you can use a package manager to install Node.js and npm. Open your terminal and enter the following commands:
   ```
   sudo apt-get update
   sudo apt-get install nodejs
   sudo apt-get install npm
   ```

**Verification:**
To verify that Node.js and npm are installed correctly, open your terminal or command prompt and enter the following commands:
```
node -v
npm -v
```
You should see the version numbers of Node.js and npm printed on the screen.

### 3. Creating a New React Project with Create React App

Create React App is a command-line tool that helps you create a new React project with a pre-configured development environment. It sets up everything you need to build a React app, so you can focus on writing code.

**Step 1: Install Create React App**
Open your terminal or command prompt and enter the following command to install Create React App globally on your system:
```
npm install -g create-react-app
```

**Step 2: Create a New React Project**
Now that you have Create React App installed, you can create a new React project with the following command:
```
npx create-react-app my-react-app
```
Replace "my-react-app" with the desired name for your project.

**Step 3: Navigate to the Project Directory**
Once the project is created, navigate to the project directory using the `cd` command:
```
cd my-react-app
```

**Step 4: Start the Development Server**
To run the development server and see your React app in action, use the following command:
```
npm start
```
This will start the development server, and you can access your React app at `http://localhost:3000` in your web browser.

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

Congratulations! You've successfully set up your development environment and created a new React project using Create React App. Now you're ready to start building awesome React applications!

**Tutorial:**
- [Create React App Documentation](../../../docs/react/create-react-app/)
- [Getting Started with Create React App](../../../docs/react/create-react-app/getting-started/)
