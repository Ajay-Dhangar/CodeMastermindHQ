---
id: variables-values-data-types
title: Variables, Values and Data Types
sidebar_label: Variables & Values & Data Types
date: 2022-05-11 16:49:29
sidebar_position: 5
tags: [JavaScript, variables, values, data-types]
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

![Variables, Values and Data Types](./img/variables-values-data-types.png)

## 1. What are Variables?
- Variables are containers for storing data (values).
- In programming, variables serve as containers for storing and managing data. They allow developers to name a piece of data and manipulate it throughout the program.

<details>

  <summary><h3>1. How to Declare Variables</h3></summary>

  - Declaring a variable in JavaScript is similar to declaring a variable in most programming languages.
  - For example, to declare a variable called age, you use the `let` keyword as follows:
      ```js title="index.js"
      let age;
      ```
  - The `let` keyword tells the JavaScript engine that you want to declare a variable.
  - The age is the name of the variable.
  - The variable name must be a valid JavaScript identifier.
  - The semicolon (`;`) is used to separate statements in JavaScript.

</details> 

<details>

  <summary><h3>2. How to Assign Values to Variables</h3></summary>

  - Assigning a value to a variable involves using the assignment operator (`=`). It associates a value with the declared variable.
  - To assign a value to a variable, you use the assignment operator (=).

    **Example:**
    ```js title="index.js"
    age = 22;
    ```
  - In this statement, we assigned the value 22 to the variable age.
  - The JavaScript engine will automatically determine the data type of the value and assign it to the variable.
  - In this case, the value 22 is a number, so the JavaScript engine will assign the number data type to the variable age.
  - (You can also declare and assign a value to a variable in a single statement as follows: `let age = 22;`)  

</details>

<details>

  <summary><h3>3. How to re-assign values to variables</h3></summary>

  - You can re-assign a value to a variable as follows: `age = 30;`
  - In this statement, we re-assigned the value 30 to the variable age.
  - The JavaScript engine will automatically determine the data type of the value and assign it to the variable.
  - In this case, the value 30 is a number, so the JavaScript engine will assign the number data type to the variable age.

    **example:**

    ```js title="index.js"
    age = 30;
    ```

</details>  

<details>

  <summary><h3>4. How to declare multiple variables in one line</h3></summary>
    
 You can declare multiple variables in a single line, separating them with commas. 

 **Example:** 

   ```js title="index.js"
   let age, name;
   ``` 

 **Explaination:** In this statement, we declared two variables: age and name.

</details> 

<details>

  <summary><h3>5. How to declare variables with var, let and const keywords</h3></summary>

  - In JavaScript, you can declare variables using three keywords: `var`, `let`, and `const`.
  - The `var` keyword is the old way of declaring variables in JavaScript.
  - The `let` and `const` keywords are the new ways of declaring variables in JavaScript.
  - The `let` and `const` keywords were introduced in ES6 (ECMAScript 2015).

    **Example:**

    <Tabs
      defaultValue="var"
      values={[
        { label: 'var', value: 'var' },
        { label: 'let', value: 'let' },
        { label: 'const', value: 'const' },
      ]}
    >

    <TabItem value="var" label="var">

    ```js
    var name = 'Ajay';
    console.log(name); // Ajay
    ```

    </TabItem>

    <TabItem value="let" label="let">

    ```js
    let name = 'Ajay';
    console.log(name); // Ajay
    ```

    </TabItem>

    <TabItem value="const" label="const">

    ```js
    const name = 'Ajay';
    console.log(name); // Ajay
    ```

    </TabItem>

    </Tabs>   

</details> 

## 2. What are data types

Data types in JavaScript essentially categorize the different kinds of values that can be stored and manipulated in a program. Choosing the right data type for your variables and data structures is crucial for ensuring efficient and error-free code.

***Here's a breakdown of the core data types in JavaScript:***

1. Primitive Data Types
2. Non-Primitive Data Types

<details>

  <summary><h3>1. What are primitive data types?</h3></summary>

**Primitive data types** in JavaScript are immutable values that are directly stored in memory. There are seven primitive data types: number, string, boolean, undefined, null, symbol, and bigint. 

***Here's a breakdown with examples:***

- **Number:** Represents numeric values like integers, decimals, and exponentials.

  ```js title="index.js"
  let age = 25; // integer
  let temperature = 37.5; // decimal
  let scientificNumber = 2.5e10; // exponent

  console.log(typeof age); // "number"
  console.log(age + 10); // 35 (addition)
  ```

- **String:** Represents sequences of characters enclosed in quotes (e.g., "Hello").
  ```js title="index.js"
  let name = "Ajay"; // characters enclosed in quotes
  let message = "Hello, world!";

  console.log(typeof name); // "string"
  console.log(name.toUpperCase()); // "AJAY" (string in uppercase) (string method)
  ```

