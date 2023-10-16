---
id: asynchronous-js
title: Asynchronous JavaScript
sidebar_position: 6
tags: []
sidebar_label: Asynchronous Js
---

![image](./img/img-2.png)

JavaScript is known for its asynchronous nature. This means that it can execute code without waiting for previous operations to complete. Asynchronous programming is crucial in Node.js, especially when dealing with I/O operations, making network requests, or handling events. Understanding asynchronous code is fundamental for effective Node.js development.

### Example using `setTimeout`:

The `setTimeout` function is a common example of asynchronous code in JavaScript. It schedules a function to run after a specified time delay.

```js
console.log("Start");
setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000);
console.log("End");
```

In this example, "Inside setTimeout" is logged after a delay of 2 seconds, but the program continues executing other code in the meantime.

### Callback Functions:

Callback functions are a way to work with asynchronous code. A callback function is a function that is passed as an argument to another function and will be executed when that function completes.

```js
function fetchData(callback) {
  // Simulate a network request
  setTimeout(() => {
    const data = "Data received from the server";
    callback(data);
  }, 1000);
}

function processResult(result) {
  console.log("Processing result:", result);
}

fetchData(processResult);
```

In this example, `fetchData` simulates a network request that takes 1 second. Once the data is received, it calls the `processResult` function to handle the result.

### Promises:

Promises are a more structured way to work with asynchronous code. They provide a cleaner and more readable way to handle asynchronous operations and their results.

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate a network request
    setTimeout(() => {
      const data = "Data received from the server";
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then((result) => {
    console.log("Promise resolved:", result);
  })
  .catch((error) => {
    console.error("Promise rejected:", error);
  });
```

In this example, the `fetchData` function returns a promise. You can then use the `.then()` method to handle the resolved value and the `.catch()` method to handle errors.

Understanding asynchronous JavaScript is essential for working with Node.js, as many of its built-in modules and third-party packages rely on asynchronous operations to deliver high-performance, non-blocking I/O.