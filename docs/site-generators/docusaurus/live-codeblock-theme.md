---
id: live-codeblock-theme
title: Live CodeBlock Theme
---

## Install

First:

```bash npm2yarn
npm install --save @docusaurus/theme-live-codeblock
```

:::danger

Code above will cause error when `npm run start`:

```
Bad docusaurus-theme-live-codeblock version 2.0.0-alpha.70.
All official @docusaurus/* packages should have the exact same version as @docusaurus/core (2.0.0-alpha.69).
Maybe you want to check, or regenerate your yarn.lock or package-lock.json file?

```

then, first uninstall previous:

```
npm uninstall @docusaurus/theme-live-codeblock
```

then install this:

```
npm install --save @docusaurus/theme-live-codeblock@next
```

From: [https://github.com/facebook/docusaurus/issues/3466](https://github.com/facebook/docusaurus/issues/3466)

:::

:::caution

It didn't work for me! I have [updated Docusaurus](https://v2.docusaurus.io/docs/installation#updating-your-docusaurus-version)! And it helped.

:::

Then, add to `docusaurus.config.js`

```js {3}
module.exports = {
  // ...
  themes: ['@docusaurus/theme-live-codeblock'],
  // ...
};
```

To use the plugin, create a code block with live attached to the language meta string.

    ```jsx live
    function Clock(props) {
      const [date, setDate] = useState(new Date());
      useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
          clearInterval(timerID);
        };
      });

      function tick() {
        setDate(new Date());
      }

      return (
        <div>
          <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
    ```

The code block will be rendered as an interactive editor. Changes to the code will reflect on the result panel live.

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

:::caution react-live and imports

It is not possible to import components directly from the react-live code editor, you have to define available imports upfront.

:::

By default, all React imports are available. If you need more imports available, swizzle the react-live scope:

```bash npm2yarn
npm run swizzle @docusaurus/theme-live-codeblock ReactLiveScope
```

:::danger

If code above doesn't work, try this:

```
npm run swizzle @docusaurus/theme-live-codeblock ReactLiveScope -- --danger
```

> As a workaround you can just copy the folder `node_modules/@docusaurus/theme-live-codeblock/src/theme/CodeBlock` and put it in `website/src/theme/CodeBlock`, that's basically what the command does. - _Slorber, Main of Docusaurus_

From: [https://github.com/facebook/docusaurus/issues/3466](https://github.com/facebook/docusaurus/issues/3466)

:::

After running the command above, you should have this file below, but almost empty, and you need to copy/past this content into it:

```jsx {3-15,21} title="src/theme/ReactLiveScope/index.js"
import React from 'react';

const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      border: 'solid red',
      borderRadius: 20,
      padding: 10,
      cursor: 'pointer',
      ...props.style,
    }}
  />
);

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ButtonExample,
};

export default ReactLiveScope;
```

Or (as in Docusaurus [page](https://v2.docusaurus.io/docs/markdown-features#interactive-code-editor)) the content is split into two files. First file:

```jsx title="src/theme/ReactLiveScope/index.js"
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as components from './components';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...components,
};

export default ReactLiveScope;
```

and second file:

```jsx title="src/theme/ReactLiveScope/components.js"
import React from 'react';

export const ButtonExample = (props) => (
  <button
    {...props}
    style={{
      border: 'solid red',
      borderRadius: 20,
      padding: 10,
      cursor: 'pointer',
      ...props.style,
    }}
  />
);
```

The `ButtonExample` component is now available to use:

```jsx live
function MyPlayground(props) {
  return (
    <div>
      <ButtonExample onClick={() => alert('hey!')}>Click me</ButtonExample>
    </div>
  );
}
```

## Examples

See first page: [https://reactjs.org/](https://reactjs.org/)

## Source

From: [Interactive code editor (Docusaurus)](https://v2.docusaurus.io/docs/markdown-features#interactive-code-editor)