- **Boolean:** Holds either true or false values, representing logical states.
  ```js title="index.js"
  let isLoggedIn = true; // true or false values
  let isValid = false;

  console.log(typeof isLoggedIn); // "boolean"
  console.log(isLoggedIn && isValid); // false (logical AND)
  ```

- **Undefined:** Indicates the absence of a value or an unassigned variable.
  ```js title="index.js"
  let uninitializedVariable; // not yet assigned a value

  console.log(typeof uninitializedVariable); // "undefined"
  ```

- **Null:** Represents the intentional absence of a value, distinct from undefined.
  ```js title="index.js"
  let emptyValue = null; // intentional absence of a value

  console.log(typeof emptyValue); // "object" (surprising, but true!)
  console.log(emptyValue === undefined); // false (distinct from undefined)
  ```

- **Symbol:** Unique and immutable identifiers (e.g., used for internal object properties).
  ```js title="index.js"
  let uniqueId = Symbol(); // unique identifier

  const obj = { [uniqueId]: "secret data" }; // using symbol as key

  console.log(typeof uniqueId); // "symbol"
  console.log(obj[uniqueId]); // "secret data" (accessing symbol property)
  ```

- **7. BigInt (ES2020+):** Represents integers beyond the safe integer limit. 

```js title="index.js"
const bigNumber = 9007199254740991n; // integer beyond regular number limits

console.log(typeof bigNumber); // "bigint"

let sum = bigNumber + 1n; // 9007199254740992n (addition with BigInt)
```

These examples showcase how each primitive data type holds different kinds of information and operates in specific ways. Choosing the right type for your data ensures clear, efficient, and error-free code.

</details>

<details>

  <summary><h3>2. What are non-primitive data types?</h3></summary>

**Non-primitive data types** in JavaScript represent complex, mutable values that hold and organize collections of data or define functionalities. Unlike primitive types, they store references to data structures in memory, and multiple variables can reference the same object or array. Here's a breakdown with examples:

**1. Objects:**

Imagine a  `person` object that stores all relevant information about someone:

```js title="index.js"
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
  skills: ["JavaScript", "Python", "C++"],
  greet: function() {
    console.log(`Hello! My name is ${this.name}`);
  }
};

person.age++; // Mutates age property of the same object
const anotherPerson = person; // Both variables share the same object in memory

person.greet(); // Outputs "Hello! My name is John Doe"
```

Here, `person` is an object with key-value pairs defining various properties. You can access and modify these properties, and even define functions like `greet` within the object.

**2. Arrays:**

Think of an array as an ordered list of values, like a grocery shopping list:

```js title="index.js"
const shoppingList = ["apples", "bread", "milk", "eggs"];

shoppingList.push("cookies"); // Adds "cookies" to the end

console.log(shoppingList[2]); // Outputs "milk"

for (const item of shoppingList) {
  console.log(`Adding ${item} to the cart`);
}
```

This array stores string values in order, and you can add, remove, or access items using various methods and loops.

**3. Functions:**

Functions are blocks of code that define reusable operations, like calculating the area of a rectangle:

```js title="index.js"
function areaOfRectangle(width, height) {
  return width * height;
}

const rectangleArea = areaOfRectangle(5, 3); // Stores the calculated area (15)

console.log(`The area of the rectangle is ${rectangleArea}`);
```

In this example, `areaOfRectangle` defines a function that takes two arguments and returns the calculated area.

Remember, **objects, arrays, and functions are all non-primitive data types with distinct functionalities and uses**. You can combine them to build complex data structures and programs in JavaScript.

</details>

<details>

  <summary><h3>Understanding the Key Differences:</h3></summary>

- **Primitive data types:** These are simple, immutable values stored directly in memory. Each primitive value has its own distinct copy.
- **Non-primitive data types:** These are complex, mutable values stored as references in memory. Multiple variables can reference the same object or array.

</details>

<details>

  <summary><h3>Choosing the Right Data Type:</h3></summary>

- Use numbers for calculations and representing numeric data.
- Use strings for text, user input, and representing character data.
- Use booleans for representing true/false conditions.
- Use objects to store complex data structures with organized properties.
- Use arrays to store ordered collections of data.
- Use functions to define reusable operations on data.

</details>

<details>

  <summary><h3>What are the differences between primitive and non-primitive data types</h3></summary>


