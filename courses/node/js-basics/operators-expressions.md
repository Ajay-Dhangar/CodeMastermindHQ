---
id: operators-expressions
title: Operators and Expressions
sidebar_position: 2
tags: [JavaScript operators, Arithmetic operators, Comparison operators, Logical operators, Assignment operators, Concatenation in JavaScript, JavaScript expressions]
description: Explore JavaScript operators and expressions in this detailed tutorial. Learn about arithmetic, comparison, logical operators, and more.
sidebar_label: 🧑‍💻Operators & Expressions
---

## Operators in JavaScript:

Operators are used to perform operations on variables and values. They allow you to work with data in various ways.

- **Arithmetic Operators**: These operators are used for basic math operations.
  - `+` (Addition): Adds two numbers.
  - `-` (Subtraction): Subtracts the second number from the first.
  - `*` (Multiplication): Multiplies two numbers.
  - `/` (Division): Divides the first number by the second.
  - `%` (Modulus): Returns the remainder of the division of the first number by the second.

  Example:
  ```javascript
  let x = 10;
  let y = 5;
  let sum = x + y; // Result: 15
  let difference = x - y; // Result: 5
  let product = x * y; // Result: 50
  let quotient = x / y; // Result: 2
  let remainder = x % y; // Result: 0
  ```

- **Comparison Operators**: These operators compare two values and return a Boolean result.
  - `==` (Equal): Checks if two values are equal.
  - `===` (Strict Equal): Checks if two values are equal in both value and type.
  - `!=` (Not Equal): Checks if two values are not equal.
  - `>` (Greater Than): Checks if the left value is greater than the right.
  - `<` (Less Than): Checks if the left value is less than the right.
  - `>=` (Greater Than or Equal): Checks if the left value is greater than or equal to the right.
  - `<=` (Less Than or Equal): Checks if the left value is less than or equal to the right.

  Example:
  ```js
  let a = 5;
  let b = "5";
  let c = 7;
  console.log(a == b); // true (values are equal)
  console.log(a === b); // false (values are equal, but types are different)
  console.log(a != c); // true (values are not equal)
  console.log(a > c); // false (a is not greater than c)
  ```

- **Logical Operators**: These operators are used to perform logical operations.
  - `&&` (Logical AND): Returns `true` if both conditions are `true`.
  - `||` (Logical OR): Returns `true` if at least one condition is `true`.
  - `!` (Logical NOT): Negates a condition.

  Example:
  ```javascript
  let isTrue = true;
  let isFalse = false;
  console.log(isTrue && isFalse); // false (both conditions are not true)
  console.log(isTrue || isFalse); // true (at least one condition is true)
  console.log(!isTrue); // false (negation of true)
  ```

- **Assignment Operators**: These operators assign values to variables.
  - `=` (Assignment): Assigns a value to a variable.
  - `+=` (Addition Assignment): Adds the right value to the variable's current value.
  - `-=` (Subtraction Assignment): Subtracts the right value from the variable's current value.
  - `*=` (Multiplication Assignment): Multiplies the variable's current value by the right value.
  - `/=` (Division Assignment): Divides the variable's current value by the right value.

  Example:
  ```javascript
  let num = 10;
  num += 5; // num is now 15
  num -= 3; // num is now 12
  num *= 2; // num is now 24
  num /= 4; // num is now 6
  ```

- **Concatenation Operator**: The `+` operator can also be used for string concatenation.

  Example:
  ```javascript
  let name = "John";
  let greeting = "Hello, " + name + "!";
  console.log(greeting); // Result: "Hello, John!"
  ```

These operators are essential for performing various operations and calculations in JavaScript. Understanding them is crucial for developing applications in Node.js or any other JavaScript-based environment.

Let's cover expressions in JavaScript:

## Expressions in JavaScript:

An expression is a piece of code that produces a value. It can be a single value, a variable, or a combination of values and operators.

**Basic Expressions:**

- **Arithmetic Expressions**: Combine numbers and arithmetic operators to produce numeric results.

  Example:
  ```js
  let x = 10;
  let y = 5;
  let sum = x + y; // Result: 15
  let product = x * y; // Result: 50
  ```

- **String Expressions**: Combine strings using the `+` operator for concatenation.

  Example:
  ```js
  let name = "John";
  let greeting = "Hello, " + name + "!";
  console.log(greeting); // Result: "Hello, John!"
  ```

**Comparison Expressions:**

- **Comparison Expressions**: Use comparison operators to compare values, which result in `true` or `false`.

  Example:
  ```javascript
  let a = 5;
  let b = 7;
  let isGreaterThan = a > b; // Result: false
  ```

**Logical Expressions:**

- **Logical Expressions**: Combine logical values (`true` or `false`) using logical operators.

  Example:
  ```javascript
  let isTrue = true;
  let isFalse = false;
  let bothTrue = isTrue && isTrue; // Result: true
  ```

**Function Call Expressions:**

- **Function Call Expressions**: Call a function to produce a result.

  Example:
  ```javascript
  function add(x, y) {
    return x + y;
  }

  let result = add(3, 4); // Result: 7
  ```

**Complex Expressions:**

- **Complex Expressions**: Expressions can become more complex by combining multiple operators and values.

  Example:
  ```javascript
  let complexExpression = (5 * 2 + 3) / 4; // Result: 3.25
  ```

**Assignment Expressions:**

- **Assignment Expressions**: Assign the result of an expression to a variable.

  Example:
  ```javascript
  let x = 5;
  x = x + 3; // Assigns the result of the expression (5 + 3) to x
  ```

Expressions are the building blocks of JavaScript. They allow you to perform calculations, manipulate data, and make decisions in your code. Understanding how expressions work is essential for effective programming in Node.js and JavaScript in general.

## Operators V/S Expressions

**The differences between operators and expressions in JavaScript:**

| Feature                   | Operators                              | Expressions                           |
|:-------------------------:|:-------------------------------------:|:-------------------------------------:|
| Purpose                   | Perform operations on variables and values | Combinations of variables, values, and operators that produce a value. |
| Examples                  | `+`, `-`, `*`, `/`, `%`, `==`, `===`, `!=`, `>`, `<`, `>=`, `<=`, `&&`, `||`, `!`, `=`, `+=`, `-=` | `x + y`, `age > 18`, `name + " " + lastName`, `result = a * b + c`, `!(x === y)` |
| Return Value              | Typically returns a value or Boolean result | Produces a value (can be a number, string, Boolean, etc.) |
| Usage                     | Used to perform specific operations on variables and values | Formed by combining operators and variables/values to create complex computations. |
| Assignment Operators      | Used to assign values to variables (e.g., `=` for assignment, `+=` for addition assignment) | Not used for assignment; expressions do not modify variables. |
| Logical Operations        | Used to perform logical operations (e.g., `&&` for AND, `||` for OR, `!` for NOT) | Not used for logical operations; expressions can contain logical conditions. |
| Example                   | `let sum = x + y;`                      | `let result = (a + b) * c;`            |

Operators are used to perform specific operations on variables and values, such as arithmetic, comparison, and logical operations. They typically return a value or Boolean result.

Expressions, on the other hand, are combinations of variables, values, and operators that produce a value. They are not used for assignment or logical operations but are used to create complex computations by combining operators and values or variables.