---
id: html-basic-structure
title: Basic HTML Structure
date: 2022-05-11 16:49:29
sidebar_position: 3
---


```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

Welcome to the HTML Mastery tutorial! In this lesson, we'll cover the fundamental concepts of building a basic HTML structure. HTML (Hypertext Markup Language) is the backbone of web development, allowing us to structure and present content on the web. So let's dive right in!

### 1. Setting Up the HTML Document

To start, let's set up the basic structure of an HTML document. Open your favorite code editor and create a new file with a `.html` extension. Then, follow these steps:

Step 1: Declare the document type by adding the `<!DOCTYPE html>` declaration at the very beginning. This tells the browser that you're using HTML5.

```html
<!DOCTYPE html>
```

Step 2: Create the HTML root element using the `<html>` tag. All other HTML elements will be nested within this element.

```html
<!DOCTYPE html>
<html>
</html>
```

### 2. Adding the Head Section

The `<head>` section of an HTML document contains metadata and information about the page. Here's how you can set it up:

Step 1: Add the opening and closing `<head>` tags within the `<html>` element.

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
</html>
```

Step 2: Inside the `<head>` section, include the `<title>` element to define the title of your webpage. This title is displayed in the browser's title bar or tab.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
</html>
```

Step 3: Optionally, you can add other metadata, such as character encoding, CSS stylesheets, or JavaScript files using elements like `<meta>`, `<link>`, or `<script>` respectively. For instance, to specify the character encoding as UTF-8, you can add the following:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
    <meta charset="UTF-8">
  </head>
</html>
```

### 3. Including the Body Content

The `<body>` section contains the visible content of your webpage. Let's add some content to your page:

Step 1: Open the `<body>` tag after the closing `</head>` tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
    <meta charset="UTF-8">
  </head>
  <body>
  </body>
</html>
```

Step 2: Inside the `<body>` section, you can add various HTML elements to structure and present your content. For example, to add a heading, you can use the `<h1>` to `<h6>` tags, where `<h1>` represents the highest level of heading.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>Welcome to My Webpage</h1>
  </body>
</html>
```

<BrowserWindow>
      
      <body>
          <h1>Welcome to My Webpage</h1>
      </body>
      
 </BrowserWindow>

Step 3: Continue adding more elements, such as paragraphs (`<p>`), lists (`<ul>`, `<ol>`, `<li>`), links (`<a>`), images (`<img>`), and more, to create the desired structure and content for your webpage.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>Welcome to My Webpage</h1>
    <p>This is a paragraph.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <a href="https://github.com/CodeMastermindHQ">Visit CodeMastermindHQ</a>
    <img src="./img/logo.png" alt="My Image" />
  </body>
</html>
```

<BrowserWindow>
      
      <body>
          <h1>Welcome to My Webpage</h1>
          <p>This is a paragraph.</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <a href="https://github.com/CodeMastermindHQ">Visit CodeMastermindHQ</a>
          <img src="https://codemastermindhq.netlify.app/img/logo.png" alt="My Image" />
      </body>
      
 </BrowserWindow>

### 4. Finalizing the Document

Step 1: Close the `<body>` tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

Step 2: Close the `<html>` tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

And that's it! You've learned how to create a basic HTML structure. Feel free to explore more HTML elements and experiment with different tags to enhance your webpage.

Remember to save your file with the `.html` extension, and you can open it in any web browser to see the rendered output.

---