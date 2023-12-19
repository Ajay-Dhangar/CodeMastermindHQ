---
id: what-is-javascript
title: What is JavaScript?
sidebar_label: What is JavaScript?
date: 2022-05-11 16:49:29
sidebar_position: 3
tags: [JavaScript]
---

![What is JavaScript?](./img/what-is-javascript.png)

### JavaScript (JS):
JavaScript is a versatile and widely used programming language that enables dynamic, interactive, and client-side scripting on web pages. It allows developers to create engaging user experiences by manipulating and modifying the content of web pages in real-time.

### Key Concepts:

- JavaScript is a scripting, high-level, interpreted programming language.
- Js is a programming language that adds interactivity to your website.
- Js is a lightweight, interpreted programming language.
- Js is client-side and server-side programming language.
- Js is an Object-based Scripting Language.
- Js is a prototype-based scripting language.
- Js is a dynamic scripting language.
- Js is a weakly typed scripting language.
- Js is a case-sensitive scripting language.
- Js is not a compiled language, but it is a translated language.
- Js is an open and cross-platform scripting language.
- Js is a popular client-side scripting language.
- Js is an interpreted programming language.
- Js is a text-based programming language.
- Js's syntax is loosely based on Java's.
- is widely used for client-side validation.
- Js is most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.
- In the world of programming, JavaScript is the most popular language.

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