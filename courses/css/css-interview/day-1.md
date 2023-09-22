---
id: css-interview-day-1
title: CSS Interview Day 1
sidebar_label: Day 1
date: 2023-05-11 16:49:29
sidebar_position: 1
---

```mdx-code-block
import HtmlWindow from '@site/src/components/HtmlWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

### 1. Explain CSS box model

<details>
    <summary>Answer:</summary>

The **CSS box model** is a fundamental concept in web development that defines how elements on a webpage are rendered and how their dimensions are calculated. It consists of four essential properties: content, padding, border, and margin. Let's explain the CSS box model with examples and code.

**1. Content:** The content area is where the actual content of the element, such as text or images, is displayed.

**2. Padding:** Padding is the space between the content and the element's border. It provides internal spacing within the element.

**3. Border:** The border is a line that surrounds the content and padding. It can have a thickness, style, and color.

**4. Margin:** The margin is the space outside the element's border, which separates it from other elements on the page.

Here's an example with HTML and CSS to illustrate the box model:

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 200px;
            height: 100px;
            padding: 20px;
            border: 2px solid #3498db;
            margin: 20px;
        }
    </style>
</head>
<body>
    <div class="box">
        This is a box with content, padding, border, and margin.
    </div>
</body>
</html>
```

<HtmlWindow>
    <div style={{width: '200px', height: '100px', padding: '20px', border: '2px solid #3498db', margin: '20px'}}>
        This is a box with content, padding, border, and margin.
    </div>
</HtmlWindow>

In this example:

- We have a `div` element with the class `box`.
- The `width` and `height` properties set the dimensions of the content area.
- `padding: 20px` creates space inside the content area.
- `border: 2px solid #3498db` adds a blue border around the content and padding.
- `margin: 20px` provides space outside the border.

Here's a breakdown of how the box model works for this element:

