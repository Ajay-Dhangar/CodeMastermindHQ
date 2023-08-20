---
id: html-interview-day-7
title: HTML Interview Day 7
sidebar_label: Day 7
description: Linking Resources, APIs, and Web Components
date: 2023-05-11 16:49:29
sidebar_position: 7

---

```mdx-code-block
import HtmlWindow from '@site/src/components/HtmlWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
import GeolocationExample from './GeolocationExample'
```

### 1. How can you include external CSS and JavaScript files in an HTML document?

<details>
    <summary>Answer:</summary>

Including external CSS and JavaScript files in an HTML document is a common practice in web development. Here's a simple explanation with examples for your interview:

**Including External CSS:**
CSS files are used to style your HTML content. To include an external CSS file in an HTML document, you use the `<link>` tag in the `<head>` section of your HTML document. Here's how it works:

1. Create an external CSS file (e.g., `styles.css`) with your CSS rules.

2. In your HTML document, within the `<head>` section, add the following line:

   ```html
   <link rel="stylesheet" type="text/css" href="./styles.css">
   ```

   - `rel="stylesheet"` tells the browser that this is a stylesheet.
   - `type="text/css"` specifies the type of content.
   - `href="styles.css"` provides the path to your CSS file.

**Including External JavaScript:**
JavaScript files add interactivity and functionality to your HTML. To include an external JavaScript file, you use the `<script>` tag, typically placed at the end of the `<body>` section of your HTML document. Here's how it works:

1. Create an external JavaScript file (e.g., `script.js`) with your JavaScript code.

2. In your HTML document, just before the closing `</body>` tag, add the following line:

   ```html
   <script src="./script.js"></script>
   ```

   - `src="script.js"` provides the path to your JavaScript file.

Here's a simple HTML example that includes both an external CSS file and an external JavaScript file:

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>My Web Page</title>
    <link rel="stylesheet" type="text/css" href="./styles.css">
</head>
<body>
    <h1>Welcome to My Web Page</h1>
    <p>This is some content.</p>

    <script src="./script.js"></script>
