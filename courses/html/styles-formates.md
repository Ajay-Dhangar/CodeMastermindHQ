---
id: html-styles-formeting
title: Styles and Formatting
date: 2023-07-05 16:49:29
sidebar_position: 8
tags: [HTML styles and formatting, CSS styling techniques, Inline styles, Internal stylesheets, External stylesheets, Text formatting in HTML, Font sizes and colors, Background colors in CSS, CSS syntax and usage, CSS properties for styling text]
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

In this module, you will learn about the basics of styling and formatting in HTML. Understanding how to use styles and formats will allow you to enhance the appearance of your web pages and make them more visually appealing.

## 1. Introduction to Styles

Styles are used to control the presentation and layout of HTML elements. By using styles, you can change the color, size, font, and positioning of elements on your web page. Styles are applied using CSS (Cascading Style Sheets).

### Explanation:

CSS stands for Cascading Style Sheets. It is a style sheet language used to define the presentation and layout of HTML documents. By separating the style from the content, you can create consistent and visually appealing designs for your web pages.

**Example:**
```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>Introduction to Styles</title>
    <style>
        h1 {
            color: blue;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <h1>Welcome to HTML Mastery!</h1>
    <p>This is an example paragraph.</p>
</body>
</html>
```

<BrowserWindow>
        <body>
            <h1 style={{color: "blue", fontSize: "18px"}}>Welcome to HTML Mastery!</h1>
            <p>This is an example paragraph.</p>
        </body>
  </BrowserWindow>

## 2. Inline Styles

Inline styles allow you to apply styles directly to an individual HTML element using the `style` attribute.

### Explanation:

The `style` attribute is used to add inline CSS styles to an HTML element. It is not recommended for extensive use, as it mixes style with content and can make the code harder to maintain. However, it's a quick way to apply styles to individual elements.

**Example:**
```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>Inline Styles</title>
</head>
<body>
    <h1 style="color: blue; font-size: 24px;">Welcome to HTML Mastery!</h1>
    <p style="color: green;">This is an example paragraph.</p>
</body>
</html>
```

<BrowserWindow>
        <body>
            <h1 style={{color: "blue", fontSize: "24px"}}>Welcome to HTML Mastery!</h1>
            <p style={{color: "green"}}>This is an example paragraph.</p>
        </body>
  </BrowserWindow>

## 3. Internal Styles

Internal styles are defined within the `<style>` element in the `<head>` section of your HTML document. They apply to the entire page.

### Explanation:

Internal styles are useful when you want to apply styles to multiple elements on the same page. By defining styles in the `<head>` section, you can keep the styles separate from the content, making your HTML code more organized.

**Example:**
```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>Internal Styles</title>
    <style>
        h1 {
            color: blue;
            font-size: 24px;
        }

        p {
            color: green;
        }
    </style>
</head>
<body>
    <h1>Welcome to HTML Mastery!</h1>
    <p>This is an example paragraph.</p>
</body>
</html>
```

<BrowserWindow>
        <body>
            <h1 style={{color: "blue", fontSize: "24px"}}>Welcome to HTML Mastery!</h1>
            <p style={{color: "green"}}>This is an example paragraph.</p>
        </body>
  </BrowserWindow>


## 4. External Styles

External styles are placed in a separate CSS file and linked to the HTML document using the `<link>` element.

### Explanation:

External styles are the recommended way to apply styles to your web pages. By keeping the styles in a separate CSS file, you can reuse the same styles across multiple pages, leading to easier maintenance and faster loading times.

**Example:**

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>External Styles</title>
    <link rel="stylesheet" type="text/css" href="./styles.css">
</head>
<body>
    <h1>Welcome to HTML Mastery!</h1>
    <p>This is an example paragraph.</p>
</body>
</html>
```

```css title="styles.css"
h1 {
    color: blue;
    font-size: 24px;
}