- Content Area: 200px (width) x 100px (height)
- Padding Area: 240px (width) x 140px (height)
- Border Area: 244px (width) x 144px (height) (including the border's thickness)
- Margin Area: 284px (width) x 184px (height) (including the margin's space)

Understanding the box model is crucial for precise layout and spacing in web design. It's important to note that you can adjust these properties to create the desired spacing and appearance for your elements.

</details>

### 2. What is box sizing?

<details>
    <summary>Answer:</summary>

Box-sizing is a CSS property that determines how the total width and height of an element are calculated. It can have two values: "content-box" and "border-box."

1. **Content-Box (Default):**
   - In the default "content-box" value, the width and height of an element are calculated by considering only the content of the element. Padding and borders are added to this width and height.
   
   ```css title="style.css"
   .box {
     width: 200px;
     height: 100px;
     padding: 20px;
     border: 2px solid black;
   }
   ```

   In this example, the total width of the `.box` element would be `200px + 2 * 20px + 2 * 2px = 244px`, and the total height would be `100px + 2 * 20px + 2 * 2px = 144px`.

2. **Border-Box:**
   - When you set the box-sizing property to "border-box," the width and height of an element include the content, padding, and borders. In this case, the content area stays fixed, and any padding or border added reduces the available space for the content.
   
   ```css title="style.css"
   .box {
     width: 200px;
     height: 100px;
     padding: 20px;
     border: 2px solid black;
     box-sizing: border-box;
   }
   ```

   With "box-sizing: border-box," the total width and height of the `.box` element remain `200px` and `100px`, respectively. The padding and border are included within these dimensions.

Here's a simple HTML example to illustrate the difference:

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
  <style>
    .content-box {
      width: 200px;
      height: 100px;
      padding: 20px;
      border: 2px solid #3498db;
    }

    .border-box {
      width: 200px;
      height: 100px;
      padding: 20px;
      border: 2px solid #3498db;
      box-sizing: border-box;
    }
  </style>
</head>
<body>
  <h2>Content-Box</h2>
  <div class="content-box">Content-Box</div>

  <h2>Border-Box</h2>
  <div class="border-box">Border-Box</div>
</body>
</html>
```

<HtmlWindow>
     <h2>Content-Box</h2>
     <div style={{width: '200px', height: '100px', padding: '20px', border: '2px solid #3498db'}}>Content-Box</div>
     <h2>Border-Box</h2>
    <div style={{width: '200px', height: '100px', padding: '20px', border: '2px solid #3498db', boxSizing: 'border-box'}}>Border-Box</div>
</HtmlWindow>

In this example, you'll notice that the "Content-Box" element's total size is larger because padding and borders are added to the width and height. In contrast, the "Border-Box" element's size remains fixed at `200px` by `100px` because padding and borders are included within the specified width and height due to the "box-sizing" property being set to "border-box."

</details>

### 3. Explain inline , internal and external stylesheet

<details>
    <summary>Answer:</summary>

Let's explain inline, internal, and external stylesheets with examples and code:

**Inline Styles:**
Inline styles are applied directly to individual HTML elements using the `style` attribute. These styles are defined within the HTML tag itself.

**Example:**

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>Inline Styles Example</title>
</head>
<body>
    <h1 style="color: blue; font-size: 24px;">This is an inline style</h1>
    <p style="background-color: yellow;">This is a paragraph with an inline style for background color.</p>
</body>
</html>
```

<HtmlWindow>
    <h1 style={{color: 'blue', fontSize:'24px'}}>This is a header with an external style</h1>
    <p style={{backgroundColor: 'yellow'}}>This is a paragraph with an external style for background color.</p>
</HtmlWindow>

In the above example, we've applied inline styles to the `<h1>` and `<p>` elements using the `style` attribute.

**Internal Styles:**
Internal styles, also known as embedded styles, are defined within the `<style>` element in the HTML document's `<head>` section. These styles apply to all the elements on that page.

**Example:**

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>Internal Styles Example</title>
    <style>
        h1 {
            color: green;
            font-size: 28px;
        }
        p {
            background-color: pink;
        }
    </style>
</head>
<body>
    <h1>This is a header with an internal style</h1>
    <p>This is a paragraph with an internal style for background color.</p>
</body>
</html>
```

<HtmlWindow>
    <h1 style={{color: 'green', fontSize:'28px'}}>This is a header with an external style</h1>
    <p style={{backgroundColor: 'pink'}}>This is a paragraph with an external style for background color.</p>
</HtmlWindow>

In the above example, we've defined internal styles for the `<h1>` and `<p>` elements within the `<style>` element in the `<head>` section. These styles apply to all instances of these elements on the page.

**External Styles:**
External styles are defined in separate CSS files and then linked to the HTML document using the `<link>` element. These styles can be reused across multiple HTML pages.

**CSS File (styles.css):**

```css title="styles.css"
/* styles.css */
h1 {
    color: red;
    font-size: 32px;
}
p {
    background-color: lightblue;
}
```

**HTML File:**

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <title>External Styles Example</title>
    <link rel="stylesheet" type="text/css" href="./styles.css">
</head>
<body>
    <h1>This is a header with an external style</h1>
    <p>This is a paragraph with an external style for background color.</p>
</body>
</html>
```

<HtmlWindow>
    <h1 style={{color: 'red', fontSize:'32px'}}>This is a header with an external style</h1>
    <p style={{backgroundColor: 'lightblue'}}>This is a paragraph with an external style for background color.</p>
</HtmlWindow>

In this example, we have an external CSS file named "styles.css," which is linked to the HTML document using the `<link>` element. The styles defined in "styles.css" apply to the HTML elements on the page.

**Summary:**

- Inline styles are applied directly to individual elements using the `style` attribute.
- Internal styles are defined in the `<style>` element within the HTML document's `<head>` section and apply to all elements on that page.
- External styles are defined in separate CSS files and linked to the HTML document using the `<link>` element, allowing for reuse across multiple pages.


</details>

### 4. What is the difference between padding and margin?

<details>
    <summary>Answer:</summary>

Here's a summarizing the key differences between padding and margin in CSS:

| Aspect                   | Padding                           | Margin                            |
|:------------------------:|:--------------------------------:|:---------------------------------:|
| Definition               | Space between the content and the border of an element. | Space outside the border of an element, creating a gap between elements. |
| Effect on Element Size   | Increases the total size of the element. | Does not affect the total size of the element; it only creates space around it. |
| Applied To               | Applied inside the border of an element. | Applied outside the border of an element. |
| Collapsing               | Padding values do not collapse. | Vertical margins of adjacent elements may collapse. |
| Inheritance             | Padding is not inherited. Each element must specify its padding. | Margins are not inherited. Each element must specify its margins. |
| Overlapping             | Padding values can overlap with each other. | Margins do not overlap. The larger margin value takes precedence. |
| Shorthand Property      | Can be set using the `padding` shorthand property (e.g., `padding: 10px;`). | Can be set using the `margin` shorthand property (e.g., `margin: 20px 10px;`). |
| Values                   | Can use values like pixels, percentages, ems, etc. | Can use values like pixels, percentages, ems, etc. |

***Let's explore the differences between padding and margin in CSS with examples and code.***

**Padding:**
Padding is the space inside an element, between the element's content and its border. It is used to create space between the content and the element's border. Padding does not affect the element's positioning in relation to other elements.

***Here's an example with code:***

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 200px;
      height: 100px;
      background-color: lightblue;
      padding: 20px; /* Adding padding */
      border: 2px solid blue;
    }
  </style>
</head>
<body>
  <div class="box">
    This is some content with padding.
  </div>
</body>
</html>
```

<HtmlWindow>
    <div style={{width: '200px', height: '100px', backgroundColor: 'lightblue', padding: '20px', border: '2px solid blue'}}>
    This is some content with padding.
  </div>
</HtmlWindow>

In this example, the `.box` element has padding applied to it using `padding: 20px;`. This creates space inside the element between the content and the border.

**Margin:**
Margin is the space outside an element, affecting the space between the element and other elements around it. It controls the spacing between elements and their positioning in relation to other elements on the page.

***Here's an example with code:***

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
  <style>
    .box1 {
      width: 200px;
      height: 100px;
      background-color: lightblue;
      margin: 20px; /* Adding margin */
      border: 2px solid blue;
    }
    .box2 {
      width: 200px;
      height: 100px;
      background-color: lightcoral;
      margin: 20px; /* Adding margin */
      border: 2px solid red;
    }
  </style>
</head>
<body>
  <div class="box1">
    This is box 1 with margin.
  </div>
  <div class="box2">
    This is box 2 with margin.
  </div>
</body>
</html>
```

<HtmlWindow>
    <div style={{width: '200px', height: '100px', backgroundColor: 'lightblue', margin: '20px', border: '2px solid blue'}}>
    This is box 1 with margin.
  </div>
  <div style={{width: '200px', height: '100px', backgroundColor: 'lightcoral', margin: '20px', border: '2px solid red'}}>
    This is box 2 with margin.
  </div>
</HtmlWindow>

In this example, both `.box1` and `.box2` elements have margins applied to them using `margin: 20px;`. This creates space outside the elements, affecting their positioning in relation to each other and other elements on the page.

In summary, padding affects the space inside an element, while margin affects the space outside an element, controlling its positioning in relation to other elements.

</details>

### 5. Difference between absolute and relative positioning

<details>
    <summary>Answer:</summary>

***Here's the key differences between absolute and relative positioning in CSS:***

| Aspect                            | Absolute Positioning                  | Relative Positioning                |
|:---------------------------------:|:-------------------------------------:|:----------------------------------:|
| Definition                        | Positioned relative to the nearest positioned ancestor (or the initial containing block if none). | Positioned relative to its normal position in the document flow. |
| Document Flow                     | Removed from the normal document flow. | Remains in the normal document flow. |
| Nearby Elements                   | Absolute elements don't affect the positioning of other elements. | Nearby elements may be affected by the space occupied by the relatively positioned element. |
| Parent Element                   | Positioned relative to the nearest ancestor with a non-static positioning (relative, absolute, fixed, or sticky). | Positioned relative to its nearest positioned ancestor. |
| Scrollbar Impact                  | May cause overflow and scrollbars in containing elements if positioned outside their boundaries. | Rarely causes overflow and scrollbars as it doesn't affect the flow of nearby elements. |
| Initial Position                  | Positioned using the initial containing block if no positioned ancestor is found. | Positioned using its default position in the document flow. |
| Example Usage                    | Used for tooltips, dropdown menus, and elements that need precise positioning. | Useful for elements you want to move slightly from their normal flow, like button hover effects. |

***Let's explore the differences between absolute and relative positioning in CSS with examples and code.***

**Relative Positioning:**

Relative positioning in CSS positions an element relative to its normal position in the document flow. It allows you to adjust an element's position based on its original location.

***Here's an example:***

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      position: relative;
      width: 200px;
      height: 150px;
      background-color: lightgray;
    }

    .box {
      position: relative;
      left: 50px;
      top: 30px;
      width: 100px;
      height: 100px;
      background-color: blue;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box"></div>
  </div>
</body>
</html>
```

<HtmlWindow>
    <div style={{position: 'relative', width: '200px', height: '150px', backgroundColor: 'lightgray'}}>
        <div style={{position: 'relative', left: '50px', top: '30px', width: '100px', height: '100px', backgroundColor: 'blue'}}></div>
    </div>
</HtmlWindow>

***In this example:***

- The `.container` div has a gray background and contains the `.box` div.
- The `.box` div is relatively positioned with `left: 50px;` and `top: 30px;`. This means it moves 50 pixels to the right and 30 pixels down from its original position within the `.container`.

**Absolute Positioning:**

Absolute positioning in CSS positions an element relative to its nearest positioned ancestor (an ancestor with a position property other than `static`) or the initial containing block (the viewport if no positioned ancestor is found).

***Here's an example:***

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      position: relative;
      width: 200px;
      height: 150px;
      background-color: lightgray;
    }

    .box {
      position: absolute;
      left: 50px;
      top: 30px;
      width: 100px;
      height: 100px;
      background-color: blue;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box"></div>
  </div>
</body>
</html>
```

<HtmlWindow>
    <div style={{position: 'relative', width: '200px', height: '150px', backgroundColor: 'lightgray'}}>
        <div style={{position: 'absolute', left: '50px', top: '30px', width: '100px', height: '100px', backgroundColor: 'blue'}}></div>
    </div>
</HtmlWindow>

***In this example:***

- The `.container` div is relatively positioned.
- The `.box` div is absolutely positioned within the `.container`. It is positioned 50 pixels to the right and 30 pixels down from the top-left corner of the nearest positioned ancestor, which is the `.container`.

**Key Differences:**

1. Relative positioning moves an element relative to its normal position, while absolute positioning moves an element relative to its nearest positioned ancestor.

2. Relative positioning does not remove an element from the document flow, so it can affect the layout of other elements. Absolute positioning takes the element out of the normal document flow.

3. Absolute positioning allows for precise control of an element's position, making it useful for creating overlays or pop-up elements.

Remember that understanding when to use relative and absolute positioning depends on the specific layout and design requirements of your project.

</details>

### 6. What is the difference between display none and visibility hidden?

<details>
    <summary>Answer:</summary>

Let's explore the difference between the CSS properties `display: none` and `visibility: hidden` with examples and code.

**1. `display: none`**

- When you apply `display: none` to an element, it completely removes the element from the document flow. This means the element takes up no space, and it's as if it doesn't exist in the HTML structure.

***Example:***

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
<style>
  .hidden-element {
    display: none;
  }
</style>
</head>
<body>
  <p>This is some visible text.</p>
  <div class="hidden-element">
    This element is hidden using display: none.
  </div>
  <p>More visible text.</p>
</body>
</html>
```

<HtmlWindow>
    <p>This is some visible text.</p>
    <div style={{display: 'none'}}>
     This element is hidden using display: none.
    </div>
    <p>More visible text.</p>
</HtmlWindow>

In this example, the "hidden-element" div is completely removed from the document flow, and it won't take up any space. The "More visible text." paragraph will appear immediately after the visible text.

**2. `visibility: hidden`**

- When you apply `visibility: hidden` to an element, the element remains in the document flow, but it becomes invisible. It still takes up space as if it were visible, and it can affect the layout of other elements around it.

***Example:***

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
<style>
  .hidden-element {
    visibility: hidden;
  }
</style>
</head>
<body>
  <p>This is some visible text.</p>
  <div class="hidden-element">
    This element is hidden using visibility: hidden.
  </div>
  <p>More visible text.</p>
</body>
</html>
```

<HtmlWindow>
    <p>This is some visible text.</p>
    <div style={{visibility: 'hidden'}}>
      This element is hidden using visibility: hidden.
    </div>
    <p>More visible text.</p>
</HtmlWindow>

In this example, the "hidden-element" div is invisible, but it still occupies space in the layout. The "More visible text." paragraph will appear below where the hidden element would be if it were visible.

**Summary:**

- `display: none` completely removes the element from the document flow, making it as if it doesn't exist.
- `visibility: hidden` keeps the element in the document flow, making it invisible but still taking up space.

Choose between these properties based on your specific needs. If you want to hide an element and free up space, use `display: none`. If you want to hide an element but keep the space reserved, use `visibility: hidden`.

</details>

### 7. Create a circle using border radius 

<details>
    <summary>Answer:</summary>

To create a circle using the `border-radius` property in CSS, you can set the `border-radius` to 50% of the width and height of the element. Here's an example with HTML and CSS code:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Circle Example</title>
    <style>
        .circle {
            width: 100px;
            height: 100px;
            background-color: #3498db;
            border-radius: 50%; /* This creates a circle */
        }
    </style>
</head>
<body>
    <div class="circle"></div>
</body>
</html>
```

<HtmlWindow>
    <div style={{width: '100px', height: '100px', backgroundColor: '#3498db', borderRadius: '50%'}}></div>
</HtmlWindow>

***In this example:***

1. We create a `<div>` element with a class of "circle" to represent our circle.
2. In the CSS, we set the width and height of the `.circle` element to 100px each, but you can adjust these values as needed.
3. We set the background color to `#3498db`, but you can change it to any color you prefer.
4. The critical part is the `border-radius` property set to `50%`, which rounds the corners of the element, making it appear as a circle.

</details>

### 8. Difference between flex row and column

<details>
    <summary>Answer:</summary>

The main difference between using `flex-direction: row` and `flex-direction: column` in CSS is how they arrange the child elements within a flex container. Let's explore these two options with examples and code.

**1. Flex Direction: Row (Default)**

When you set `flex-direction: row` on a flex container, the child elements are arranged horizontally in a row. Here's an example:

**HTML:**

```html title="index.html"
<div class="flex-container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

**CSS:**

```css title="style.css"
.flex-container {
  display: flex;
  flex-direction: row; /* This is the default value */
}

.item {
  padding: 10px;
  border: 1px solid #000;
  margin: 5px;
}
```

<HtmlWindow>
    <div style={{display: 'flex', flexDirection: 'row'}}>
     <div style={{padding: '10px', margin: '5px', border: '1px solid #000'}}>Item 1</div>
     <div style={{padding: '10px', margin: '5px', border: '1px solid #000'}}>Item 2</div>
     <div style={{padding: '10px', margin: '5px', border: '1px solid #000'}}>Item 3</div>
    </div>
</HtmlWindow>

In this example, the child elements (Item 1, Item 2, and Item 3) are arranged horizontally in a row by default because `flex-direction` is set to `row`.

**2. Flex Direction: Column**

When you set `flex-direction: column` on a flex container, the child elements are arranged vertically in a column. Here's an example:

**HTML:**

```html title="index.html"
<div class="flex-container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

**CSS:**

```css title="style.css"
.flex-container {
  display: flex;
  flex-direction: column;
}

.item {
  padding: 10px;
  border: 1px solid #000;
  margin: 5px;
}
```

<HtmlWindow>
    <div style={{display: 'flex', flexDirection: 'column' }}>
     <div style={{padding: '10px', margin: '5px', border: '1px solid #000'}}>Item 1</div>
     <div style={{padding: '10px', margin: '5px', border: '1px solid #000'}}>Item 2</div>
     <div style={{padding: '10px', margin: '5px', border: '1px solid #000'}}>Item 3</div>
    </div>
</HtmlWindow>

In this example, the child elements are arranged vertically, one below the other, because `flex-direction` is set to `column`.

You can switch between `flex-direction: row` and `flex-direction: column` to control how the child elements are arranged within the flex container. These examples illustrate the basic concept, and you can further customize the layout by adjusting other flex properties like `justify-content` and `align-items` to achieve your desired design.

</details>

### 9. Justify-content allows you to do what?

<details>
    <summary>Answer:</summary>
</details>

### 10. display inline, block, inline-block ?

<details>
    <summary>Answer:</summary>
</details>

### 11. position: sticky and fixed?

<details>
    <summary>Answer:</summary>
</details>

### 12. justify-content :center and align-item :center?

<details>
    <summary>Answer:</summary>
</details>

### 13. center one div

<details>
    <summary>Answer:</summary>
</details>

### 14. display flex vd display grid

<details>
    <summary>Answer:</summary>
</details>

### 15. What is the z-index in CSS?

<details>
    <summary>Answer:</summary>
</details>