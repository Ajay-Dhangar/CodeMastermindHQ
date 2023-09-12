---
id: html-interview-mastery
title: HTML Interview Mastery
sidebar_label: HTML Mastery
description: HTML Interview Mastery All Concepts Cleared
date: 2023-05-11 16:49:29
sidebar_position: 12
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
</details>

### 9. What is semantic HTML, and why is it important?

<details>
    <summary>Answer:</summary>
</details>

### 10. What is the purpose of the `<head>` and `<body>` elements in an HTML document?

<details>
    <summary>Answer:</summary>
</details>

### 11. What is the purpose of the `<meta>` tags and their common attributes.

<details>
    <summary>Answer:</summary>
</details>

### 12. Explain the difference between `<em>` vs `<i>` and `<strong>` vs `<b>` tags.

<details>
    <summary>Answer:</summary>
</details>

### 13. What is the purpose of the `<div>` and `<span>` elements?

<details>
    <summary>Answer:</summary>
</details>

### 14. Differentiate between inline and block-level elements.

<details>
    <summary>Answer:</summary>
</details>

### 15. How do you create subscript (`<sub>`) and superscript (`<sup>`) text?

<details>
    <summary>Answer:</summary>
</details>

### 16. Describe the `<a>` (anchor) element and its attributes.

<details>
    <summary>Answer:</summary>
</details>

### 17. How do you create a hyperlink to an email address?

<details>
    <summary>Answer:</summary>
</details>

### 18. Explain the use of the `<img>` element.

<details>
    <summary>Answer:</summary>
</details>

### 19. What are the key attributes?

<details>
    <summary>Answer:</summary>
</details>

### 20. What is the purpose of the `<blockquote>` tag?

<details>
    <summary>Answer:</summary>
</details>

### 21. What is the role of the `<ul>` and `<ol>` elements? How do they differ?

<details>
    <summary>Answer:</summary>
</details>

### 22. How can you create a line break within a paragraph of text?

<details>
    <summary>Answer:</summary>
</details>

### 23. What are HTML entities, and why are they used?

<details>
    <summary>Answer:</summary>
</details>

### 24. Describe the `<table>` element and its associated elements (e.g., `<thead>`, `<tbody>`, `<tr>`, `<td>`, `<th>`).

<details>
    <summary>Answer:</summary>
</details>

### 25. How can you create a clickable image using HTML?

<details>
    <summary>Answer:</summary>
</details>

### 26. Explain the `<form>` element and its attributes.

<details>
    <summary>Answer:</summary>
</details>

### 27. Describe the `<input>` element and its common types (text, radio, checkbox, etc.).

<details>
    <summary>Answer:</summary>
</details>

### 28. What is the purpose of the `<label>` element in forms?

<details>
    <summary>Answer:</summary>
</details>

### 29. How do you create a dropdown list using the `<select>` and `<option>` elements?

<details>
    <summary>Answer:</summary>
</details>

### 30. How can you validate user input using HTML5 attributes?

<details>
    <summary>Answer:</summary>
</details>

### 31. Explain the difference between the "GET" and "POST" methods in form submission.

<details>
    <summary>Answer:</summary>
</details>

### 32. What are the new input types introduced in HTML5 for form elements?

<details>
    <summary>Answer:</summary>
</details>

### 33. Describe the HTML5 semantic elements like `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`, etc.

<details>
    <summary>Answer:</summary>
</details>

### 34. How does the `<video>` element work to embed videos in a webpage?

<details>
    <summary>Answer:</summary>
</details>

### 35. What is the `<canvas>` element used for in HTML5?

<details>
    <summary>Answer:</summary>
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

### 46. Describe the Web Storage API and the differences between localStorage and sessionStorage.

<details>
    <summary>Answer:</summary>
</details>

### 47. What is the Drag and Drop API, and how can you implement drag-and-drop functionality using HTML?

<details>
    <summary>Answer:</summary>
</details>

### 48. How can you embed audio using the `<audio>` element in HTML5? What attributes can be used?

<details>
    <summary>Answer:</summary>
</details>

<!-- 
### 49. Describe the `<figure>` and `<figcaption>` elements and their purpose in relation to images and other media.
### 50. Explain how to use the `<fieldset>` and `<legend>` elements to group and label form controls.
### 51. Describe how to create a form with multiple columns using the `<fieldset>` and `<legend>` elements.
### 52. What is the HTML5 Constraint Validation API? How can it be used for client-side form validation?
### 53. What are custom data attributes (data-*) in HTML5? How can you use them to store extra information about elements?
### 54. Explain how custom data attributes can be useful for interacting with JavaScript.
### 55. What are Web Components? Explain the main technologies that make up a Web Component.
### 56. Describe the Shadow DOM and its purpose in Web Components.
### 57. What is client-side templating? How can you use libraries like Handlebars or Mustache to create dynamic HTML templates?
### 58. Explain the concept of responsive images. How can you implement responsive images using the `<picture>` element and the srcset attribute?
### 59. How do you use landmark roles (e.g., `<main>`, `<nav>`, `<article>`) to enhance the semantic structure of a webpage?
### 60. Describe how ARIA (Accessible Rich Internet Applications) attributes can be used to improve accessibility.
### 61. Explain the purpose of the `<head>` element and its various meta tags, including viewport and charset.
### 62. What is the `<base>` element used for, and how can it affect relative URLs and links?
### 63. What is CORS? Describe the concept of cross-origin requests and how they are controlled in modern web browsers.
### 64. Explain what HTML preprocessors (e.g., Pug, Haml) are and how they can be beneficial for writing HTML code. -->