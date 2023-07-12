---
id: import-code-to-view
title: Import Code To View
date: 2022-05-15 00:11:43
---

## Inside markdown

import BrowserWindow from '@site/src/components/BrowserWindow'

You can import any code file as raw text, and then insert it in a code block.

Install `raw-loader`:

```bash npm2yarn
npm install --save-dev raw-loader
```

Now you can import code snippets from another file as it is.

Add this to markdown file:

````md
import BrowserWindow from '@site/src/components/BrowserWindow'

```mdx-code-block
import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!@site/src/pages/BackgroundImage';

<CodeBlock language="jsx">{MyComponentSource}</CodeBlock>
```
````

to get this:

```mdx-code-block
import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!@site/src/pages/BackgroundImage';

<BrowserWindow>
  <CodeBlock language="jsx">{MyComponentSource}</CodeBlock>
</BrowserWindow>;
```

This way, you can reuse content among multiple pages and avoid duplicating materials.

## Outside markdown

Outside of Markdown, you can use the `@theme/CodeBlock` component to get the same output.

```jsx
import CodeBlock from '@theme/CodeBlock';

export default function MyReactPage() {
  return (
    <div>
      {/* highlight-start */}
      <CodeBlock
        language="jsx"
        title="/src/components/HelloCodeTitle.js"
        showLineNumbers>
        {`function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
      </CodeBlock>
      {/* highlight-end */}
    </div>
  );
}
```

Output:

<BrowserWindow>
  <CodeBlock
    language="jsx"
    title="/src/components/HelloCodeTitle.js"
    showLineNumbers>
    {`function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
  </CodeBlock>
</BrowserWindow>

You can see the [code block](/myComponents) in action outside of markdown file.

The props accepted are `language`, `title` and `showLineNumbers`, in the same way as you write Markdown code blocks. Although discouraged, you can also pass in a `metastring` prop like `metastring='{1-2} title="/src/components/HelloCodeTitle.js" showLineNumbers'`, which is how Markdown code blocks are handled under the hood. However, we recommend you [use comments for highlighting lines](#highlighting-with-comments).

## Change output code

You can not only show the data directly, but also process it. For example, this code removes lines that start with a comment.

````jsx
```mdx-code-block
import CodeBlock from '@theme/CodeBlock';

<CodeBlock className="language-js" title="sidebars.js">
  {require('!!raw-loader!@site/sidebars.js')
    .default
    .split('\n')
    // remove comments
    .map((line) => !['//','/*','*'].some(commentPattern => line.trim().startsWith(commentPattern)) && line)
    .filter(Boolean)
    .join('\n')}
</CodeBlock>
```;
````

You should see your sidebar.js file:

```mdx-code-block
 <BrowserWindow>
<CodeBlock className="language-js" title="sidebars.js">
  {require('!!raw-loader!@site/sidebars.js')
    .default
    .split('\n')
    // remove comments
    .map((line) => !['//','/*','*'].some(commentPattern => line.trim().startsWith(commentPattern)) && line)
    .filter(Boolean)
    .join('\n')}
</CodeBlock>
</BrowserWindow>
```
