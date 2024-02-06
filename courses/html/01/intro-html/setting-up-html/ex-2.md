---
id: creating-your-first-html-file
title: Creating your first HTML file
sidebar_label: First HTML file
tags: [html, web development, html file, web page, text editor, visual studio code, live server, browser]
sidebar_position: 2
---

```mdx-code-block
import Browser from '@site/src/components/BrowserWindow';
```

In this section, we'll create our very first HTML file from scratch. Don't worry if you're new to this – we'll guide you through the process step by step!

### What is an HTML File?

An HTML file is a text file that contains the code for a web page. It's written in HTML (Hypertext Markup Language) and can be viewed in a web browser. HTML files are the building blocks of every web page on the internet.

### Creating an HTML File

To create an HTML file, you can use any text editor or Integrated Development Environment (IDE) of your choice. Here's we'll use Visual Studio Code, a popular text editor for web development.

#### Step 1: Open Visual Studio Code

If you haven't installed Visual Studio Code yet, you can download it from the [official website](https://code.visualstudio.com/). Once installed, open Visual Studio Code from your applications or programs list.

#### Step 2: Create a New File

In Visual Studio Code, click on "File" in the top menu and select "New File" to create a new file. You can also use the keyboard shortcut `Ctrl + N` (Windows/Linux) or `Cmd + N` (Mac).

#### Step 3: Save the File

Save the new file with the name `index.html`. The `.html` extension indicates that this is an HTML file. You can save it in a folder of your choice, such as a dedicated folder for your web development projects.

#### Step 4: Write HTML Code

Now, you can start writing your HTML code in the new file. Here's a simple example to get you started:

```html title="index.html"
<!doctype html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>

  <body>
    <h1>Welcome to My Web Page</h1>
    <p>
      This is my first HTML file. I'm excited to learn more about web
      development!
    </p>
  </body>
</html>
```

#### Step 5: Now install the Live Server extension in Visual Studio Code

Click on the Extensions view in Visual Studio Code and search for "Live Server". Install the extension and reload the editor if prompted.

#### Step 6: Start the Live Server

Right-click anywhere in the HTML file and select "Open with Live Server". This will open your HTML file in a new browser window and automatically refresh the page whenever you make changes to the HTML file.

#### Step 7: View Your on Browser

You should now see your HTML file displayed in the browser. 

<Browser url="http://127.0.0.1:5500/">
    <h1>Welcome to My Web Page</h1>
  <p>This is my first HTML file. I'm excited to learn more about web development!</p>
</Browser>

Congratulations – you've created your very first HTML file and viewed it in a web browser!

In the next section, we'll dive deeper into the structure of an HTML file and learn about the essential components that make up a web page. Get ready to explore the world of HTML coding! 
