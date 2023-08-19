---
id: html-interview-day-5
title: HTML Interview Day 5
sidebar_label: Day 5
description: Semantic HTML5, Media Elements, and Accessibility
date: 2023-05-11 16:49:29
sidebar_position: 5

---

```mdx-code-block
import HtmlWindow from '@site/src/components/HtmlWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
import video from './video/mov_bbb.mp4'
import CanvasExample from './CanvasExample'
import LocalStorageExample from './LocalStorageExample'
import LocalStorageExample2 from './LocalStorageExample2'
```


### 1. Describe the HTML5 semantic elements like `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`, etc. 

<details>
    <summary>Answer:</summary>

let's break down the HTML5 semantic elements in simple language with examples:

1. **`<header>`**: This is like the top part of a page, usually containing the logo, main title, and maybe a navigation menu.
   ```html title="index.html"
   <header>
       <h1>My Awesome Website</h1>
       <nav>
           <a href="#">Home</a>
           <a href="#">About</a>
           <a href="#">Contact</a>
       </nav>
   </header>
   ```

   <HtmlWindow>
    <header>
       <h1>My Awesome Website</h1>
       <nav>
           <a href="#">Home</a>
           <a href="#">About</a>
           <a href="#">Contact</a>
       </nav>
   </header>
   </HtmlWindow>

2. **`<nav>`**: It's where your navigation menu goes. It helps users find their way around your website.
   ```html title="index.html"
   <nav>
       <a href="#">Home</a>
       <a href="#">Products</a>
       <a href="#">Services</a>
   </nav>
   ```

   <HtmlWindow>
    <nav>
       <a href="#">Home</a>
       <a href="#">Products</a>
       <a href="#">Services</a>
    </nav>
   </HtmlWindow>

3. **`<article>`**: This is for your main content. It's like a standalone piece that could be shared or understood on its own.
   ```html title="index.html"
   <article>
       <h2>How to Bake the Perfect Cake</h2>
       <p>Here's a step-by-step guide to baking a delicious cake...</p>
   </article>
   ```

   <HtmlWindow>
    <article>
       <h2>How to Bake the Perfect Cake</h2>
       <p>Here's a step-by-step guide to baking a delicious cake...</p>
    </article>
   </HtmlWindow>

4. **`<section>`**: It's like a thematic grouping of content. Think of it as a chapter in a book.
   ```html title="index.html"
   <section>
       <h3>Our Services</h3>
       <p>We offer a variety of services to meet your needs...</p>
   </section>
   ```

   <HtmlWindow>
    <section>
       <h3>Our Services</h3>
       <p>We offer a variety of services to meet your needs...</p>
    </section>
   </HtmlWindow>

5. **`<footer>`**: Just like the footer of a document, it's at the bottom of your page, often with copyright info and links.
   ```html title="index.html"
   <footer>
       <p>&copy; 2023 My Company. All rights reserved.</p>
       <nav>
           <a href="#">Privacy Policy</a>
           <a href="#">Terms of Use</a>
       </nav>
   </footer>
   ```

   <HtmlWindow>
    <footer>
       <p>&copy; 2023 My Company. All rights reserved.</p>
       <nav>
           <a href="#">Privacy Policy</a>
           <a href="#">Terms of Use</a>
       </nav>
    </footer>
   </HtmlWindow>

6. **`<main>`**: This is where your main content lives. It's the most important part of the document.
   ```html title="index.html"
   <main>
       <h1>Welcome to our Website</h1>
       <p>We offer amazing products and services...</p>
   </main>
   ```

   <HtmlWindow>
    <main>
       <h1>Welcome to our Website</h1>
       <p>We offer amazing products and services...</p>
    </main>
   </HtmlWindow>

7. **`<aside>`**: It's for content that's related to the main content but not directly a part of it. Like a sidebar.
   ```html title="index.html"
   <aside>
       <h3>Related Links</h3>
       <ul>
           <li><a href="#">Tips for Success</a></li>
           <li><a href="#">Customer Testimonials</a></li>
       </ul>
   </aside>
   ```

   <HtmlWindow>
     <aside>
         <h3>Related Links</h3>
         <ul>
             <li><a href="#">Tips for Success</a></li>
             <li><a href="#">Customer Testimonials</a></li>
         </ul>
     </aside>
   </HtmlWindow>

:::info
Remember, using these semantic elements not only helps in making your HTML more organized but also improves accessibility and SEO. 
:::

</details>

### 2. How does the `<video>` element work to embed videos in a webpage?

<details>
    <summary>Answer:</summary>

The `<video>` element in HTML is used to embed videos in a webpage. It works like a window through which you can show videos on your website. Here's a simple explanation with an example:

**Explanation:**

