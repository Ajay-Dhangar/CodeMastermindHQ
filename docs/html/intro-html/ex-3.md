---
id: html-code-editor
title: HTML Code Editor Installation
sidebar_label: Code Editor
sidebar_position: 3
date: 2021-02-25 11:08:29
description: Welcome to HTML mastery tutorials!
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

![HTML Code Editor](./img/Learn-HTML.jpeg)

Before diving into HTML coding, it's essential to set up a reliable code editor. A code editor simplifies the process of writing, editing, and organizing your HTML code. Various code editors are available, but one of the most popular and versatile choices is Visual Studio Code (VS Code). Follow the steps below to install it on your system:

1. Visit the official Visual Studio Code website at https://code.visualstudio.com/.
2. Download the installer suitable for your operating system (Windows, macOS, or Linux).
3. Once the download is complete, run the installer and follow the installation instructions provided by the setup wizard.
4. After successful installation, launch Visual Studio Code to start creating and editing your HTML files.

## Prerequisites to Learning HTML

Before you start learning HTML, it's beneficial to have a basic understanding of the following concepts:

1. Familiarity with using a computer and basic software applications.
2. Understanding how web pages work and basic internet browsing skills.
3. A fundamental understanding of text editing and basic coding concepts.
4. A keen interest in learning the structure and syntax of HTML.

## Tools Needed to Make an HTML Page

To create an HTML page effectively, you'll need the following tools:

1. A reliable code editor, such as Visual Studio Code, for writing and editing HTML code.
2. A web browser, like Google Chrome, Mozilla Firefox, or Safari, for viewing and testing your HTML web pages.
3. Optional: a live server extension for real-time preview and debugging of your HTML code.

## Installation & Setup of Visual Studio Code for HTML

<video controls width="100%">
  <source src="/video/download-vscode.mp4" type="video/mp4" />
</video>

**Follow these steps to set up Visual Studio Code for HTML development:**

1. Open Visual Studio Code after installation.
2. Install the necessary extensions for HTML development. Go to the Extensions sidebar (Ctrl+Shift+X or Cmd+Shift+X) and search for the "HTML" extension. Install it to enable HTML language support.
3. Optionally, you can install the "Live Server" extension for real-time previewing of your HTML web pages. Search for the "Live Server" extension and install it to enable the live server feature.
4. Configure the Visual Studio Code settings to customize your coding environment according to your preferences.

## What is the Live Server Extension?

The "Live Server" extension is a Visual Studio Code extension that allows you to launch a local development server to preview your web pages in real-time. It eliminates the need to manually refresh your browser whenever you make changes to your HTML, CSS, or JavaScript files. With "Live Server," you can see the updates instantly without leaving your code editor.

### How to Install the Live Server Extension

To install the "Live Server" extension, follow these steps:

1. Open Visual Studio Code.
2. Go to the Extensions sidebar by clicking the square icon on the sidebar or pressing Ctrl+Shift+X (or Cmd+Shift+X on macOS).
3. In the search bar at the top, type "Live Server."
4. The "Live Server" extension by Ritwick Dey should appear in the search results. Click the "Install" button to install the extension.

<video controls width="100%">
  <source src="/video/live-server-installation.mp4" type="video/mp4" />
</video>

### How to Use the Live Server Extension

Once you've installed the "Live Server" extension, you can use it to launch a live server for your HTML files:

1. Open the HTML file you want to work on in Visual Studio Code.
2. Right-click anywhere in the HTML file or use the shortcut menu (right-click), and you'll see an option to "Open with Live Server." Click on it.
3. Visual Studio Code will open a new browser window or tab, displaying your HTML file. Any changes you make to your HTML, CSS, or JavaScript files will be automatically reflected in the browser without the need to manually refresh the page.
4. To stop the live server, you can click the "Go Live" button at the bottom right of the Visual Studio Code window or right-click the HTML file and select "Stop Live Server."

![Use the Live Server Extension](./img/vs-code.gif)

## Creating Your First Website for Verification Setup

Now that you have set up your HTML code editor, you can create your first HTML website. Follow these steps to create a simple HTML page:

1. Open Visual Studio Code and create a new file with the ".html" extension (ex. `index.html`).
2. Write the basic HTML structure, including the `<!DOCTYPE>` declaration, `<html>`, `<head>`, and `<body>` tags.
3. Add some content within the `<body>` tags, such as headings, paragraphs, and images, to build your web page.
4. Save the file with an appropriate name and the ".html" extension.
5. Launch the live server extension if you installed it, and open your HTML file in a web browser to verify the setup.

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>My First Website</title>
</head>
<body>
    <h1>Welcome to My First Website</h1>
    <p>This is a paragraph of text on my first web page.</p>
</body>
</html>
```

<BrowserWindow url="http://127.0.0.1:5500/index.html">
    <h1>Welcome to My First Website</h1>
    <p>This is a paragraph of text on my first web page.</p>
</BrowserWindow>


By following these steps, you'll have a solid foundation for creating and editing HTML web pages using Visual Studio Code. With the live server extension, you can instantly see the changes you make in your HTML code, making the development process more efficient and productive.