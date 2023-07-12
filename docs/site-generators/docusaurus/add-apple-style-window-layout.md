---
id: add-apple-style-window
title: Add Apple Style Window in Docusaurus
sidebar_label: Apple Style Window
---

import BrowserWindow from '@site/src/components/BrowserWindow';

<BrowserWindow url="http://localhost:3000">
<h2>IF YOU THINK THIS IS AN IMAGE, YOU ARE WRONG!</h2>
This is markup!
</BrowserWindow>

<br/>

If you want this on your page, you need to do the following:

## Download BrowserWindow component

First, you need two extra files:

- [index.js](https://raw.githubusercontent.com/facebook/docusaurus/master/website/src/components/BrowserWindow/index.js)
- [styles.module.css](https://raw.githubusercontent.com/facebook/docusaurus/master/website/src/components/BrowserWindow/styles.module.css)

from Docusaurus github.

Copy/past these files in the appropriate folder of your repo:

```bash
<root-your-repo>/src/components/BrowserWindow
```

## Create .mdx file

:::tip

MDX Docusaurus has built-in support for MDX, which allows you to write JSX within your Markdown files and render them as React components.

:::

Then you need to create `file.mdx` and put the following in it:

```md {1} title="file.mdx"
import BrowserWindow from '@site/src/components/BrowserWindow';

<BrowserWindow url="http://localhost:3000">

<h2>Hello from Docusaurus</h2>

Are you ready to create the documentation site for your open source project?

<h3>Headers</h3>

will show up on the table of contents on the upper right

So that your users will know what this page is all about without scrolling down or even without reading too much.

<h3>Only h2 and h3 will be in the toc</h3>

The headers are well-spaced so that the hierarchy is clear.

- lists will help you - present the key points - that you want your users to remember - and you may nest them - multiple times

</BrowserWindow>
```

## Run dev server

After rerun your development server:

```bash npm2yarn
npm run start
```

and by pressing F5 key once (clear your browser cache) this will render in the browser as follows:

<BrowserWindow url="http://localhost:3000">

<h2>Hello from Docusaurus</h2>

Are you ready to create the documentation site for your open source project?

<h3>Headers</h3>

will show up on the table of contents on the upper right

So that your users will know what this page is all about without scrolling down or even without reading too much.

<h3>Only h2 and h3 will be in the toc</h3>

The headers are well-spaced so that the hierarchy is clear.

- lists will help you
- present the key points
- that you want your users to remember
  - and you may nest them
    - multiple times

</BrowserWindow>

## Improvement

I made a small improvement. And if you run this:

```jsx
<BrowserWindow style={{backgroundColor: 'brown'}} minHeight="500" url="http://localhost:3000/hm/__docusaurus/debug">
```

You'll get this:

<BrowserWindow style={{backgroundColor: 'brown'}} minHeight="500" url="http://localhost:3000/hm/\_\_docusaurus/debug">

Nice dynamic props!

</BrowserWindow>
