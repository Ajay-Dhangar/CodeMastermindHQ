---
id: prettier
title: Code Quality with Prettier
sidebar_position: 5
sidebar_label: Prettier
---

Ensuring high-quality code is paramount in the world of web development. In this course, we emphasize the importance of code quality and introduce two essential tools to elevate your coding experience: ESLint and Prettier.

## Prettier: Simplifying Code Formatting

Prettier, conceived by the brilliant mind of James Long, addresses the common struggle of maintaining consistent code style. Inspired by languages like Go, Reason, or Elm, where tooling takes care of code formatting, Prettier automates the process for JavaScript developers.

### Why Prettier?

The beauty of Prettier lies in its ability to free your mind from worrying about code style. With a consistent style enforced by Prettier, you and your team no longer need to engage in endless debates over code formatting. Say goodbye to bikeshedding, and hello to a streamlined coding process.

### How Prettier Works:

Prettier acts as an advanced pretty printer. It analyzes your code, transforms it into an abstract syntax tree (AST), discards your stylistic choices, and then prints it back with a predefined style. The result? Consistency across your codebase without the need for manual intervention.

Say goodbye to endless debates on code style—Prettier ensures uniformity within your team. It liberates your mind from fretting over style details, allowing you to focus on architectural decisions and problem-solving.

## Integration into Your Project

Getting started with Prettier is a breeze:

1. **Global Installation:**
   - Install Prettier globally:
    
    ```bash
    npm install --global prettier
    ```

   **or**

   - Run Prettier using npx:
    
    ```bash
    npx prettier
    ```

2. **Run Prettier:**
   - Format a file:
    
    ```bash
    prettier src/App.js
    ```

   **or**

   - Write changes to the file:
    
    ```bash
    prettier --write src/App.js
    ```

   Witness how Prettier effortlessly enhances code readability.

## Configuration and Visual Studio Code Integration

Prettier is designed for seamless adoption. Leverage its default configuration or explore customizations based on your preferences. Prettier also supports Flow and TypeScript.

For Visual Studio Code enthusiasts, enhance your experience with the Prettier extension. Set it to run only when a Prettier config file is present for a hassle-free development environment.

## Project Recognition and NPM/Yarn Scripts

Establish your project as a Prettier-enabled one by creating a `.prettierrc` file with default settings. Showcase your commitment to code consistency.

Simplify CLI commands by incorporating npm/yarn scripts. In your `package.json`, add:

```json
"scripts": {
    "format": "prettier --write \"src/**/*.{js,jsx}\""
}
```

Execute `yarn format` or `npm run format` to effortlessly maintain code cleanliness without memorizing complex commands.

:::caution Package Version Wisdom: Stick to 2.7.1 for Now
That @2.7.1 It's not just a number; it's our course lifeline. I handpicked this version to keep things smooth. Tech moves fast; packages change. Stick with my picks during the course, even if npm gets security jitters. After conquering the content, feel free to update and see if everything still dances. Brace for a hiccup; that's tech for you!
:::