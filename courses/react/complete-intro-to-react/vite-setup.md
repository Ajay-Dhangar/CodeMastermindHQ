---
id: vite-setup
title: Setting Up Vite for Your React Project
sidebar_position: 8
sidebar_label: Vite Setup
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import CodeBlock from '@theme/CodeBlock';
import card from '@site/src/css/markdown.module.css'
```

Welcome to the Vite setup guide for React App! In this section, we'll walk you through the process of installing and configuring Vite, a build tool that facilitates a seamless development experience for your React applications.

## Why Vite?

Vite, pronounced "veet" (meaning quick in French), is a build tool developed by the Vue team. It wraps Rollup, the bundling tool, to provide a user-friendly experience with excellent results. The key features we aim to achieve with our build tool include:

1. **Code Organization:** Vite helps organize your code by allowing you to separate files while efficiently stitching them together during the build process.

2. **External Library Integration:** Easily include third-party libraries from npm, such as React, to enhance your project's functionality.

3. **Optimization:** Vite optimizes your code by employing techniques like minification, ensuring your application runs efficiently.

## Choosing Vite over Other Tools

In previous versions of this course, we used Parcel and even explored Webpack. However, we've transitioned to Vite because it aligns with the current preferences of the React community. It offers a blend of ease of use and optimal performance. While other tools like Parcel are excellent, Vite is currently the community's tool of choice for React development.

## Getting Started with Vite

### Installation

To get started, install Vite and the necessary React-specific features using npm:

```bash title="Terminal"
npm install -D vite@3.1.4 @vitejs/plugin-react@2.1.0
```

### Adjusting index.html

Update your `index.html` by adding the `module` attribute to the script tag:

```html title="src/index.html"
<!-- delete the two unpkg script lines -->
<script type="module" src="./App.js"></script>
```

This change informs the browser to work with modern browser technology, enabling faster development mode reloads.

### Creating the Configuration File

Create a file in the project root named `vite.config.js` and add the following configuration:

```js title="vite.config.js"
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
});
```

This sets up the React plugin and designates the `src` directory as the root.

### Installing React

Install React and ReactDOM:

```bash title="Terminal"
npm install react@18.2.0 react-dom@18.2.0
```

### Modifying App.js

In your `App.js` file, make the following modifications:

```js title="src/App.js"
// add to the top
import React from "react";
import { createRoot } from "react-dom/client";

// modify the createRoot call, delete "ReactDOM"
const root = createRoot(container);
```

### Setting Up Scripts

In your `package.json`, add the following scripts:

```json title="package.json"
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

- `dev`: Start the development server (typically on http://localhost:5173/).
- `build`: Prepare static files for deployment.
- `preview`: Preview your production build locally.

Ensure to close any file:/// browser tabs and use only the localhost:1234 ones when working with Vite to avoid CORS errors.

## Alternatives

While we've chosen Vite for its industry-wide acceptance, feel free to explore other fantastic developer tools. Our goal is to expose you to great tools, and if you find one that suits your preferences, that's fantastic!


## Now try to make basic React App with Vite

1. Create a new folder for your project and navigate to it in your terminal.
   
   for example:
   ```bash title="Terminal"
    mkdir my-react-app
    cd my-react-app
    ```

2. Initialize a new npm project.
   
    ```bash title="Terminal"
     npm init -y
     ```

3. Install Vite and the necessary React-specific features using npm:
   
    ```bash title="Terminal"
     npm install -D vite@3.1.4 @vitejs/plugin-react@2.1.0
     ```

4. Create a file in the project root named `vite.config.js` and add the following configuration:

    ```js title="vite.config.js"
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";

    export default defineConfig({
      plugins: [react()],
      root: "src",
    });
    ```

5. Create a folder named `src` and add a file named `index.html` with the following content:

    ```html title="src/index.html"
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite App</title>
      </head>
      <body>
        <div id="root"></div>
        <script type="module" src="./App.js"></script>
      </body>
    </html>
    ```

6. Create a file named `App.js` in the `src` folder with the following content:

    ```js title="src/App.js"
    import React from "react";
    import { createRoot } from "react-dom";

    const container = document.getElementById("root");
    const root = createRoot(container);

    function App() {
      return <h1>Hello World!</h1>;
    }

    root.render(<App />);
    ```

7. Add the following scripts to your `package.json`:

    ```json title="package.json"
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    }
    ```

8. Run the following command to start the development server:

    ```bash title="Terminal"
    npm run dev
    ```

Now you can open http://localhost:5173 in your browser and see your React App.

<BrowserWindow url="http://localhost:5173">
    <h1>Hello World!</h1>
</BrowserWindow>


## Resources

- [Vite](https://vitejs.dev/)
- [Vite Docs](https://vitejs.dev/guide/)