---
id: anchor-tag
title: Anchor Tag in HTML
sidebar_label: Anchor Tag
sidebar_position: 6
date: 2021-02-25 11:08:29
description: Welcome to HTML mastery tutorials!
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

In the vast world of the web, links are your trusty companions for navigating from one page to another. In HTML, these connections are created using the `<a>` tag, which stands for the Anchor tag. The Anchor tag is essential for building the interconnected web we know and love.

### Key Characteristics of HTML Links

HTML links serve as bridges between different web pages and are essential for the web's functionality. Here are the key characteristics:

- **Specified by the `<a>` tag:** The `<a>` tag is your ticket to creating links within your web pages. It is also commonly referred to as a hyperlink.
- **Used to link documents:** It's the magic wand that connects one document to another, making the web a vast network of knowledge.
- **Includes a closing tag `</a>`:** Just like every good story, every `<a>` tag has an ending, and it's marked by `</a>`.

### Syntax of HTML Links

Creating an HTML link is as easy as one, two, click. Here's the basic structure:

```html
<a href="Your specified path">
    Content to display as the link
</a>
```

The `href` attribute defines the destination of the link, and the content enclosed between the opening and closing tags is what users see as the clickable link.

### Essential Attributes of the Anchor Tag

HTML links primarily use two attributes to do their job:

- **`href` attribute:** This one is the star of the show. It defines the URL (Uniform Resource Locator) the link points to. It's like the address on your map that tells your browser where to go.

  **Example:**

  ```html title="index.html"
  <a href="https://codemastermindhq.vercel.app/">Visit Our Site</a>
  ```

  <BrowserWindow url="http://127.0.0.1:5500/index.html">
    <a href="https://codemastermindhq.vercel.app/">Visit Our Site</a>
  </BrowserWindow>

- **`target` attribute:** This attribute is like the GPS setting for your link. It specifies where to open the linked document. The available options are:
  - `_blank`: Opens the linked document in a new window or tab.
  - `_top`: Opens the document in the full body of the window.
  - `_self`: Opens the document in the same window or tab (default behavior).
  - `_parent`: Opens the linked document in the parent frame.

  **Example:**

  ```html
  <a href="https://codemastermindhq.vercel.app/" target="_blank">
    Visit CMHQ in a new tab
  </a>
  ```

  <BrowserWindow url="http://127.0.0.1:5500/index.html">
    <a href="https://codemastermindhq.vercel.app/" target="_blank">
        Visit CMHQ in a new tab
    </a>
  </BrowserWindow>

### Linking to Specific Page Sections

Have you ever wanted to send your users directly to a specific section of a lengthy webpage? You can do this with HTML links by targeting specific sections. Here's how you can do it:

1. Use the `name` or `id` attribute of the target section.
2. Create a hyperlink with a hash `#` followed by the target `id` or `name`.

**Example**

Imagine you have a lengthy webpage with several sections, and you want to create a link at the top that takes users directly to a specific section further down the page. You can achieve this using HTML links that target specific sections.

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>

  <!-- Link at the top -->
  <a href="#gardening-tips">Go to Gardening Tips</a>

  <!-- Some content -->
  <p>Here is some other content...</p>

  <!-- Gardening Tips Section -->
  <h2 id="gardening-tips">Gardening Tips</h2>
  <p>This section provides tips on how to garden...</p>

</body>
</html>
```

### Link Colors

Typically, links are displayed in various colors, each corresponding to a different state:

- **Active:** Displayed in red and underlined (e.g., <span style={{color:"red"}}>this sentence</span>).
- **Visited:** Appears purple and underlined (e.g., <span style={{color:"purple"}}>this sentence</span>).
- **Unvisited:** Shown as blue and underlined (e.g., <span style={{color:"blue"}}>this sentence</span>).