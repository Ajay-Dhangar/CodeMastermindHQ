---
id: functions-scope
title: Functions and Scope
sidebar_position: 4
tags: [JavaScript basics, Functions and scope, JavaScript function declaration, Function return values, Local and global scope, JavaScript function expressions, Scope in JavaScript programming, JavaScript function examples, Understanding JavaScript functions, JavaScript scope management, Reusable code in JavaScript]
sidebar_label: Functions & Scope
---

## Functions:

Functions are an essential part of JavaScript. They allow you to encapsulate a block of code and reuse it with different inputs. In Node.js, as well as in web development, functions play a crucial role in structuring your code.

### Function Declaration:

A function can be declared with the `function` keyword. Here's a basic example:

```js title="index.js"
function greet(name) {
  console.log("Hello, " + name + "!");
}
```

In this example, we declare a function called `greet` that takes one parameter, `name`. When you call this function with a name as an argument, it prints a greeting to the console.

### Calling Functions:

To execute a function, you simply call it by its name and provide any required arguments. For example:

```js title="index.js"
greet("Ajay");
```

This call to the `greet` function will output: "Hello, Ajay!"

### Return Values:

Functions can also return values using the `return` statement. For instance:

```js title="index.js"
function add(a, b) {
  return a + b;
}
```

In this example, the `add` function takes two arguments, `a` and `b`, and returns their sum. You can use the return value like this:

```js title="index.js"
let result = add(3, 5);
console.log(result); // Outputs 8
```

## Function Scope:

JavaScript has a concept of scope, which determines where a variable is accessible. Understanding scope is crucial when working with functions.

- **Global Scope:** Variables declared outside of any function are in the global scope. They can be accessed from anywhere in your code.

- **Local Scope:** Variables declared inside a function are in the local scope. They are only accessible within that function.

Example:

```js title="index.js"
let globalVar = "I'm global";

function exampleFunction() {
  let localVar = "I'm local";
  console.log(localVar); // Accesses the local variable
  console.log(globalVar); // Accesses the global variable
}

exampleFunction();
console.log(localVar); // Error: localVar is not defined
```

In this example, `localVar` is declared within the `exampleFunction`, so it's only accessible inside the function. On the other hand, `globalVar` is accessible from both within and outside the function because it's in the global scope.

Understanding scope helps you avoid naming conflicts and ensures your code behaves as expected.

## Function Expressions:

Functions can also be defined using function expressions. Here's an example of an anonymous function:

```js title="index.js"
const greet = function(name) {
  console.log("Hello, " + name + "!");
};
```

In this case, we define the `greet` function as an anonymous function and assign it to the variable `greet`. You can call it in the same way as a declared function:

```js title="index.js"
greet("Bob");
```

This concept is particularly useful when passing functions as arguments to other functions, a common practice in Node.js for asynchronous operations.

Understanding functions and scope is essential for writing organized and efficient Node.js code. It enables you to create reusable code blocks, manage data effectively, and avoid conflicts between variables.