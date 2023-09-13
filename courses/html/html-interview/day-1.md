---
id: html-interview-day-1
title: HTML Interview Day 1
sidebar_label: Day-1
description: HTML Interview Mastery All Concepts Cleared
date: 2023-05-11 16:49:29
sidebar_position: 1
---

```mdx-code-block
import HtmlWindow from '@site/src/components/HtmlWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

### 1. What is HTML? What does it stand for?

<details>
    <summary>Answer:</summary>

HTML stands for HyperText Markup Language. It is the standard markup language used for creating and structuring content on the World Wide Web. HTML uses a system of tags and attributes to define the structure and layout of web pages, including text, images, links, forms, and other elements. Web developers use HTML to create the basic structure of web pages, and it is an essential technology in web development. 

:::tip
**HyperText:**
- HyperText refers to text that contains links (hypertext links) to other documents or resources.
- It allows users to navigate between different pieces of information by clicking on links.
- HyperText is the foundation of the World Wide Web, enabling interconnected web pages.

**Markup Language:**
- A Markup Language is a way to add structure and formatting to plain text.
- It uses tags or special symbols to define how elements should be displayed or interpreted.
- Markup languages are used to create documents with structured content, such as HTML for web pages.
- They help computers and browsers understand how to present information to users.
:::

</details>

### 2. What is the purpose of HTML?

<details>
    <summary>Answer:</summary>

The purpose of HTML (Hypertext Markup Language) is directly related to web development and web technology, which aligns with your user profile.

HTML serves as the standard markup language used to create the structure and content of web pages. Its primary purposes are:

1. **Structuring Content:** HTML defines the structure of a web page, including headings, paragraphs, lists, tables, and more. It uses elements like `<h1>`, `<p>`, `<ul>`, and `<table>` to organize and format content.

2. **Semantic Markup:** HTML provides semantic elements that convey the meaning of content to both browsers and developers. Elements like `<header>`, `<nav>`, `<article>`, and `<footer>` help define the purpose of different sections of a web page, improving accessibility and SEO.

3. **Linking:** HTML allows you to create hyperlinks using the `<a>` element. These links enable navigation between different web pages, both within the same website and to external resources.

4. **Multimedia Integration:** HTML supports the embedding of various media types, such as images, audio, and video, using elements like `<img>`, `<audio>`, and `<video>`.

5. **Forms:** HTML provides form elements like `<form>`, `<input>`, `<textarea>`, and `<button>` for collecting user input and facilitating interactions, such as submitting data.

6. **Compatibility:** HTML is understood by web browsers, ensuring that web content can be displayed consistently across different platforms and devices.

In essence, HTML forms the backbone of web development, allowing developers to create structured, interactive, and accessible web content that can be displayed on the internet.

</details>

### 3. Explain the structure of an HTML document.

<details>
    <summary>Answer:</summary>

HTML (Hypertext Markup Language) document serves as the foundation for web pages. It defines the structure and content of a webpage. 

Here's an overview of the basic structure of an HTML document:

1. `<!DOCTYPE>` declaration: This is the very first line of an HTML document and specifies the document type and version of HTML being used. For example:

   ```html title="index.html"
   <!DOCTYPE html>
   ```

   In modern web development, it's common to use `<!DOCTYPE html>` to indicate the use of HTML5.

2. `<html>` element: The entire HTML document is enclosed within the `<html>` element. It acts as the root element and contains all other elements on the page. It typically has two child elements:

   - `<head>`: This section contains meta-information about the document, such as the page title, character encoding, linked stylesheets, and scripts. It doesn't display any visible content on the webpage.

   - `<body>`: This section contains the visible content of the webpage, including text, images, links, forms, and other elements that users interact with.

   Here's an example:

   ```html title="index.html"
   <html>
     <head>
       <!-- meta tags, title, stylesheets, and scripts go here -->
     </head>
     <body>
       <!-- content visible on the webpage goes here -->
     </body>
   </html>
   ```

3. `<head>` section: As mentioned earlier, the `<head>` section contains meta-information and links to external resources. Some common elements within the `<head>` section include:

   - `<meta>`: Defines metadata like character encoding and authorship.
   - `<title>`: Sets the title of the webpage displayed in the browser's tab.
   - `<link>`: Links to external stylesheets (CSS).
   - `<script>`: Includes JavaScript code or references to external JavaScript files.
   - Other metadata elements and links as needed.

4. `<body>` section: This is where you place the content that users see and interact with. It consists of various HTML elements, such as:

   - Headings (`<h1>`, `<h2>`, etc.): Used for titles and subtitles.
   - Paragraphs (`<p>`): Used for text content.
   - Images (`<img>`): Display images.
   - Links (`<a>`): Create hyperlinks to other web pages.
   - Lists (`<ul>`, `<ol>`, `<li>`): Organize content into lists.
   - Forms (`<form>`): Collect user input.

Here's a simplified example of an HTML document:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Sample Web Page</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Welcome to My Web Page</h1>
    <p>This is a simple example of an HTML document.</p>
    <a href="https://github.com/Ajay-Dhangar">Visit My GitHub Profile</a>
  </body>
</html>
```

