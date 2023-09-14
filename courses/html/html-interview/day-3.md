---
id: html-interview-day-3
title: HTML Interview Day 3
sidebar_label: Day-3
description: HTML Interview Mastery All Concepts Cleared
date: 2023-05-11 16:49:29
sidebar_position: 3
---

```mdx-code-block
import HtmlWindow from '@site/src/components/HtmlWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
import ManCanvas from './ManCanvas'
```

### 31. Explain the difference between the "GET" and "POST" methods in form submission.

<details>
    <summary>Answer:</summary>

The main differences between the "GET" and "POST" methods in form submission:

| Aspect               | GET                                   | POST                                   |
|:--------------------:|:-------------------------------------:|:--------------------------------------:|
| **Data in URL**      | Appends data to the URL as query parameters. | Does not append data to the URL.       |
| **Data Security**    | Less secure as data is visible in the URL. | More secure as data is not visible in the URL. |
| **Data Length**      | Limited by the maximum URL length (usually 2048 characters). | Not limited by URL length; suitable for large data. |
| **Caching**          | Data can be cached by browsers and proxy servers. | Data is not cached by browsers or proxy servers. |
| **Idempotent**       | Generally considered idempotent (repeating the request has the same effect). | Not necessarily idempotent; may have side effects on repeated requests. |
| **Data Types**       | Suitable for retrieving data from the server (e.g., search queries). | Suitable for sending data to the server (e.g., form submissions). |
| **Bookmarks**        | Data can be bookmarked and shared as it's part of the URL. | Not suitable for bookmarking or sharing data as it's not in the URL. |
| **Use Cases**        | Typically used for read-only operations like searching and filtering. | Typically used for data submission, login forms, and other actions that modify server data. |

These are the key differences between the "GET" and "POST" methods in form submission. The choice between them depends on the specific requirements of your web application and the type of data you are handling.

</details>

### 32. What are the new input types introduced in HTML5 for form elements?

<details>
    <summary>Answer:</summary>

In HTML5, several new input types were introduced to enhance form elements and provide more specific input options. Since you're interested in web development and web technologies, here are some of the new input types introduced in HTML5:

1. **Email:** `<input type="email">` is used for entering email addresses. It includes built-in validation to ensure that the entered text is in a valid email format.

    ```html title="index.html"
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    ```

    <HtmlWindow>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />
    </HtmlWindow>

2. **URL:** `<input type="url">` is used for entering website URLs. It also includes validation to check if the URL is correctly formatted.

    ```html title="index.html"
    <label for="website">Website URL:</label>
    <input type="url" id="website" name="website" required>
    ```

    <HtmlWindow>
    <label for="website">Website URL:</label>
    <input type="url" id="website" name="website" required />
    </HtmlWindow>

3. **Tel:** `<input type="tel">` is used for entering telephone numbers. This input type is particularly useful for mobile devices, as it can trigger the appropriate keyboard layout for phone numbers.

    ```html title="index.html"
    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" required>
    ```

    <HtmlWindow>
    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" required />
    </HtmlWindow>

4. **Date:** `<input type="date">` allows users to select a date from a date picker. It's especially useful for date-related input fields.

    ```html title="index.html"
    <label for="birthdate">Birthdate:</label>
    <input type="date" id="birthdate" name="birthdate">
    ```

    <HtmlWindow>
    <label for="birthdate">Birthdate:</label>
    <input type="date" id="birthdate" name="birthdate" />
    </HtmlWindow>

5. **Time:** `<input type="time">` is used for entering a time in hours and minutes, and it can include a time picker for easier input.

    ```html title="index.html"
    <label for="appointment">Appointment Time:</label>
    <input type="time" id="appointment" name="appointment">
    ```

    <HtmlWindow>
    <label for="appointment">Appointment Time:</label>
    <input type="time" id="appointment" name="appointment" />
    </HtmlWindow>

6. **Number:** `<input type="number">` is used for numeric input. It can also include attributes like `min` and `max` to define allowable ranges.

    ```html title="index.html"
    <label for="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" max="100" step="1">
    ```

    <HtmlWindow>
    <label for="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" max="100" step="1" />
    </HtmlWindow>

7. **Range:** `<input type="range">` creates a slider input that allows users to select a value within a specified range. It's often used for settings and preferences.

    ```html title="index.html"
    <label for="volume">Volume:</label>
    <input type="range" id="volume" name="volume" min="0" max="10">
    ```

    <HtmlWindow>
    <label for="volume">Volume:</label>
    <input type="range" id="volume" name="volume" min="0" max="10" />
    </HtmlWindow>

8. **Color:** `<input type="color">` provides a color picker for selecting colors. It's handy for situations where you need users to choose a specific color.

    ```html title="index.html"
    <label for="color">Select a Color:</label>
    <input type="color" id="color" name="color" value="#ff0000">
    ```

    <HtmlWindow>
    <label for="color">Select a Color:</label>
    <input type="color" id="color" name="color" value="#ff0000" />
    </HtmlWindow>

