---
id: extension-generator
title: Extension Generator
date: 2021-03-26 10:47:28
---

<a href='https://code.visualstudio.com/api/get-started/your-first-extension' class='external'>сode.visualstudio.com: Your First Extension</a>

Make sure you have Node.js and Git installed, then install <a href='https://yeoman.io/' class='external'>Yeoman (yeoman.io)</a> and <a href='https://www.npmjs.com/package/generator-code' class='external'>VS Code Extension Generator (www.npmjs.com)</a> with:

```shell
npm install -g yo generator-code
```

The generator scaffolds a TypeScript or JavaScript project ready for development. Run the generator and fill out a few fields for a TypeScript project:

```shell
yo code

# ? What type of extension do you want to create? New Extension (TypeScript)
# ? What's the name of your extension? HelloWorld
### Press <Enter> to choose default for all options below ###

# ? What's the identifier of your extension? helloworld
# ? What's the description of your extension? LEAVE BLANK
# ? Initialize a git repository? Yes
# ? Bundle the source code with webpack? No
# ? Which package manager to use? npm

code ./helloworld
```

Then, inside the editor, press `F5`. This will compile and run the extension in a new **Extension Development Host** window.

Run the Hello World command from the Command Palette (`Ctrl+Shift+P`) in the new window.

You should see the `Hello World from HelloWorld!` notification showing up. Success!