<HtmlWindow>
    <body>
      <h1>Welcome to My Web Page</h1>
      <p>This is a simple example of an HTML document.</p>
      <a href="https://github.com/Ajay-Dhangar">Visit My GitHub Profile</a>
     </body>
</HtmlWindow>

</details>

### 4. What are HTML elements, Attributes and tags?

<details>
    <summary>Answer:</summary>

![elements, Attributes and tags](img/html-syntax.png)

1. **HTML Elements**:
   - HTML elements are the fundamental building blocks of web pages.
   - They define the structure and content of a web page.
   - Examples of HTML elements include headings (`<h1>`, `<h2>`), paragraphs (`<p>`), images (`<img>`), links (`<a>`), lists (`<ul>`, `<ol>`), and more.
   - Elements are usually enclosed within HTML tags.

2. **HTML Tags**:
   - HTML tags are used to define and enclose HTML elements.
   - Tags are written using angle brackets `< >`.
   - There are two types of tags: opening tags and closing tags.
   - Opening tags mark the beginning of an element, and closing tags mark the end.
   - Example: `<p>` is an opening tag for a paragraph element, and `</p>` is the closing tag for the same paragraph element.

3. **Attributes**:
   - HTML attributes provide additional information about an HTML element.
   - They are always found within the opening tag of an element.
   - Attributes are written as name-value pairs, separated by an equal sign (`=`).
   - Attributes modify an element's behavior or provide extra details about it.
   - Example: In `<a href="https://github.com">`, the `href` attribute specifies the hyperlink's URL.

Here's a simple example combining all three:

```html
<a href="https://github.com" title="Visit github">Click here</a>
```

In this example:
- `<a>` is the opening tag for a hyperlink element.
- `</a>` is the closing tag for the hyperlink element.
- `href` and `title` are attributes providing the URL and a tooltip text for the link, respectively.

HTML elements, tags, and attributes work together to structure and define the content of a web page, making it display correctly in web browsers.

</details>

### 5. What is the purpose of the `<DOCTYPE>` declaration?

<details>
    <summary>Answer:</summary>

The purpose of the `<!DOCTYPE>` declaration in web development is to specify the document type and version of HTML or XML being used in a web page. It serves several important functions:

1. **Document Type Definition (DTD):** The `<!DOCTYPE>` declaration provides a reference to a Document Type Definition (DTD) or a formal grammar that defines the rules and structure of the document. This helps web browsers and other user agents understand how to parse and render the content of the web page.

2. **Rendering Mode:** The `<!DOCTYPE>` declaration also determines the rendering mode or "quirks mode" of a web page. Different versions of HTML and XML have different rules for rendering content. By specifying the correct `<!DOCTYPE>`, you ensure that the browser renders the page according to the appropriate standards, avoiding compatibility issues.

3. **Validation:** It can be used for document validation. Some HTML editors and validators use the `<!DOCTYPE>` declaration to check whether the web page conforms to the specified document type.

4. **Fallback for Legacy Browsers:** In some cases, older web browsers may rely on the `<!DOCTYPE>` declaration to determine how to display content. Providing a correct `<!DOCTYPE>` can help ensure that your page is displayed correctly in older browsers.

For example, for HTML5 documents, the `<!DOCTYPE>` declaration is typically:

```html
<!DOCTYPE html>
```

This declaration signals to the browser that the page is written in HTML5, and it should be rendered accordingly. Different versions of HTML and XML have their own specific `<!DOCTYPE>` declarations.

In summary, the `<!DOCTYPE>` declaration is a crucial part of web development as it helps establish the document's type, version, and rendering mode, ensuring consistent and proper rendering of web content across various browsers and devices.

