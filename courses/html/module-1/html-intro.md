---
id: html-intro
title: Introduction To HTML
sidebar_label: Introduction to HTML
date: 2022-05-11 16:49:29
sidebar_position: 1
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import HtmlWindow from '@site/src/components/HtmlWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

HTML, which stands for Hypertext Markup Language, is the backbone of web development. It is a markup language used to create the structure and content of web pages. HTML works by using tags to define different elements of a web page, such as headings, paragraphs, images, links, and more. These tags are then interpreted by web browsers to display the content correctly to users.

## What is HTML?

HTML is a markup language designed to structure and present content on the World Wide Web. It uses a system of tags to define the different elements of a web page and their relationships to each other. Each HTML tag is enclosed within angle brackets, such as `<tagname>`. The content of an element is placed between the opening and closing tags.

## HTML History and Versions

### HTML History

**The Birth of HTML:** In the late 1980s, Tim Berners-Lee, a British computer scientist working at CERN (European Organization for Nuclear Research), began to develop a system to share information among researchers. In 1990, he proposed the concept of ***"hypertext"*** and published a formal proposal for a language called ***"HTML"***.

### HTML History and Versions

HTML has evolved over the years, and various versions have been released to enhance its capabilities. The history of HTML is as follows:

- **HTML 1.0 (1993):** The first version of HTML introduced basic elements like headings, paragraphs, and lists. It also included hypertext linking, which allowed documents to link to each other.

- **HTML 2.0 (1995):** This version introduced additional elements like tables and image support. It also provided improvements to form handling.

- **HTML 3.2 (1997):** HTML 3.2 further expanded the list of available elements and included support for scripting languages like JavaScript.

- **HTML 4.01 (1999):** HTML 4.01 refined the language with more precise rules for element usage and introduced support for style sheets.

- **HTML5 (2014):** HTML5 is the latest and most significant version of HTML. It brought a wide range of new features and APIs, making it a robust and versatile language. HTML5 introduced elements like `<header>`, `<nav>`, `<footer>`, `<video>`, `<audio>`, and much more. Additionally, it provided native support for multimedia, canvas, geolocation, and offline web applications.

## Structure of an HTML Document

An HTML document is a text file containing the code that makes up a web page. It follows a specific structure, which consists of a series of nested elements.

Here's a basic structure of an HTML document:

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>
```

<HtmlWindow>
      
      <body>
          <h1>Hello, World!</h1>
          <p>This is my first HTML page.</p>
      </body>
      
 </HtmlWindow>

Let's break down the structure:

- `<!DOCTYPE html>`: This declaration informs the web browser that the document is written in HTML5.

- `<html>`: The root element of the HTML document. It contains all the other elements of the web page.

- `<head>`: This section contains meta-information about the web page, such as the title, links to external stylesheets, and other metadata.

- `<title>`: This element specifies the title of the web page, which appears in the browser's title bar or tab.

- `<body>`: This section contains the visible content of the web page, such as headings, paragraphs, images, and other elements.

## Setting up a Basic HTML Template

To get started with creating an HTML page, you only need a text editor. You can use any text editor you prefer, such as ***Notepad (Windows)***, ***TextEdit (macOS)***, or ***Visual Studio Code***. Save your file with an **".html"** extension, such as **"index.html"**.

Let's create a simple HTML template to understand the basic structure:

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my simple HTML template page.</p>
</body>
</html>
```

<BrowserWindow>
      
      <body>
          <h1>Hello, World!</h1>
          <p>This is my simple HTML template page.</p>
      </body>
      
 </BrowserWindow>

Here, we have a basic HTML document with a title, a heading (`<h1>`), and a paragraph (`<p>`). You can open this file in any web browser to view the output. The browser will render the HTML code and display the content accordingly.

Congratulations! You've just created your first HTML page. Now, let's continue exploring more HTML elements and tags to build more complex web pages.