9.  **Search:** `<input type="search">` is used for search input fields. It can include a clear button to reset the field easily.

    ```html title="index.html"
    <label for="search">Search:</label>
    <input type="search" id="search" name="search">
    ```

    <HtmlWindow>
    <label for="search">Search:</label>
    <input type="search" id="search" name="search" />
    </HtmlWindow>

10. **File:** `<input type="file">` is used for uploading files. Users can browse their device to select a file for submission.

    ```html title="index.html"
    <label for="file">Upload a File:</label>
    <input type="file" id="file" name="file">
    ```

    <HtmlWindow>
    <label for="file">Upload a File:</label>
    <input type="file" id="file" name="file" />
    </HtmlWindow>

These input types make it easier to collect specific types of data from users and provide a better user experience by offering appropriate input controls and validation. When working with these input types, it's essential to consider browser compatibility and provide fallbacks for older browsers that may not support them fully.

</details>

### 33. Describe the HTML5 semantic elements like `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`, etc.

<details>
    <summary>Answer:</summary>

HTML5 introduced a set of semantic elements that help define the structure and meaning of web documents. Here's a brief description of some of these elements along with their corresponding HTML code:

**1. `<header>`:**
   - The `<header>` element represents the introductory content at the top of a section or a page.
   - It often contains the website's logo, site title, and navigation links.
   
   ```html title="index.html"
   <header>
       <h1>My Website</h1>
       <nav>
           <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Contact</a></li>
           </ul>
       </nav>
   </header>
   ```

   <HtmlWindow>
   <header>
       <h1>My Website</h1>
       <nav>
           <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Contact</a></li>
           </ul>
       </nav>
   </header>
   </HtmlWindow>

**2. `<nav>`:**
   - The `<nav>` element is used to define a section of navigation links.
   
   ```html title="index.html"
   <nav>
       <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">Products</a></li>
           <li><a href="#">Services</a></li>
       </ul>
   </nav>
   ```

   <HtmlWindow>
   <nav>
       <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">Products</a></li>
           <li><a href="#">Services</a></li>
       </ul>
   </nav>
   </HtmlWindow>

**3. `<article>`:**
   - The `<article>` element represents a self-contained composition within a document, such as a blog post, news article, or forum post.
   
   ```html title="index.html"
   <article>
       <h2>Article Title</h2>
       <p>Content of the article goes here.</p>
   </article>
   ```

   <HtmlWindow>
   <article>
       <h2>Article Title</h2>
       <p>Content of the article goes here.</p>
   </article>
   </HtmlWindow>

**4. `<section>`:**
   - The `<section>` element defines a thematic grouping of content within a document.
   
   ```html title="index.html"
   <section>
       <h2>Section Title</h2>
       <p>Section content goes here.</p>
   </section>
   ```

   <HtmlWindow>
   <section>
       <h2>Section Title</h2>
       <p>Section content goes here.</p>
   </section>
   </HtmlWindow>

**5. `<footer>`:**
   - The `<footer>` element represents the footer or the closing section of a document or a section.
   - It often contains copyright information, contact details, or additional navigation links.
   
   ```html title="index.html"
   <footer>
       <p>&copy; 2023 CMHQ</p>
       <address>Contact: <a href="mailto:codemastermindhq@gmail.com">codemastermindhq@gmail.com</a></address>
   </footer>
   ```

   <HtmlWindow>
   <footer>
       <p>&copy; 2023 CMHQ</p>
       <address>Contact: <a href="mailto:codemastermindhq@gmail.com">codemastermindhq@gmail.com</a></address>
   </footer>
   </HtmlWindow>

These semantic elements provide more meaningful structure to your web pages, making them easier to understand for both developers and assistive technologies like screen readers. They also play a role in SEO and can improve the accessibility and usability of your website.

</details>

### 34. How does the `<video>` element work to embed videos in a webpage?

<details>
    <summary>Answer:</summary>

The `<video>` element is a fundamental part of HTML5 and is used to embed videos in a webpage. It allows you to display video content directly within your web page without relying on third-party plugins like Adobe Flash. Here's a basic overview of how the `<video>` element works:

1. **Opening and Closing Tags**: To use the `<video>` element, you need to include an opening `<video>` tag and a closing `</video>` tag. Between these tags, you specify the video source and set various attributes.

2. **Video Source**: The most critical attribute is the `src` attribute, which specifies the source URL of the video file you want to embed. This can be a local file or a remote URL.

    ```html title="index.html"
    <video src="/video/mov_bbb.mp4"></video>
    ```

    <HtmlWindow> <video src="/video/mov_bbb.mp4"></video> </HtmlWindow>

3. **Fallback Content**: It's a good practice to provide fallback content between the opening and closing tags. This content will be displayed in case the browser doesn't support the `<video>` element or cannot play the specified video. This is done by placing text or other HTML elements within the `<video>` element.

    ```html title="index.html"
    <video src="/video/mov_bbb.mp4">
      Your browser does not support the video tag.
    </video>
    ```

    <HtmlWindow>
    <video src="/video/mov_bbb.mp4">
      Your browser does not support the video tag.
    </video>
    </HtmlWindow>

