---
id: 3-03-2-0-using-create-react-app
title: 3.03.2.0 Using Create React App
date: 2021-03-20 15:22:15
---

Create React apps with no build configuration.

Read more: <a href='https://github.com/facebook/create-react-app' class='external'>github.com: Create React App</a>

You’ll need to have [Node >= 10.16 and npm >= 5.6](#node-nvm-and-npm-installation) on your machine. To create a project, run:

```sh
npx create-react-app my-app
cd my-app
npm start
```

## Script Versions

`Script versions` is the package that installed by default. It includes: build workflow, development server, next generation JavaScript feature support and more.

At the moment (2020-03-21) the default script version is `4.0.3`.

If you want a more simplified folder structure, you can install earlier versions of the `scripts version`. You can install this package either along with the `create-react-app` or separately later. For example ("along with"):

```shell
npx create-react-app my-app --scripts-version 1.1.5
```

:::warning

Using legacy `scripts version` can lead to confusing conflicts. If you try run multiple servers on the same port (like me with Docusaurus and others Facebook products running on port 3000), it will raise the warning `Something is already running on port 3000` and after you press `yes` to select a different port, you might get an freeze ... Especially on [nvm (Windows)](../../../../docs/node/nvm-windows). If so, you need to install a more recent version of `scripts version`. See separate install below.

:::

### Separate Install `scripts version`

If you've already installed the `scripts version`, you need to uninstall the old version first (<a href='https://stackoverflow.com/questions/59271634/react-npm-start-windows-cannot-find-localhost' class='external'>stackoverflow.com: React: npm start - windows cannot find localhost</a>). You can uninstall and install it with one command line:

```shell
npm uninstall react-scripts --save && npm install react-scripts@3.2.0 --save
```

### Update `react-scripts`

```bash npm2yarn
npm uninstall react-scripts --save && npm install --save react-scripts@latest
```

## Node, nvm and npm Installation

There are multiple ways to install `Node.js`. I recommend using a version manager (`nvm`) as `node` versions change very quickly. You will likely need to switch between multiple versions based on the needs of different projects you're working on.

Install `nvm` to switch Node versions between different projects:

- [nvm (macOS/Linux)](../../../../docs/node/nvm)
- [nvs](https://papa31.github.io/hm/blog/2021/09/19/nvs-one-node-version-per-terminal-in-windows)
- [~~nvm-windows~~](../../../../docs/node/nvm-windows)
-
