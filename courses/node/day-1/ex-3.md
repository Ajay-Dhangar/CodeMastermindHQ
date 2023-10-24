---
id: nodejs-hello-world
title: Writing Your First "Hello World" Program in Node.js
sidebar_position: 3
sidebar_label: Your First Program
---

### Step 1: Create a New File

1. Open your preferred code editor (e.g., Visual Studio Code).

2. Create a new file and save it with a .js extension. For this example, we'll name it `hello.js`. This .js extension indicates that it's a JavaScript file that Node.js can run.

### Step 2: Write the "Hello World" Code

Now, let's write a simple JavaScript program that prints "Hello, Node.js!" to the console.

```js title="hello.js"
console.log("Hello, Node.js!");
```

In this code:

- `console.log()` is a built-in Node.js function used to print messages to the console.

- Inside the parentheses, we have the message we want to display, which is "Hello, Node.js!" in this case.

#### Step 3: Save the File

After writing the code, make sure to save the file.

#### Step 4: Run the "Hello World" Program

1. Open your terminal or command prompt.

2. Navigate to the directory where your `hello.js` file is located using the `cd` (change directory) command.

   ```bash
   cd path/to/directory
   ```

3. Once you're in the correct directory, execute your "Hello World" program using the `node` command:

   ```bash
   node hello.js
   ```

You should see the output "Hello, Node.js!" displayed in your terminal, which confirms that Node.js is correctly installed and your program is running.

Congratulations! You've successfully written and executed your first Node.js program. This fundamental "Hello World" exercise serves as a foundation for building more complex Node.js applications in the future. In the upcoming days of this course, we'll delve deeper into Node.js concepts and real-world applications.