|      Feature       | Primitive                     | Non-primitive                 |
|--------------------|-------------------------------|-------------------------------|
| Stored In          | Stored directly in a variable | Stored as a reference         |
| Immutable          | Yes                           | No                            |
| Copy By Value      | Yes                           | No                            |
| Examples           | Number, String, Boolean, Null, Undefined, Symbol | Object, Array, Function, Date, RegExp, Error |
| Type of typeof     | Primitive                     | Non-primitive                 |
| Type of instanceof | Primitive                     | Non-primitive                 |
| Type of constructor| Primitive                     | Non-primitive                 |
| Type of isPrimitive| Yes                           | No                            |
| Type of isArray    | No                            | Yes                           |
| Type of isFunction | No                            | Yes                           |
| Type of isDate     | No                            | Yes                           |
| Type of isRegExp   | No                            | Yes                           |
| Type of isError    | No                            | Yes                           |
| Type of isObject   | No                            | Yes                           |
| Type of isSymbol   | No                            | Yes                           |
| Type of isUndefined| No                            | Yes                           |

</details>

## 3. What are the differences between `let` and `const` and `var` keywords

| Feature            | `let`                  | `const`                  | `var`                  |
|--------------------|------------------------|--------------------------|------------------------|
| Scope              | Block                  | Block                    | Function               |
| Re-assignable      | Yes                    | No                       | Yes                    |
| Redeclarable       | No                     | No                       | Yes                    |
| Hoisting           | No                     | No                       | Yes                    |
| Temporal Dead Zone | Yes                    | Yes                      | No                     |
| Examples           | `let age = 20;`        | `const age = 20;`        | `var age = 20;`        |


## 4. What is Expressions in JavaScript

JavaScript expressions are mini-calculations that produce a single value. They combine numbers, strings, variables, and operators like math equations or formulas. 

They're used for calculations, comparisons, assigning values, and even controlling program flow. Remember PEMDAS for order of operations and use parentheses for clarity.

## 5. What is Statements in JavaScript

Statements are complete lines of code that perform specific tasks. Declarations, assignments, conditionals, and loops are examples of statements.

**Example:**

```js title="index.js"
let age = 20;
if (age > 18) {
    console.log('You are an adult.');
}
```

## 6. What are the differences between Expressions and Statements in JavaScript

| Feature            | Expression              | Statement               |
|--------------------|-------------------------|-------------------------|
| Produces a value   | Yes                     | No                      |
| Ends with a semicolon | Yes                   | Yes                     |
| Can be used as part of another expression | Yes | Yes                 |
| Can contain other expressions | Yes           | Yes                     |
|Examples           | `5 + 3`, `age > 18`     | `let age = 20;`, `if (age > 18) { ... }` |


## 7. Evaluating Code in JavaScript

| Phase              | Parsing                 | Execution               |
|--------------------|-------------------------|-------------------------|
| Description        | Converts code into AST  | Follows AST to execute  |

JavaScript code is evaluated in two phases: parsing and execution. During parsing, the code is converted into an Abstract Syntax Tree (AST), and in the execution phase, the interpreter follows the AST to execute the code.

Understanding this process is fundamental to comprehending how JavaScript code is executed.


## 8. What is Hoisting in JavaScript

**Hoisting** is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the parsing phase. This means that you can use a variable or call a function before it's declared in the code. However, it's essential to understand that only the declarations are hoisted, not the initializations.

**Example:**
```js title="hoisting.js"
console.log(age); // Output: undefined
var age = 23;
console.log(age); // Output: 23        
```

In the above example, even though `age` is used before its declaration, it doesn't throw an error. This is because the declaration of `age `is hoisted to the top of its scope.

### Function Hoisting:

```js title="hoisting.js"
greet(); // Output: "Hello!"
function greet() {
    console.log("Hello!");
}
```

Similarly, function declarations are also hoisted. The `greet()` function can be called before its declaration in the code.

## 9. What is TDZ (Temporal Dead Zone) in JavaScript

**TDZ** is a specific phase during the execution of JavaScript code when a variable declared with `let` or `const` is in an uninitialized state and cannot be accessed. It occurs between the start of the scope (block or function) and the actual declaration of the variable.

**Example:**
```js title="tdz.js"
console.log(age); // Throws an error: ReferenceError
let age = 20;
```

## 10. Differences Between Hoisting and TDZ

| Feature                             | Hoisting                                          | Temporal Dead Zone (TDZ)                       |
|-------------------------------------|---------------------------------------------------|------------------------------------------------|
| Scope of Application                | Applies to `var` and function declarations       | Applies specifically to `let` and `const` declarations   |
| Access During Declaration           | Allows access before declaration                 | Prevents access during the TDZ phase            |
| Error Handling                      | Does not throw an error during access before declaration | Throws a `ReferenceError` during access in the TDZ |
| Initialization                      | Variables are initialized with `undefined`       | Variables remain uninitialized during the TDZ |
| Re-declaration                      | Allows re-declaration of variables               | Does not allow re-declaration of variables      |

