---
id: 8-07-setting-up-project
title: 8.07 Setting Up Project
date: 2021-04-09 18:39:25
---

## Installing `Open Sans` Font

Source: <a href='https://fonts.google.com/specimen/Open+Sans' class='external'>fonts.google.com: Open Sans</a>

Insert to `<head>` section:

```html title="public/index.html"
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
```

## Installing archaic `react-script`

First, uninstall the current `react-script` version and then install `1.0.13` version:

```bash npm2yarn
npm uninstall react-scripts --save && npm install react-scripts@1.0.13 --save
```

## Ejecting of `react-script`

Disassemble React tooling:

```bash npm2yarn
npm run eject
```

## Configure `webpack.config` files

:::caution
I think now you not need ejected react-script. Reed [this](8-06-must-read-enabling-css-module#).
:::

Better see [this](../05-styling-react-components-and-elements/5-10-0-working-with-css-modules#configure-webpackconfig-files).
