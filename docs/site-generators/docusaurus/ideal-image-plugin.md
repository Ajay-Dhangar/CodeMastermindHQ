---
id: ideal-image-plugin
title: Ideal Image Plugin
date: 2021-09-15 13:10:40
---

## Installation

I originally installed the `ideal image plugin` using the command:

```bash
npm install --save @docusaurus/plugin-ideal-image
```

as written in this source below:

Source: <a href='https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image#installation' class='external'>docusaurus.io: Installation</a>

## Error

And my `package.json` looked like this:

```js title="package.json" {4}
...
  "dependencies": {
    "@docusaurus/core": "^2.0.0-beta.6",
    "@docusaurus/plugin-ideal-image": "*",
    "@docusaurus/preset-classic": "^2.0.0-beta.6",
    "@docusaurus/remark-plugin-npm2yarn": "^2.0.0-beta.6",
    "@docusaurus/theme-live-codeblock": "^2.0.0-beta.6",
    "@mdx-js/react": "^1.6.21",
    "clsx": "^1.1.1",
    "docusaurus-lunr-search": "^2.1.10",
    "react": "^16.8.4",
    "react-dom": "^16.8.4"
  },
...
```

But after doing `git push`, I got errors when `Release to GitHub Pages` in Continuous Integration.

## Solved

Then I edited the `package.json`:

```js title="package.json" {3}
  "dependencies": {
    "@docusaurus/core": "^2.0.0-beta.6",
    "@docusaurus/plugin-ideal-image": "2.0.0-beta.6",
    "@docusaurus/preset-classic": "^2.0.0-beta.6",
    "@docusaurus/remark-plugin-npm2yarn": "^2.0.0-beta.6",
    "@docusaurus/theme-live-codeblock": "^2.0.0-beta.6",
    "@mdx-js/react": "^1.6.21",
    "clsx": "^1.1.1",
    "docusaurus-lunr-search": "^2.1.10",
    "react": "^16.8.4",
    "react-dom": "^16.8.4"
  },
```

and run:

```bash
npm i
```

The error is gone!

## Usage

First rename your `.md` file to `.mdx` file.

Then add lines with `<Image>` tag to the file, for example:

```jsx
import Image from '@theme/IdealImage';

<Image img={require('./command-name-output.png')} />;
```

## Settings

Default settings is highlighted:

```jsx title="docusaurus.config.js" {}
...
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        //highlight-start
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        //highlight-end
        disableInDev: false, // By default, the plugin is inactive in development

      },
    ],
  ]
...
```

:::info How many images to set

At first, I set `steps` to 4 and `min` to 200. But then I went back to the defaults due to the ability to scale high resolution images on a smartphone.

:::

:::tip By default, always view full-scale images

You can test ideal image behavior in dev mode by the disableInDev option to false. **Tip**: use [network throttling](https://www.browserstack.com/guide/how-to-perform-network-throttling-in-chrome) in your browser to simulate slow networks.

:::