</details>

### 6. Describe the difference between HTML and XHTML.

<details>
    <summary>Answer:</summary>


| Aspect                  | HTML (Hypertext Markup Language)           | XHTML (Extensible Hypertext Markup Language)  |
|:-----------------------:|:-----------------------------------------:|:-------------------------------------------:|
| Document Structure      | Relaxed structure, allows some errors      | Strict structure, requires well-formedness  |
| Tag Names               | Not case-sensitive                        | Case-sensitive (all tags and attribute names)|
| Quotation Marks         | Optional for attribute values             | Required for attribute values               |
| Empty Elements          | Can be written as `<tag>` or `<tag></tag>` | Must be written as `<tag></tag>`            |
| Self-Closing Tags       | Not required, but allowed                | Must be self-closed (e.g., `<tag />`)       |
| Attribute Minimization  | Allows attribute minimization (e.g., `<input type="text" name="username">`) | Requires all attributes to have values (e.g., `<input type="text" name="username" />`) |
| Character Encoding     | Uses the `meta` tag to specify character encoding | Requires the use of `meta` tag for character encoding declaration |
| Document Type Declaration | Commonly `<!DOCTYPE HTML>`           | Requires a specific DOCTYPE declaration, such as `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">` |
| Error Handling          | Tolerates some errors and continues rendering | Strict error handling; even minor errors can cause issues |
| Case Sensitivity        | Tags and attribute names are not case-sensitive | Tags and attribute names are case-sensitive  |

</details>

### 7. Differentiate between HTML elements and tags.

<details>
    <summary>Answer:</summary>

|   | HTML Elements                          | HTML Tags                              |
|:-:|:--------------------------------------:|:--------------------------------------:|
| 1 | HTML elements are the building blocks of an HTML document. | HTML tags are used to define HTML elements. |
| 2 | They are represented by the opening and closing tags surrounding the content. | HTML tags consist of an opening tag, content, and a closing tag. |
| 3 | Elements define the structure and content of a webpage. | Tags specify how content should be formatted and displayed. |
| 4 | Elements are enclosed in angle brackets (< >). | Tags also use angle brackets (< >) to enclose them. |
| 5 | Examples of elements: `<p>`, `<h1>`, `<div>`, `<a>`. | Examples of tags: `<p></p>`, `<h1></h1>`, `<div></div>`, `<a></a>`. |
| 6 | Elements can have attributes to provide additional information. | Tags can also have attributes within the opening tag. |
| 7 | Attributes modify the behavior or appearance of an element. | Attributes are used to set properties or values for the tag. |
| 8 | Elements can be nested inside other elements to create a hierarchy. | Tags can also be nested to structure content within elements. |

HTML elements define the content and structure of a web page, while HTML tags are used to create and format these elements. Tags enclose elements and can have attributes to specify additional properties or behaviors. 

</details>

### 8. What are block-level and inline-level elements?

<details>
    <summary>Answer:</summary>

The differences between block-level and inline-level elements in web development:

| Aspect                 | Block-level Elements                    | Inline-level Elements                  |
|:----------------------:|:--------------------------------------:|:-------------------------------------:|
| **Display Type**       | Occupies the full width of the parent container and starts on a new line. | Only takes up as much width as necessary, and does not start on a new line. |
| **Examples**           | `<div>`, `<p>`, `<h1>`, `<ul>`, `<li>`, `<table>`, `<form>`, `<header>`, `<footer>`, etc. | `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, `<input>`, `<br>`, `<i>`, etc. |
| **Usage**              | Typically used for structuring and grouping content, creating layout sections, and separating distinct elements. | Used for styling and formatting within block-level elements, or for embedding inline content within text. |
| **Allowed Children**   | Can contain both block-level and inline-level elements. | Can contain only inline-level elements or text. |
| **CSS Properties**     | Can be styled using properties like `width`, `height`, `margin`, `padding`, `background-color`, etc. | Can be styled using properties like `font-size`, `color`, `text-decoration`, `font-weight`, etc. |
| **Default Behavior**   | Creates a new "block" formatting context, meaning elements above and below it do not appear on the same line. | Allows elements to flow alongside each other horizontally within their parent container. |
| **Examples in HTML**   | `<div>This is a block-level element.</div>` `<br>` `<p>This is also a block-level element.</p>` | `<span>This is an inline-level element.</span>` `<br>` `<a href="#">This is another inline-level element.</a>` |

These distinctions are important in web development when it comes to controlling the layout and behavior of elements on a web page. Block-level elements are typically used for larger structural elements, while inline-level elements are used for smaller, inline content and styling.

</details>

### 9. What is semantic HTML, and why is it important?

<details>
    <summary>Answer:</summary>

Semantic HTML, in the context of web development and web technology, refers to using HTML elements that have a meaningful and descriptive purpose to structure the content of a web page. These elements convey the meaning of the content they enclose, making it clear and understandable not only to humans but also to web browsers and assistive technologies like screen readers. Here are some key points about semantic HTML and its importance:

1. **Meaningful Structure:** Semantic HTML elements provide a clear and logical structure to a web page's content. For example, using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` tags helps organize content in a way that reflects its hierarchy and purpose.

