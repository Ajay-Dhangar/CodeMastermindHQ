---
id: npm-to-yarn
title: npm2yarn
---

## Example

If you want this `Tabs` behavier:

```bash npm2yarn
npm install @docusaurus/remark-plugin-npm2yarn
```

Without annoying coding, you need to install npm2yarn plugin. It transforms npm bash command code blocks to Docusaurus tabs.

:::note
It only works when used with Docusaurus themes that have the Tabs and TabItems components.
:::

## Install

Run this command to install the plugin:

```bash npm2yarn
npm install @docusaurus/remark-plugin-npm2yarn
```

## Setup

Add the following three lines to `docusaurus.config.js` file:

```js {8,12,16} title="docusaurus.config.js"
module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // ...
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}]],
        },
        blog: {
          // ...
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}]],
        },
        pages: {
          // ...
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}]],
        },
        // ...
      },
    ],
  ],
  // ...
};
```

## Usage

Copy this code:

    ```bash npm2yarn
    npm install @docusaurus/remark-plugin-npm2yarn
    ```

and past it in your Markdown document to see plugin in action.

:::note Cache
If your code doesn't work, you may need to clear the cache.
:::

## Clear Cache

```bash npm2yarn
npm run clear
```

and then run dev server again:

```bash npm2yarn
npm run start
```

to check if the plugin is working.