</body>
</html>
```

In this example, the HTML document links to an external CSS file (`styles.css`) for styling and an external JavaScript file (`script.js`) for adding functionality to the web page.

</details>

### 2. What is the difference between a relative path and an absolute path when linking resources?

<details>
    <summary>Answer:</summary>

The difference between relative and absolute paths

|    | Relative Path                         | Absolute Path                                       |
|:---|:-------------------------------------|:----------------------------------------------------|
| Definition | A path that starts from the current location of the file. | A complete path that starts from the root directory. |
| Example | If your file is in the same folder as the image: `images/pic.jpg` | The complete path to the image: `/home/user/images/pic.jpg` |
| Use Case | Useful when linking resources within the same project or directory. | Necessary when linking resources from a different directory or domain. |
| Flexibility | May change based on the file's location, making it more adaptable. | Remains the same regardless of the file's location. |
| Complexity | Simpler to write and understand. | Can be longer and might require manual adjustments. |

In simpler terms:
- **Relative Path**: It's like giving directions based on where you currently are. For example, "Go two steps to the right, then up one step."
- **Absolute Path**: It's like giving directions starting from a fixed point, like your home. For example, "Start from your home, go two blocks to the right, and then turn left."

:::tip
Remember, the choice between relative and absolute paths depends on the situation. Use relative paths when linking resources within your project, and use absolute paths when linking resources from different locations or domains.
:::

</details>

### 3. Explain the Geolocation API in HTML5 and its use cases.

<details>
    <summary>Answer:</summary>

**Geolocation API in HTML5 - Simple Explanation:**

The Geolocation API in HTML5 is like a magic tool for websites to figure out where a person is in the world. Imagine you have a treasure map, and the Geolocation API helps the website find the "X marks the spot" where you are right now. This way, websites can show you location-specific information or help you find directions.

**Use Cases - Let's Break It Down:**

1. **Mapping and Navigation:**
   Suppose you're using a map website. When you click on "Find my location," the Geolocation API uses your device's GPS (or other location methods) to find where you are. The map then shows a marker at your spot, helping you figure out where you are and where you want to go.

2. **Local Services:**
   Let's say you're looking for a nearby restaurant. The Geolocation API helps the restaurant finder app know where you are. It then shows you restaurants close to you, making it easier to decide where to eat.

3. **Weather Updates:**
   Imagine you're visiting a weather website. The Geolocation API can detect your location and provide you with weather information specific to where you are. So you'll know whether to bring an umbrella or wear sunscreen.

**Simple Example:**

Let's consider a simple example of a weather website using the Geolocation API:

1. **User Opens the Website:**
   You visit a weather website. The website wants to know where you are to show you accurate weather information.

2. **Website Asks for Permission:**
   The website asks your browser, "Hey, can I know your location?" Your browser checks with you and asks if it's okay for the website to know where you are.

3. **You Give Permission:**
   You agree and say, "Sure, you can know where I am." Your browser now tells the website that it's allowed to use the Geolocation API.

4. **API Gets Your Location:**
   The Geolocation API in the website uses your device's GPS or other methods to find your location. It figures out that you're in a specific city.

5. **Weather Information Displayed:**
   The website uses your location to fetch the weather information for your city. It shows you the current temperature, whether it's sunny or rainy, and so on.

6. **You Get Accurate Weather:**
   Now you know what the weather is like right where you are, thanks to the Geolocation API!

**For Example:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Geolocation Example</title>
</head>
<body>
  <h1>Your Current Location</h1>
  <p id="location">Getting your location...</p>

  <script>
    // Check if the browser supports Geolocation API
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Update the HTML element with user's location
        var locationElement = document.getElementById("location");
        locationElement.textContent = "Latitude: " + latitude + ", Longitude: " + longitude;
      }, function(error) {
        // Handle error
        var locationElement = document.getElementById("location");
        locationElement.textContent = "Error getting location: " + error.message;
      });
    } else {
      // Geolocation not supported by browser
      var locationElement = document.getElementById("location");
      locationElement.textContent = "Geolocation not supported by your browser";
    }
  </script>
</body>
</html>
```

<HtmlWindow>
   <GeolocationExample />
</HtmlWindow>

:::tip
Remember, the Geolocation API makes it easier for websites to give you location-specific information without you having to type in your location manually. It's like a helpful assistant that uses your device's capabilities to make your online experiences more convenient and relevant.
:::

</details>

### 4. Describe the Web Storage API and the differences between `localStorage` and `sessionStorage`.

<details>
    <summary>Answer:</summary>

**Web Storage API:**

The Web Storage API is a feature in modern web browsers that allows you to store data on the client's side (in the browser) in a key-value format. This data is persistent even if the user closes their browser. It's a handy tool for storing information temporarily or for a longer period without relying on server-side storage.

**Example:**

Let's say you're building a simple to-do list app. You can use the Web Storage API to save the user's to-do items locally so that they can access them the next time they visit the app.

```javascript
// Storing a to-do item in localStorage
localStorage.setItem('todo1', 'Buy groceries');

// Retrieving a to-do item from localStorage
const todo = localStorage.getItem('todo1');
console.log(todo); // Output: "Buy groceries"
```

**Differences between `localStorage` and `sessionStorage` :**

| **Aspect**       | **localStorage**                      | **sessionStorage**                    |
|:-----------------|:--------------------------------------|:--------------------------------------|
| **Data Lifespan**| Persists even after the browser closes| Cleared when the browser tab is closed|
| **Storage Size** | Larger storage capacity (~5-10 MB)    | Smaller storage capacity (~5 MB)      |
| **Scope**        | Available across tabs and windows     | Limited to the same tab or window     |
| **Sharing**      | Data shared among tabs and windows    | Data not shared among tabs/windows    |
| **Usage**        | User preferences, cached data, etc.   | Short-term data, like form inputs     |


</details>