2. **Accessibility:** Semantic HTML plays a crucial role in web accessibility. Screen readers and other assistive technologies rely on the semantic structure to interpret and present content to users with disabilities. By using semantic elements, you ensure that your website is accessible to a wider audience.

3. **Search Engine Optimization (SEO):** Search engines like Google also benefit from semantic HTML. They use the structure and meaning of your content to better understand and index your website. This can improve your website's ranking in search results.

4. **Maintainability:** Semantic HTML makes your code more maintainable and understandable. Developers (including your future self) can easily grasp the purpose of different elements, which makes debugging and updating the code simpler.

5. **Consistency:** Using semantic elements encourages consistency in web development practices. It helps teams follow best practices and create a consistent user experience across different parts of a website.

6. **Future-Proofing:** As web standards evolve, semantic HTML elements are more likely to remain relevant and supported. Non-semantic or outdated elements may become obsolete over time.

Examples of semantic HTML elements include:

- `<header>`: Represents a container for introductory content or a set of navigational links.
- `<nav>`: Defines a section of navigation links.
- `<main>`: Specifies the main content of a document.
- `<section>`: Defines a thematic grouping of content within a document.
- `<article>`: Represents a self-contained composition, such as a blog post or news article.
- `<footer>`: Contains footer information about a section or the page.

In summary, semantic HTML is important because it enhances the structure, accessibility, search engine optimization, and maintainability of your web pages. By using these elements appropriately, you can create a better user experience and ensure that your website is well-prepared for the future of web technology.

</details>

### 10. What is the purpose of the `<head>` and `<body>` elements in an HTML document?

<details>
    <summary>Answer:</summary>

The `<head>` and `<body>` elements in an HTML document serve different purposes:

1. **`<head>` Element:**
   - The `<head>` element is used to contain metadata and other non-visible information about the HTML document. It typically includes elements like `<title>`, `<meta>`, `<link>`, and `<script>`.
   - `<title>`: Specifies the title of the document, which is displayed in the browser's title bar or tab.
   - `<meta>`: Provides metadata about the document, such as character encoding, author, and description.
   - `<link>`: Is used to link external resources like stylesheets (CSS) and icon files.
   - `<script>`: Can include JavaScript code or links to external JavaScript files.
   
2. **`<body>` Element:**
   - The `<body>` element contains the visible content of the HTML document, including text, images, links, forms, and other elements that are displayed in the web browser.
   - This is where you place the main content of your webpage that users will see and interact with.

In summary, the `<head>` section is primarily for metadata and resources that help with the presentation and behavior of the page, while the `<body>` section is for the actual content that users will view and interact with on the web page.

</details>

### 11. What is the purpose of the `<meta>` tags and their common attributes.

<details>
    <summary>Answer:</summary>

`<meta>` tags are an essential part of HTML (Hypertext Markup Language) used in web development. They provide metadata about the HTML document itself, and this information is not typically displayed on the web page but is important for search engines, browsers, and other web-related technologies. Here's the purpose of the `<meta>` tag and some common attributes:

1. **Character Encoding:** The most common use of the `<meta>` tag is to specify the character encoding of the HTML document. This helps the browser interpret and display the text correctly. The attribute for this purpose is `charset`. For example:
   ```html title="index.html"
   <meta charset="UTF-8">
   ```

