---
id: variable-data-type
title: Variables and Data Types
sidebar_position: 1
sidebar_label: Variables & Data Types
---

## Variables in JavaScript:

In JavaScript, variables are used to store and manage data. They serve as containers that hold values. You can declare variables using three different keywords: `var`, `let`, and `const`. Each has its own characteristics:

- `var`: This was the original way to declare variables in JavaScript, but it has some quirks and is now less commonly used. Variables declared with `var` have function scope, meaning they are accessible within the function in which they are declared.

- `let`: Introduced in ECMAScript 6 (ES6), `let` provides block-level scoping. Variables declared with `let` are limited in scope to the block, statement, or expression where they are defined. This helps prevent unintended variable leakage.

- `const`: Also introduced in ES6, `const` is used to declare variables that should never be reassigned after their initial assignment. They also have block-level scope, like variables declared with `let`.

## Data Types in JavaScript:

JavaScript supports various data types, each with a specific purpose. Understanding these data types is crucial for effectively working with data in your programs.

1. **String**: Strings are sequences of characters enclosed in single or double quotes.

   Example:
   ```javascript
   let greeting = "Hello, World!";
   ```

2. **Number**: Numbers can be integers or floating-point numbers.

   Example:
   ```javascript
   let age = 30;
   let pi = 3.14;
   ```

3. **Boolean**: Booleans represent binary values, either `true` or `false`.

   Example:
   ```javascript
   let isStudent = true;
   ```

4. **Array**: Arrays are ordered lists of values. They can hold elements of different data types.

   Example:
   ```javascript
   let colors = ["red", "green", "blue"];
   ```

5. **Object**: Objects are collections of key-value pairs and are used to represent complex data structures.

   Example:
   ```javascript
   let person = {
     name: "Alice",
     age: 25,
   };
   ```

6. **Null**: `null` is a special value that represents the absence of any object value.

   Example:
   ```javascript
   let emptyValue = null;
   ```

7. **Undefined**: When a variable is declared but not assigned a value, it is considered `undefined`.

   Example:
   ```javascript
   let notDefined;
   ```

These data types are the building blocks of your JavaScript programs. Understanding how to use and manipulate them is essential for creating meaningful and functional applications. In the following sections of this module, we'll explore how to work with these data types and variables effectively.
