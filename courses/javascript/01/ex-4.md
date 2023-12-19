---
id: where-to-write-javascript
title: Where To Write JavaScript
sidebar_label: Where To Write JavaScript
date: 2022-05-11 16:49:29
sidebar_position: 4
tags: [JavaScript]
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

![Where To Write JavaScript](./img/where-to-write-javascript.png)

JavaScript code can be written in various environments, and understanding where to write your JavaScript is crucial for effective web development. 

## We can write Js code in 3 ways

- Inside HTML file (Inline Js) 
- Inside `<script>` tag (Internal Js) 
- In a separate file (External Js file and we can link it to HTML file using `<script>` tag in `<head>` or `<body>` tag of HTML file)  

### 1. Inline Js:
  - Inline Js is written inside HTML file using `onclick` attribute of HTML tag. 
  - Inline Js is not recommended to use because it makes HTML file messy and difficult to read. 
    
**For Example:**
  ```html title="index.html"
  <button onclick="alert('Hello World!')">Click Me</button>
  ```
        
 <BrowserWindow url="http://127.0.0.1:5500/index.html">
    <button onClick={() => alert('Hello World!')}>Click Me</button>
 </BrowserWindow>

### 2. Internal Js:
  - Internal Js is written inside `<script>` tag of HTML file. 
  - Internal Js is not recommended to use because it makes HTML file messy and difficult to read.
  - Internal Js is written inside `<head>` or `<body>` tag of HTML file.

**For Example:**

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Internal Js</title>
    <script>
        alert('Hello World!');
    </script>
</head>
<body>
    <h1>Internal Js</h1>
</body>
</html>
```

<p align="center"> <b> OR </b></p>

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Internal Js</title>
</head>
<body>
    <h1>Internal Js</h1>
    <script>
        alert('Hello World!');
    </script>
</body>
</html>
```

### 3. External Js:
  - External Js is written in a separate file with `.js` extension.
  - External Js is recommended to use because it makes HTML file clean and easy to read.
  - External Js is linked to HTML file using `<script>` tag inside `<head>` or `<body>` tag of HTML file.
  - External Js file is created in the same folder as HTML file.

**For Example:**
  
  ```html title="index.html"
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <title>External Js</title>
      <script src="script.js"></script>
  </head>
  <body>
      <h1>External Js</h1>
  </body>
  </html>
  ```
  
  ```js title="script.js"
  alert('Hello World!');
  ```

<p align="center"> <b> OR </b></p>

  ```html title="index.html"
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <title>External Js</title>
  </head>
  <body>
      <h1>External Js</h1>
      <script src="script.js"></script>
  </body>
  </html>
  ```
  
  ```js title="script.js"
  alert('Hello World!');
  ```

## Summary

- JavaScript code can be written in various environments, and understanding where to write your JavaScript is crucial for effective web development.
- We can write Js code in 3 ways:
  - Inline Js
  - Internal Js
  - External Js
- External Js is recommended to use because it makes HTML file clean and easy to read.
- External Js file is created in the same folder as HTML file.
- External Js file is linked to HTML file using `<script>` tag inside `<head>` or `<body>` tag of HTML file.
- Internal Js is written inside `<script>` tag of HTML file.
- Internal Js is not recommended to use because it makes HTML file messy and difficult to read.
- Internal Js is written inside `<head>` or `<body>` tag of HTML file.
- Inline Js is written inside HTML file using `onclick` attribute of HTML tag.