2. **Viewport Configuration:** In responsive web design, the `<meta>` tag is used to set the viewport properties for mobile devices. The `viewport` attribute is used for this purpose. For example:
   ```html title="index.html"
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

3. **Page Description:** The `name` attribute is often used to provide a brief description of the web page. This description is sometimes displayed in search engine results. For example:
   ```html title="index.html"
   <meta name="description" content="This is a sample webpage description.">
   ```

4. **Keywords:** Although less important than in the past, the `name` attribute can also be used to specify keywords related to the content of the page. These are used by search engines for indexing purposes.
   ```html title="index.html"
   <meta name="keywords" content="web development, HTML, meta tags">
   ```

5. **Authorship and Copyright:** You can use the `<meta>` tag to specify the author of the webpage and copyright information using attributes like `author` and `copyright`. For example:
   ```html title="index.html"
   <meta name="author" content="Ajay Dhangar">
   <meta name="copyright" content="Copyright © 2023, CMHQ">
   ```

6. **Refresh and Redirect:** The `<meta>` tag can be used to create auto-refreshing pages or to redirect to another page after a specified time. This is done using the `http-equiv` attribute. For example:
   ```html title="index.html"
   <meta http-equiv="refresh" content="5;url=https://codemastermindhq.vercel.app/">
   ```

These are some common uses of the `<meta>` tag and its attributes in web development. They are crucial for improving SEO (Search Engine Optimization) and ensuring proper rendering of web pages across different devices and browsers.

</details>

### 12. Explain the difference between `<em>` vs `<i>` and `<strong>` vs `<b>` tags.

<details>
    <summary>Answer:</summary>

1. **`<em>` vs `<i>`:**
   - Use `<em>` when you want to emphasize or give importance to a piece of text. It should be used when the content inside it carries semantic meaning and should stand out for understanding.
   - Use `<i>` for purely stylistic italicization without any semantic significance. If you just want to change the appearance of the text without implying importance or emphasis, `<i>` can be used.

   ***To determine which to use:***
   - Ask yourself if the text you're enclosing has inherent importance or emphasis. If yes, use `<em>`.
   - If you're only changing the appearance without adding any meaning, use `<i>`.

    ```html title="index.html"
    <!-- Using <em> for semantic emphasis -->
    <p>This is <em>important</em> information.</p>
    <!-- Using <i> for stylistic italics without semantic emphasis -->
    <p>This is <i>italicized</i> text.</p>
    ```

    <HtmlWindow>
      <p>This is <em>important</em> information.</p>
      <p>This is <i>italicized</i> text.</p>
    </HtmlWindow>

2. **`<strong>` vs `<b>`:**
   - Use `<strong>` when you want to indicate strong importance or extra emphasis on the content. This tag should be used when the text inside it has semantic significance in the document's context.
   - Use `<b>` for making text bold purely for stylistic purposes, without any implied importance or extra emphasis.

   ***To determine which to use:***
   - Consider whether the text you're enclosing is critical to understanding the content or if it needs extra attention. If yes, use `<strong>`.
   - If you're merely making the text bold for visual appeal without adding meaning, use `<b>`.
   
   ```html title="index.html"
    <!-- Using <strong> for semantic strong importance -->
    <p><strong>Caution:</strong> Do not proceed without reading the instructions.</p>
    <!-- Using <b> for bold styling without semantic importance -->
    <p>This text is <b>bold</b> for emphasis.</p>
    ```
    
    <HtmlWindow>
      <p><strong>Caution:</strong> Do not proceed without reading the instructions.</p>
      <p>This text is <b>bold</b> for emphasis.</p>
    </HtmlWindow>

In both cases, it's essential to think about the content's context and the message you want to convey. Semantic HTML tags like `<em>` and `<strong>` are preferred for accessibility, SEO, and clear communication of your content's intent to both human readers and machines (e.g., search engines, screen readers).

</details>

### 13. What is the purpose of the `<div>` and `<span>` elements?

<details>
    <summary>Answer:</summary>

**1. `<div>` Element:**

   - **Block-Level Container:** The `<div>` element is like a versatile container or a box. It's a block-level element, which means it takes up the full width available in its parent container and starts on a new line. It's often used for grouping and organizing larger sections of content.

   - **Structuring Content:** You can think of `<div>` as a way to divide your webpage into sections. For example, you might have a `<div>` for the header, another for the main content, and one for the footer. These divisions help structure your webpage logically.

   - **CSS Styling:** `<div>` elements are commonly used with Cascading Style Sheets (CSS) to apply styles, such as colors, backgrounds, borders, and positioning. This allows you to control the layout and appearance of different sections of your webpage.

   - **Example:** If you want to create a header section with a blue background, you can use a `<div>` like this:

     ```html title="index.html"
     <div style="background-color: blue; padding: 10px;">
         <h1>Welcome to my Website</h1>
     </div>
     ```

     <HtmlWindow>
      <div style={{backgroundColor: "blue", padding: "10px"}}>
         <h1>Welcome to my Website</h1>
      </div>    
     </HtmlWindow>

**2. `<span>` Element:**

   - **Inline Styling:** The `<span>` element is much smaller in scope compared to `<div>`. It's an inline-level element, which means it doesn't start on a new line and only takes up as much width as its content requires.

   - **Applying Styles:** `<span>` is typically used to target and style specific portions of text within a larger block of text. For example, you might want to make a single word or phrase within a paragraph stand out by changing its color or font size.

   - **Scripting:** In addition to styling, `<span>` can be useful for JavaScript or other scripting purposes. You can give a `<span>` an id or class to make it easier to target with scripts.

   - **Example:** If you want to make a specific word in a sentence red, you can use a `<span>` like this:

     ```html title="index.html"
     <p>This is a <span style="color: red;">highlighted</span> word.</p>
     ```

     <HtmlWindow>
       <p>This is a <span style={{color: "red"}}>highlighted</span> word.</p>
     </HtmlWindow>

In summary, think of `<div>` as a way to create structured containers or sections for your webpage layout, while `<span>` is used for fine-grained styling or scripting within text or inline elements. Both elements play crucial roles in creating well-designed and functional web pages.

</details>

### 14. Differentiate between inline and block-level elements.

<details>
    <summary>Answer:</summary>

In web development, elements are categorized as either inline or block-level based on how they behave in the layout of a web page. Here's a differentiation between inline and block-level elements:

1. **Inline Elements**:
   - **Inline elements** are elements that do not start on a new line and only take up as much width as necessary. They flow within the content, wrapping around text and other inline elements.
   - Common examples of inline elements include `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`, and `<br>`.
   - Inline elements are often used for styling or applying formatting to parts of text within a block-level element.

2. **Block-Level Elements**:
   - **Block-level elements** are elements that typically start on a new line and take up the full available width of their parent container, extending from left to right.
   - Block-level elements create a distinct "block" or "box" in the layout, pushing any following content below them.
   - Common examples of block-level elements include `<div>`, `<p>`, `<h1>` to `<h6>`, `<ul>`, `<ol>`, `<li>`, `<table>`, and `<form>`.
   - Block-level elements are often used to structure the layout of a web page and group content together in separate sections.

***Here's a simple example to illustrate the difference:***

```html title="index.html"
<p>This is a <strong>block-level</strong> element.</p>
<span>This is an <em>inline</em> element.</span>
```

<HtmlWindow>
<p>This is a <strong>block-level</strong> element.</p>
<span>This is an <em>inline</em> element.</span>
</HtmlWindow>

In the example above, the `<p>` element is a block-level element, so it starts on a new line and takes up the full width of its container. The `<strong>` element within it is an inline element and flows within the paragraph's text without starting a new line.

Understanding the distinction between inline and block-level elements is crucial for controlling the layout and structure of web pages when working with HTML and CSS.

</details>

### 15. How do you create subscript (`<sub>`) and superscript (`<sup>`) text?

<details>
    <summary>Answer:</summary>

To create subscript (`<sub>`) and superscript (`<sup>`) text in HTML, you can use the following tags:

1. **Subscript (`<sub>`):** This is used for text that should be displayed lower than the normal baseline, typically used for things like chemical formulas, footnotes, or mathematical notations.

```html title="index.html"
<sub>Subscript Text</sub>
```

2. **Superscript (`<sup>`):** This is used for text that should be displayed higher than the normal baseline, often used for things like exponent numbers, trademark symbols, or citations.

```html title="index.html"
<sup>Superscript Text</sup>
```

Here's an example of how you can use these tags within a sentence:

```html title="index.html"
<p>H<sub>2</sub>O is a common example of a chemical formula, and E=mc<sup>2</sup> is a famous equation.</p>
```

<HtmlWindow>
    <p>H<sub>2</sub>O is a common example of a chemical formula, and E=mc<sup>2</sup> is a famous equation.</p>
</HtmlWindow>

When rendered in a web browser, the "2" will be lowered in the first example (subscript), and the "2" will be raised in the second example (superscript).

</details>

