---
id: 5-10-0-working-with-css-modules
title: 5.10.0 Working With CSS Modules
date: 2021-04-04 18:44:21
---

Another way to scoping styles to your components.

> So of writing styles which only apply to a specific component instead of the entire application because that is an important thing.

First, we need to tweak the configuration if we're using `react scripts`.

## If `react-script` version = 1

For this course you need an earlier version of [react-scripts](../03-base-feature-syntax/Lessons/3-03-2-0-using-create-react-app#script-versions):

```bash npm2yarn
npm uninstall react-scripts --save && npm install react-scripts@1.0.13 --save
```

### Disassembling React Tooling

> We need to tweak the configuration of our project a little bit.

```bash npm2yarn
npm run eject
```

> What this will do is it will eject from this under the hood configuration where you don't really have access to the underlying web packed conflict file and so on and give you access to the conflict files so that you can tweak how your code is bundled together and so on and there is something we will need to tweak there.

## Configure `webpack.config` files

After successfully ejected, add two lines in these two files:

```js title="config/webpack.config.dev.js" {10-11}
        ...
156      {
157         test: /\.css$/,
158         use: [
159           require.resolve("style-loader"),
160           {
161             loader: require.resolve("css-loader"),
162             options: {
163               importLoaders: 1,
                  modules: true,
                  localIdentName: "[name]__[local]__[hash:base64:5]",
164             },
165           },
166           {
        ...
```

```js title="config/webpack.config.prod.js" {9-10}
            ...
169               use: [
170                 {
171                   loader: require.resolve("css-loader"),
172                   options: {
173                     importLoaders: 1,
174                     minimize: true,
175                     sourceMap: shouldUseSourceMap,
                        modules: true,
                        localIdentName: "[name]__[local]__[hash:base64:5]",
176                   },
177                 },
178                 {
            ...
```

This feature gives unique names to CSS class names. In this manner:

```html
<button class="App__Button__2_NDl">Toggle Persons</button>
```

## If `react-script` version > 1

You need to add to filename of the CSS file the word `module`. For example, `Person.css` will be `Person.module.css` :

```jsx
import classes from './Person.module.css'
```

This will automatically work without ejecting.
