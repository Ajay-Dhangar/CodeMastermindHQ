---
id: html-basic-elements
title: Basic Elements
date: 2022-05-11 16:49:29
sidebar_position: 5
tags: [Basic HTML Elements, HTML Tags, HTML Structure, HTML Head Tag, HTML Body Tag, HTML Heading Tags, HTML Paragraph Tag, HTML Anchor Tag, Learn HTML Elements, HTML Tutorial for Beginners]
---


```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

In this tutorial, we will cover the fundamental elements of HTML. These elements form the building blocks of web pages and include the `<html>`, `<head>`, `<body>`, `<h1>` to `<h6>`, `<p>`, and `<a>` tags.

**1. The `<html>` Tag:**
The `<html>` tag represents the root element of an HTML document. It contains the entire web page's content and serves as the container for other elements.

**Example:**
```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

**2. The `<head>` Tag:**
The `<head>` tag is a container for metadata and other information about the web page. It typically includes the title of the page, external stylesheets, scripts, and other important details.

**Example:**
```html title="index.html"
<head>
  <title>My Web Page</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>
</head>
```

**3. The `<body>` Tag:**
The `<body>` tag represents the main content area of a web page. It contains the visible content that users see when visiting the page.

**Example:**
```html title="index.html"
<body>
  <h1>Welcome to My Web Page</h1>
  <p>This is the main content area.</p>
  <a href="https://codemastermindhq.netlify.app/">Visit CodeMasterMindHQ</a>
</body>
```

<BrowserWindow>
      
     <body>
       <h1>Welcome to My Web Page</h1>
       <p>This is the main content area.</p>
       <a href="https://codemastermindhq.netlify.app/">Visit CodeMasterMindHQ</a>
     </body> 

</BrowserWindow>

**4. Heading Tags (`<h1>` to `<h6>`):**
Heading tags are used to define headings or titles for sections of a document. They range from `<h1>` (the highest level) to `<h6>` (the lowest level). These tags convey the hierarchical structure of the page.

**Example:**
```html title="index.html"
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

<BrowserWindow>
      
     <body>
       <h1>Heading 1</h1>
       <h2>Heading 2</h2>
       <h3>Heading 3</h3>
       <h4>Heading 4</h4>
       <h5>Heading 5</h5>
       <h6>Heading 6</h6>
     </body> 

</BrowserWindow>

**5. The Paragraph Tag (`<p>`):**
The `<p>` tag is used to define paragraphs of text. It represents a block-level element that creates a new line before and after the paragraph.

**Example:**
```html title="index.html"
<p>This is a paragraph of text.</p>
<p>Another paragraph goes here.</p>
```

<BrowserWindow>
      
     <body>
       <p>This is a paragraph of text.</p>
       <p>Another paragraph goes here.</p>
     </body> 

</BrowserWindow>

**6. The Anchor Tag (`<a>`):**
The `<a>` tag is used to create hyperlinks to other web pages or resources. It requires an `href` attribute, specifying the destination URL.

**Example:**
```html
<a href="https://ajay-dhangar.github.io/">Visit My site</a>
```

<BrowserWindow>
      
     <a href="https://ajay-dhangar.github.io/">Visit My site</a>

</BrowserWindow>

In this tutorial, we covered the basic elements of HTML, including the `<html>`, `<head>`, `<body>`, `<h1>` to `<h6>`, `<p>`, and `<a>` tags. These elements are fundamental to creating web pages and understanding their structure.

## Interview questions

**1. What is the purpose of the `<html>`, `<head>`, and `<body>` tags in HTML?**
- The `<html>` tag represents the root element of an HTML document, containing the entire web page's content.
- The `<head>` tag is used to define the head section of the HTML document, which contains metadata, scripts, stylesheets, and other important information.
- The `<body>` tag encloses the main content area of the web page that is visible to users.

**2. How do you define headings in HTML?**
- Headings in HTML are defined using the `<h1>` to `<h6>` tags. `<h1>` represents the highest-level heading, while `<h6>` represents the lowest level.

**3. What is the purpose of the `<p>` tag?**
- The `<p>` tag is used to define paragraphs of text in HTML. It represents a block-level element that creates a new line before and after the paragraph.

**4. How do you create hyperlinks in HTML?**
- Hyperlinks in HTML are created using the `<a>` tag. The destination URL is specified using the `href` attribute within the `<a>` tag.

**5. Can you give an example of an HTML document structure that includes these basic elements?**
```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Main Heading</h1>
    <p>This is a paragraph of text.</p>
    <a href="https://ajay-dhangar.github.io/">Visit My Site</a>
  </body>
</html>
```

<BrowserWindow>
      
     <body>
       <h1>Main Heading</h1>
       <p>This is a paragraph of text.</p>
       <a href="https://ajay-dhangar.github.io/">Visit My Site</a>
     </body> 

</BrowserWindow>

**6. What is the purpose of the `<title>` tag?**
- The `<title>` tag is used to define the title of an HTML document. It appears in the browser's title bar or tab and is also used by search engines for page indexing and displaying search results.
