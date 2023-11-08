---
id: html-page-structure
title: HTML Page Structure (Structure of an HTML Document)
sidebar_label: Page Structure
sidebar_position: 5
date: 2021-02-25 11:08:29
description: Welcome to HTML mastery tutorials!
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

An HTML document follows a specific structure that defines how content is organized and displayed in a web browser. Understanding this structure is fundamental for web development. In this tutorial, we'll break down the components that make up an HTML page and visualize how they appear in a web browser.

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>Sample Page</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
```

A typical HTML page looks like this:

<div style={{border: "1px solid blue", padding: "10px", margin:"5px"}}>
    <p>&lt;html></p>
    <div style={{border: "1px solid blue", padding: "10px", margin:"5px"}}>
        <p>&lt;head></p>
        <div style={{border: "1px solid blue", padding: "10px", margin:"5px"}}>&lt;title>Page title&lt;/title></div>
        <p>&lt;/head></p>
    </div>
    <div style={{border: "1px solid blue", padding: "10px", margin:"5px"}}>
        <p>&lt;body></p>
        <div style={{border: "1px solid blue", padding: "10px", margin:"5px"}}>&lt;h1>This is a heading&lt;/h1></div>
        <div style={{border: "1px solid blue", padding: "10px", margin:"5px"}}>&lt;p>This is a paragraph.&lt;/p></div>
        <div style={{border: "1px solid blue", padding: "10px", margin:"5px"}}>&lt;p>This is another paragraph.&lt;/p></div>
        <p>&lt;/body></p>
    </div>
    <p>&lt;/html></p>
</div>

### 1. DOCTYPE Declaration

The Document Type Declaration, often referred to as `<!DOCTYPE>`, is the very first line in an HTML document. It tells the browser which version of HTML the document is using and ensures that the document is rendered correctly.

### 2. HTML Root Element

Every HTML document starts with an opening `<html>` tag and ends with a closing `</html>` tag. This pair of tags encloses the entire content of the document and defines it as HTML.

### 3. Head Section

The `<head>` section is where you place metadata and information about the document. It doesn't display content directly in the browser but contains essential elements like the title, meta tags, and linked stylesheets.

### 4. Title Tag

<video controls width="100%">
  <source src="/video/title.mp4" type="video/mp4" />
</video>

Inside the `<head>` section, the `<title>` tag sets the title of the webpage, which appears in the browser's title bar or tab. It's also used by search engines for page indexing.

### 5. Meta Tags

Meta tags provide information about the document, such as character encoding and authorship. They don't affect the visible content but are crucial for SEO and browser rendering.

### 6. Body Tag

The `<body>` tag defines the visible content of the webpage. It contains text, images, links, and other elements that users interact with. Everything within the `<body>` tag is displayed in the web browser.

### 7. Body Elements

Inside the `<body>` tag, you can include various elements like headings (`<h1>`, `<h2>`), paragraphs (`<p>`), lists (`<ul>`, `<ol>`), images (`<img>`), links (`<a>`), and more. These elements create the visual and interactive aspects of your webpage.

### 8. Summary

Understanding the structure of an HTML document is essential for web development. The `<!DOCTYPE>` declaration sets the HTML version, the `<html>` root element encloses the entire document, the `<head>` section contains metadata, the `<body>` tag holds the visible content, and various elements within the `<body>` create the user experience.

### 9. Visualization of an HTML Document

Let's visualize how the components of an HTML document come together to create a webpage in a web browser. Below is a simplified example:

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>My Webpage</title>
</head>
<body>
    <h1>Welcome to My Webpage</h1>
    <p>This is a simple example of HTML page structure.</p>
    <a href="https://www.linkedin.com/in/ajay-dhangar">LinkedIn Profile</a>
</body>
</html>
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
    <h1>Welcome to My Webpage</h1>
    <p>This is a simple example of HTML page structure.</p>
    <a href="https://www.linkedin.com/in/ajay-dhangar">LinkedIn Profile</a>
</BrowserWindow>

When this HTML document is rendered in a web browser, you'll see the title "My Webpage" in the browser tab, a heading, a paragraph, and a clickable link on the webpage.

Understanding this structure and how it's visualized in a web browser is the foundation of creating web content with HTML.
