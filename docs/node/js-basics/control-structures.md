---
id: control-structures
title: Control Structures (if statements, loops)
sidebar_position: 3
tags: [JavaScript control structures, If statements in JavaScript, JavaScript loops, If-else statements in Node.js, Switch-case statements in JavaScript, Do-while loop in Node.js, While loop in JavaScript, For loop in Node.js, Conditional statements in programming, JavaScript loop examples, Looping in Node.js, Control flow in Node.js, JavaScript branching statements, Looping constructs in programming, JavaScript decision-making structures, JavaScript control structures, if statements in JavaScript, JavaScript loops, Conditional statements, Looping in JavaScript, Decision-making in JavaScript, for and while loops]
description: Master JavaScript control structures, including if statements and loops. Learn how to make decisions and create loops for your code.
sidebar_label: 🧑‍💻Control Structures
---

Control structures are essential for managing the flow of your code. They allow you to make decisions, repeat tasks, and control the execution of your program. In this section, we'll explore various control structures in JavaScript.

### If Statements:

- The `if` statement is used to execute a block of code if a condition is true.
- `if` Statements are used for conditional execution of code. You can execute a block of code if a specified condition is true.

Example:
```js title="index.js"
let age = 18;

if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");
}
```

### Switch Case:

The `switch` statement allows you to compare a value against multiple possible case values and execute a block of code corresponding to the matched case.

Example:
```js title="index.js"
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend.");
    break;
  default:
    console.log("It's a regular day.");
}
```

### Do-While Loop:

The `do-while` loop is used to execute a block of code at least once, and then the condition is checked.

Example:
```js title="index.js"
let count = 0;

do {
  console.log("Count: " + count);
  count++;
} while (count < 3);
```

### While Loop:

The `while` loop is used to repeatedly execute a block of code as long as a condition is true.

Example:
```js title="index.js"
let count = 0;

while (count < 3) {
  console.log("Count: " + count);
  count++;
}
```

### For Loop:

The `for` loop is used to iterate a specific number of times.

Example:
```js title="index.js"
for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}
```

These control structures are fundamental for directing the flow of your JavaScript code. They allow you to make decisions, handle various cases, and create loops to perform repetitive tasks. Understanding and using these structures is crucial for writing effective JavaScript programs.