---
id: pure-react
title: Pure React App
sidebar_position: 1
tags: [React, Pure React, React 18, Pure React app, React CDN, React DOM CDN, React createElement, ReactDOM.createRoot, HTML and React, No JSX React, Learn React from scratch]
sidebar_label: Pure React
description: Build a powerful React app from scratch with our Pure React tutorial. No JSX, Babel, or complex tools needed. Learn React 18, create components, and master web development basics. Start coding today with our beginner-friendly guide!
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
import './css/style.css'
```

Let's start by writing pure React. No compile step. No JSX. No Babel. No Webpack or Parcel. Just some JavaScript on a page. We'll use HTML.

## Getting started

Let's start your project. Create your project directory. I'm going to call mine `pure-react`.

```bash title="TERMINAL"
mkdir pure-react
cd pure-react
```

Now create src directory and create an `index.html` file inside of it.

```bash title="TERMINAL"
mkdir src
touch src/index.html
```

### Creating `index.html` file

Now open `index.html` in your editor and add the following:

```html title="src/index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pure React App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <!-- React CDN is used to get the React Library from the Internet -->     
    <!-- React 18 Script for React Library -->
    <script src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script> 

    <!-- React 18 Script for React DOM Library -->
    <script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>

    <link rel="stylesheet" href="./style.css">
    
</head>
<body>
    
    <div id="root">Not Reandered!</div> 
    
    <!-- Used refrence of external Js file -->    
    <script type="module" src="./index.js"></script>      
        
</body>
</html>
```

### Creating `index.js` file

Now create `index.js` file inside `src` directory.

```bash title="TERMINAL"
touch src/index.js
```

Now open `index.js` in your editor and add the following:

```js title="src/index.js"
const App = () => {
    return React.createElement(
        "div",
        {
            "id": "main"
        },
        React.createElement(Header), 
        React.createElement(About)        
    )
  };
  

  const Header = () => {
    return React.createElement(
        "div",
        {
            "id": "header"
        },
        React.createElement("h1", {}, "Welcome to Basic React App")        
    )
  }

  const About = () => {
    return React.createElement (
        "div",
        {
            "id": "about"
        },
        React.createElement("h2", {}, "About Me"),
        React.createElement("div", {
            "id": "about-me"
        }, 

        React.createElement("p", {}, "My name is Ajay Dhangar!")
        
        )
    )
  }

const root = document.getElementById("root");
const content = ReactDOM.createRoot(root);
content.render(React.createElement(App))
```

Now create `style.css` file inside `src` directory.

```bash title="TERMINAL"
touch src/style.css
```

### Creating `style.css` file

Now open `style.css` in your editor and add the following:

```css title="src/style.css"
* {
    margin: 0;
    padding: 0;
}

body {
    font-family: sans-serif;
    line-height: 30px;
}

#header {
    background-color: rgb(240, 230, 239);
    padding: 10px 20px;
    box-shadow: 2px 3px 5px #262626;
    text-align: center;
    color: rgb(224, 255, 22);
    text-shadow: 2px 3px 5px #262626;
    -webkit-text-stroke: 1px #000;    
}

#about {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    height: auto;
    background-color: burlywood;
    padding: 5px;
    border-radius: 8px;
}

#about-me {
    margin-left: 5px;
    margin-top: 10px;
}
```

Now open `index.html` in your browser and you will see the following output:

<BrowserWindow url="http://127.0.0.1:5500/index.html" style={{backgroundColor: '#fff', padding: '0', height: '100vh'}}>
    <div id="main">
        <div id="header">
            <h1>Welcome to Basic React App</h1>
        </div>
        <div id="about">
            <h2>About Me</h2>
            <div id="about-me">
                <p>My name is Ajay Dhangar!</p>
            </div>
        </div>
    </div>
</BrowserWindow>

## Explaination of the code

### Getting stared to `index.html` file

- First we created a file `index.html` and added the basic HTML code in it.
- Then we added the React CDN to get the React Library from the Internet.
- Then we added the React DOM CDN to get the React DOM Library from the Internet.
- Then write one `div` with `id="root"` inside `body` tag. This `div` is used to render the React App.
- Then we added the `index.js` file to the `index.html` file. With the help of script tag.

:::info
We are using two React CDN. One is for React Library and another is for React DOM Library. React Library is used to create the React App and React DOM Library is used to render the React App.

1. ***React 18 Script for React Library***

```html title="React Library"
<script src="https://unpkg.com/react@18.2.0/umd/react.development.js"></script>
```

2. ***React 18 Script for React DOM Library***

```html title="React DOM Library" 
<script src="https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
```

We are using the `type="module"` attribute in the script tag. This attribute is used to tell the browser that this script is a module. This attribute is used to use the ES6 module system.
    
```html title="index.html"
<script type="module" src="./index.js"></script>
```
:::   
    
### Getting stared to `index.js` file

- First we created a file `index.js` and added the basic JavaScript code in it.
- Then we created a function `App` and returned the `React.createElement` function.
- Then we created a function `Header` and returned the `React.createElement` function.
- Then we created a function `About` and returned the `React.createElement` function.
- Then we created a `root` variable and assigned the `document.getElementById("root")` to it.
- Then we created a `content` variable and assigned the `ReactDOM.createRoot(root)` to it.
- Then we called the `content.render(React.createElement(App))` function to render the React App.
- Then we created a `div` with `id="main"` inside `App` function. This `div` is used to render the React App.
- Then we created a `div` with `id="header"` inside `Header` function. This `div` is used to render the React App.
- Then we created a `h1` tag inside `Header` function. This `h1` tag is used to render the React App.
- Then we created a `div` with `id="about"` inside `About` function. This `div` is used to render the React App.
- Then we created a `h2` tag inside `About` function. This `h2` tag is used to render the React App.
- Then we created a `div` with `id="about-me"` inside `About` function. This `div` is used to render the React App.
- Then we created a `p` tag inside `About` function. This `p` tag is used to render the React App.
- Then we created a `style.css` file and added the basic CSS code in it.
- Then we added the `style.css` file to the `index.html` file. With the help of link tag.

```html title="index.html"
<link rel="stylesheet" href="./style.css">
```

### Getting stared to `style.css` file


- First we created a file `style.css` and added the basic CSS code in it.
- Then we added the `style.css` file to the `index.html` file. With the help of link tag.

```html title="index.html"
<link rel="stylesheet" href="./style.css">
```

:::tip
1. **What's new between React 17 and React 18? A few things, here and there, but almost entirely additive and few things to change. We'll cover them over the arc of this course.** But the biggest change is that React 18 is going to ship with a new rendering mode called "concurrent mode". This is a new way of rendering React apps that allows React to be more responsive and more efficient. It's a big change, but it's also an opt-in change. You can still use React 18 in "legacy" mode which is the same as React 17. But if you want to use concurrent mode, you'll need to use the new ReactDOM.createRoot API instead of ReactDOM.render. We'll cover this in more detail later in the course, but for now, just know that you'll need to use ReactDOM.createRoot instead of ReactDOM.render to use concurrent mode.
   
2. ReactDOM.createRoot is a new API as of React v18. The old ReactDOM.render is still available (and deprecated) but it'll render your app in "legacy" mode which won't use all the fun new features packed into React v18
:::

***Congratulations!*** You have created your first React App without JSX, Babel, Webpack or Parcel. Now you can create a React App without JSX, Babel, Webpack or Parcel.