Think of the `<video>` element as a special frame on your webpage where you can play videos. You tell it which video to play by specifying the video file's location using the `src` attribute.

**Example:**

Suppose you have a video file named "my-video.mp4" in the same folder as your HTML file. You can use the `<video>` element like this:

```html title="index.html"
<video width="320" height="240" controls>
  <source src="my-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

<HtmlWindow>
<video width="250" height="140" controls>
  <source src={video} type="video/mp4" />
  Your browser does not support the video tag.
</video>
</HtmlWindow>

- `<video>`: This is the video player frame.
- `width` and `height`: These attributes determine the player's size on the webpage.
- `controls`: This attribute adds playback controls like play, pause, and volume.

Inside the `<video>` element, you use the `<source>` element to specify the video file's location and type. In this example, we're using an MP4 video format.

The text "Your browser does not support the video tag." is displayed if the browser can't play the video. It's a good practice to include this message for compatibility.

When someone visits your webpage, they'll see the video player with controls, and they can watch the video by clicking the play button.

</details>

### 3. What is the `<canvas>` element used for in HTML5?

<details>
    <summary>Answer:</summary>

**What is the `<canvas>` element used for in HTML5?**

Think of the `<canvas>` element as a blank canvas on a web page where you can draw pictures, create animations, and build interactive graphics using JavaScript. It's like a digital drawing board that lets you bring your artistic ideas to life on the internet.

**Example: Drawing a Simple Shape**

Imagine you want to draw a colorful square on a webpage. Here's how you could use the `<canvas>` element to achieve that:

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>Canvas Example</title>
</head>
<body>
    <canvas id="myCanvas" width="200" height="200"></canvas>
    
    <script>
        // Get the canvas element
        var canvas = document.getElementById("myCanvas");
        
        // Get the drawing context
        var ctx = canvas.getContext("2d");
        
        // Set the fill color
        ctx.fillStyle = "blue";
        
        // Draw a square
        ctx.fillRect(50, 50, 100, 100);
    </script>
</body>
</html>
```

<HtmlWindow>
    <CanvasExample/>
</HtmlWindow>

In this example, the `<canvas>` element provides a space to draw on. The `getContext("2d")` method gets the drawing context, allowing you to use various drawing functions like `fillRect` to draw shapes. The result is a blue square drawn at coordinates (50, 50) with a width and height of 100 pixels each.

:::tip
The `<canvas>` element is used for dynamic graphics and animations, and it's a powerful tool for creating interactive visual content on the web. It's often used for things like charts, games, and complex animations.
:::

</details>

### 4. Explain the concept of local storage and how it's implemented in HTML5.

<details>
    <summary>Answer:</summary>

**Local Storage in Simple Terms:**
Local storage is like a small storage area within your web browser where a website can keep information even after you close the browser. It's like having a little notebook that the website can use to remember things for you.

**Example:**
Imagine you're using a to-do list app on a website. Every time you add a task, that task is stored in local storage. Even if you close the browser or shut down your computer, the next time you open the app, your to-do list is still there, waiting for you.

Here's how it works:

1. You visit a website and use their to-do list app.
2. You add tasks to your list.
3. The website stores these tasks in your browser's local storage.
4. Later, when you come back to the website, the app looks in local storage and finds your tasks, so you can continue where you left off.

**In Interview Terms:**
Local storage is a way for websites to save small amounts of data on your browser. This data remains even when you close the browser or restart your computer. It's useful for creating persistent experiences, like saving user preferences or maintaining state between sessions.

Local storage is implemented in HTML5 using a feature called the `localStorage` object. Here's a quick example of how you might use it:

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>Local Storage Example</title>
</head>
<body>
    <h1>Local Storage Example</h1>
    <input type="text" id="taskInput" placeholder="Enter a task">
    <button onclick="addTask()">Add Task</button>

    <ul id="taskList"></ul>

    <script>
        function addTask() {
            let taskInput = document.getElementById('taskInput');
            let taskList = document.getElementById('taskList');
            let task = taskInput.value;

            // Store the task in local storage
            localStorage.setItem('task_' + Date.now(), task);

            // Update the task list
            let li = document.createElement('li');
            li.textContent = task;
            taskList.appendChild(li);

            taskInput.value = ''; // Clear the input
        }
    </script>
</body>
</html>
```

<HtmlWindow>
<LocalStorageExample />
</HtmlWindow>

In this example, every time you add a task, it's stored in local storage along with a unique identifier. When you refresh the page or come back later, the tasks are still there because they're saved in local storage.

:::tip
Remember, local storage has a size limit (usually around 5-10 MB) and should be used for smaller amounts of data, like user preferences, settings, or simple lists.
:::

</details>
