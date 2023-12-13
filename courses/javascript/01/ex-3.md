---
id: what-is-javascript
title: What is JavaScript?
sidebar_label: What is JavaScript?
date: 2022-05-11 16:49:29
sidebar_position: 3
tags: [JavaScript]
---

### JavaScript (JS):
JavaScript is a versatile and widely used programming language that enables dynamic, interactive, and client-side scripting on web pages. It allows developers to create engaging user experiences by manipulating and modifying the content of web pages in real-time.

**Key Concepts:**

- JavaScript is a high-level, interpreted programming language.
- It was initially created to make web pages more interactive.
- JavaScript is primarily a scripting language, executed on the client-side by web browsers.
- Enables the creation of dynamic and interactive web pages.
- Facilitates real-time updates without the need for page reloads.
- It is a multi-paradigm language that supports object-oriented, imperative, and functional programming styles.

:::note
**.js:** JavaScript files typically have a `.js` extension. This is the standard and most common extension for JavaScript files.
:::

### Basic Code and Explanation:

```js title="index.js"
// Hello, World! in JavaScript
console.log("Hello, World!");

// Variables and Data Types
let num = 42; // Number
let text = "Hello, CodeMastermind!"; // String
let isTrue = true; // Boolean

// Functions
function greet(name) {
  return "Hello, " + name + "!";
}

// Conditional Statements
let hour = new Date().getHours();
if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

// Arrays
let fruits = ["apple", "banana", "orange"];

// Objects
let person = {
  name: "John Doe",
  age: 25,
  occupation: "Developer"
};

// DOM Manipulation (Example: changing text content)
let element = document.getElementById("myElement");
element.textContent = "New Text Content";
```

### Explanation:

1. **Hello, World!:**
   - `console.log` is used to print messages to the browser console.

2. **Variables and Data Types:**
   - `let` is used to declare variables.
   - JavaScript supports various data types such as numbers, strings, and booleans.

3. **Functions:**
   - Functions encapsulate reusable pieces of code. The `greet` function takes a parameter `name` and returns a greeting.

4. **Conditional Statements:**
   - `if`, `else if`, and `else` are used for conditional logic based on the current time.

5. **Loops:**
   - `for` loop iterates five times, printing the current iteration number.

6. **Arrays:**
   - Arrays hold collections of values (fruits in this case).

7. **Objects:**
   - Objects group related data together (person details).

8. **DOM Manipulation:**
   - Interacting with the Document Object Model (DOM) allows dynamic changes to webpage content. In this case, it changes the text content of an element with the ID "myElement."