p {
    color: green;
}
```
<BrowserWindow>
        <body>
            <h1 style={{color: "blue", fontSize: "24px"}}>Welcome to HTML Mastery!</h1>
            <p style={{color: "green"}}>This is an example paragraph.</p>
        </body>
  </BrowserWindow>


## 5. Selectors

Selectors are patterns used to select HTML elements to which styles should be applied.

### Explanation:

Selectors in CSS allow you to target specific HTML elements for styling. They can be based on element names, classes, IDs, and more, giving you precise control over the appearance of your web page.

**Example:**
```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>Selectors</title>
    <style>
        h1 {
            color: blue;
            font-size: 24px;
        }

        .highlight {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <h1>Welcome to <span class="highlight">HTML Mastery!</span></h1>
    <p>This is an example paragraph.</p>
</body>
</html>
```

<BrowserWindow>
        <body>
            <h1 style={{color: "blue", fontSize: "24px"}}>Welcome to <span style={{backgroundColor: "yellow"}}>HTML Mastery!</span></h1>
            <p>This is an example paragraph.</p>
        </body>
  </BrowserWindow>

## 6. Commonly Used Styles

Here are some commonly used styles:

- Font properties: Changing font size, color, and family.
- Background properties: Setting background color or image.
- Padding and margin: Adjusting spacing around elements.
- Border properties: Adding borders around elements.

### Explanation:

These styles are frequently used to improve the layout and visual presentation of web pages. Learning how to apply them will give you a solid foundation in web design.

## Formatting

### Formatting Text
- Bold: Use the `font-weight` property to make text bold.
  ```css title="styles.css"
  h1 {
    font-weight: bold;
  }
  ```
- Italic: Use the `font-style` property to make text italic.
  ```css
  p {
    font-style: italic;
  }
  ```
- Underline: Use the `text-decoration` property to underline text.
  ```css
  a {
    text-decoration: none;
  }
  ```

### Changing Font Sizes and Colors:
- Font Size: Use the `font-size` property to specify the size of the font.
  ```css title="styles.css"
  h1 {
    font-size: 24px;
  }
  ```
- Font Color: Use the `color` property to set the text color.
  ```css
  p {
    color: blue;
  }
  ```

### Background Colors:
- Use the `background-color` property to set the background color of an element.
  ```css
  body {
    background-color: #f0f0f0;
  }
  ```
- The value can be specified using color names, hexadecimal, RGB, or HSL values.

## Interview questions

1. **What is CSS and what is its role in web development?**
   - CSS stands for Cascading Style Sheets. It is a style sheet language used to describe the presentation of a document written in HTML. CSS separates the style and formatting of a webpage from its structure and content. It allows developers to apply consistent styles across multiple pages, making it easier to maintain and update the appearance of a website.

2. **What are the different types of CSS styles?**
   - There are three types of CSS styles:
     - **Inline Styles:** Styles applied directly within HTML tags using the `style` attribute.
     - **Internal Stylesheets:** Styles defined within the `<style>` tags in the `<head>` section of an HTML document.
     - **External Stylesheets:** Styles defined in a separate CSS file and linked to the HTML document using the `<link>` tag.

3. **How do you change the font size and color of text using CSS?**
   - To change the font size, you can use the `font-size` property in CSS and specify a value such as pixels (`px`), points (`pt`), or relative units (`em` or `%`). For example: `font-size: 16px;`.
   - To change the font color, you can use the `color` property and specify a color value using keywords (e.g., `red`, `blue`) or hexadecimal color codes (e.g., `#ff0000` for red).

4. **How can you apply different background colors to HTML elements?**
   - You can use the `background-color` property in CSS to apply background colors to HTML elements. You can specify a color value using keywords (e.g., `yellow`, `green`) or hexadecimal color codes (e.g., `#ffff00` for yellow). For example: `background-color: yellow;`.

5. **Explain the concept of class selectors in CSS.**
   - Class selectors allow you to apply a specific style to one or more HTML elements by defining a class name and applying it to the desired elements using the `class` attribute. Class selectors start with a dot (`.`) followed by the class name. For example, if you define a class named "highlight" in your CSS, you can apply it to elements like `<p class="highlight">...</p>`. This way, you can target specific elements and apply specific styles to them.