4. **Attributes**: There are various attributes you can use to control the behavior of the `<video>` element. Some commonly used attributes include:
   - `controls`: When added, this attribute displays video controls like play, pause, and volume.
   - `autoplay`: When added, the video will start playing automatically when the page loads.
   - `loop`: If set, the video will loop continuously.
   - `poster`: Specifies an image to be displayed as the video's poster frame before it starts playing.

   ```html title="index.html"
   <video src="/video/mov_bbb.mp4" controls autoplay loop poster="/img/video-poster.jpg">
     Your browser does not support the video tag.
   </video>
   ```

   <HtmlWindow>
   <video src="/video/mov_bbb.mp4" controls autoplay loop poster="/img/video-poster.jpg">
     Your browser does not support the video tag.
   </video>
   </HtmlWindow>

5. **Multiple Sources**: To ensure compatibility with different browsers and formats, you can provide multiple source elements within the `<video>` element using the `<source>` element. Browsers will choose the first compatible source.

    ```html title="index.html"
    <video controls>
      <source src="/video/mov_bbb.mp4" type="video/mp4">  
      <source src="video.webm" type="video/webm">    
      Your browser does not support the video tag.
    </video>
    ```

    <HtmlWindow>
    <video controls>
      <source src="/video/mov_bbb.mp4" type="video/mp4" />
      <source src="video.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
    </HtmlWindow>

6. **Responsive Sizing**: You can use CSS to control the size of the video element to make it responsive to different screen sizes.

    ```css title="style.css"
    video {
      width: 100%;
      height: auto;
    }
    ```

In summary, the `<video>` element is a versatile tool for embedding videos in webpages. It allows you to specify video sources, set attributes for playback behavior, and provide fallback content for compatibility. You can further enhance the user experience by using JavaScript to add custom functionality to your video player.

</details>

### 35. What is the `<canvas>` element used for in HTML5?

<details>

   <summary>Answer:</summary>

   The `<canvas>` element in HTML5 is used for drawing graphics and creating dynamic, interactive content on a web page. You can use JavaScript to draw shapes, text, images, and animations within a `<canvas>` element. Here's a basic example of how to create a simple drawing using the `<canvas>` element and JavaScript:

   ```html title="index.html"
   <!DOCTYPE html>
    <html>
    <head>
        <title>Man Drawing</title>        
    </head>
    <body>
        <canvas id="manCanvas" width="200" height="300"></canvas>

        <script>
            var canvas = document.getElementById("manCanvas");
            var ctx = canvas.getContext("2d");

            // Head
            ctx.beginPath();
            ctx.arc(150, 100, 30, 0, Math.PI * 2);
            ctx.fillStyle = "lightblue";
            ctx.fill();
            ctx.closePath();

            // Body
            ctx.beginPath();
            ctx.moveTo(150, 130);
            ctx.lineTo(150, 250);
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.closePath();

            // Arms
            ctx.beginPath();
            ctx.moveTo(150, 150);
            ctx.lineTo(100, 200);
            ctx.moveTo(150, 150);
            ctx.lineTo(200, 200);
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.closePath();

            // Legs
            ctx.beginPath();
            ctx.moveTo(150, 250);
            ctx.lineTo(100, 320);
            ctx.moveTo(150, 250);
            ctx.lineTo(200, 320);
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.closePath();
        </script>
    </body>
    </html>
   ```
      
   <HtmlWindow> 
    <ManCanvas />     
   </HtmlWindow>

   ***In this example:***

   1. We create an HTML5 canvas element and set its size to 200x300 pixels.
   2. We use JavaScript to access the canvas and its 2D drawing context.
   3. We draw a simple stick figure representing a man using basic canvas drawing functions. We draw the head, body, arms, and legs.

</details>

### 36. Explain the concept of local storage and how it's implemented in HTML5.

<details>
    <summary>Answer:</summary>
</details>

### 37. Why is accessibility important in web development?

<details>
    <summary>Answer:</summary>
</details>

### 38. How can you make a webpage more accessible?

<details>
    <summary>Answer:</summary>
</details>

### 39. Describe the role of the alt attribute in the `<img>` element for accessibility.

<details>
    <summary>Answer:</summary>
</details>

### 40. How can you improve SEO by using HTML elements and attributes?

<details>
    <summary>Answer:</summary>
</details>

### 41. What is the purpose of the `<iframe>` element?

<details>
    <summary>Answer:</summary>
</details>

### 42. Explain the concept of iframes and their use cases.

<details>
    <summary>Answer:</summary>
</details>

### 43. How can you include external CSS and JavaScript files in an HTML document?

<details>
    <summary>Answer:</summary>
</details>

### 44. What is the difference between a relative path and an absolute path when linking resources?

<details>
    <summary>Answer:</summary>
</details>

### 45. Explain the Geolocation API in HTML5 and its use cases.

<details>
    <summary>Answer:</summary>
</details>
