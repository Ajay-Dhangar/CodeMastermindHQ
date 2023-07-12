---
id: 8-06-must-read-enabling-css-module
title: 8.06 Must Read Enabling Css Module
date: 2021-04-09 15:13:36
---

**MUST READ (at least the first few paragraphs ... ;-))**

In the next lecture, we'll use a styling solution named "CSS modules". We already had a look at that in the "Styling" section earlier in the course.

In the next lecture, we'll enable CSS modules and depending on the project setup you're using, the exact steps shown there might not work for you.

At least if you're not using the starting project you also find **attached to the next lecture**. If you DO use that, you should be able to continue without issues (and you can skip the rest of this text lecture here).

## Built-in support CSS Modules

**In more recent project versions created by CRA, support for CSS modules is already built-in and you can use that feature without ejecting, please see:** [**https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet**](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet)

I also showed this built-in support in the "Styling" section earlier in the course.

If you use this approach, you DON'T need to eject. But please **don't skip the next videos though**, I do explain what CSS modules are and why + how we use them there!

## Optional

:::tip
Better see [this](../05-styling-react-components-and-elements/5-10-0-working-with-css-modules#configure-webpackconfig-files).
:::

If you still want to eject and manually adjust the Webpack config (as we do it in the new videos - which you don't need to do if you follow the approach described in the link above), you should take the below comments into account in case your webpack config (after ejecting) doesn't look the same as it does in my videos:

After ejecting, we edit a Webpack config file that's made available by ejecting. This file might look slightly different for you.

In the video, I'll look for an entry that starts like this (in the `webpack.config.js` file):

```
{
  test: /\\.css$/,
  ...
}
```

and I then edit this entry.

This entry now looks slightly different. You'll have to find the following part in your `webpack.config.js` file:

```
{
  test: cssRegex,
  exclude: cssModuleRegex,
  ...
}
```

and then edit that entry.

Finally, it should look like this:

```
{
  test: cssRegex,
  exclude: cssModuleRegex,
  use: getStyleLoaders({
      importLoaders: 1,
      modules: true,
      localIdentName: '\[name\]\_\_\[local\]\_\_\[hash:base64:5\]'
  }),
}
```

You can ignore me editing the `webpack.config.prod.js` file - with the latest version of create-react-app, ejecting only gives you **ONE** webpack config file (which you edit as described above).
