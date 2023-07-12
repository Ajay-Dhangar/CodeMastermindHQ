---
id: all-vscode-snippets
title: All vscode Snippets
date: 2021-02-22 14:20:04
description: My VS Code snippets without keyboard shortcuts
---

:::caution

To use a Snippet, press `Ctrl + Space`, type the first (or any other) letters of the required `snippet prefix` and select the appropriate command from the pop-up context menu.

:::

## Snippets List

<small>

|  | Snippet Prefix | Usage | Description | Result |
| --- | --- | --- | --- | --- |
| 1 | [Anchor-from-Clipboard](anchor-from-clipboard.md) | arc | Anchor to a link from the clipboard (Copy link > activate snippet) | <a href='https://habr.com/ru/post/440946/' class='external'>habr.com</a> |
| 2 | Anchor-from-Clipboard2 | arc2 | see 1 + add highlighted text between `<a>` tags | <a href='https://habr.com/ru/post/440946/' class='external'>quiz</a> |
| 3 | Anchor-from-Clipboard3 | arc3 | see 1 -> `<a>`link: highlighted text`</a>` | <a href='https://habr.com/ru/post/440946/' class='external'>habr.com: quiz</a> |
| 3 | Anchor-from-Clipboard4 | arc4 | see 1 -> `<a>`highlighted text (link)`</a>` | <a href='https://habr.com/ru/post/440946/' class='external'>quiz (habr.com)</a> |
| 4 | [Tabs-from-Clipboard](tabs-snippet.md) | tabs | type two keywords with one space between them: `JSX React` > cut this text > activate snippet | see [here](../../../courses/react-complete-guide/03-base-feature-syntax/Lessons/3-06-0-jsx) or [React Complete Guide: 3.12 Working with Props](../../../courses/react-complete-guide/03-base-feature-syntax/Lessons/3-12-working-with-props) |
| 5 | import React |  | Print first import line | `import React from 'react'` |
| 6 | full React component | Automatically names a React component with a file name | Print the entire blank of a React component | see [Full React Component](#full-react-component) below |
| 7 | Comment block | se | Insert depending on language comment block | see [Comment Block](#comment-block) below |
| 8 | Print to console | console |  | "console.log('$1');" + next line "$2" |
| 9 | Print ReactDOM container | container |  |  |
| 10 | Import React | Import React |  | import React from 'react' |
| 11 | functional React component | func React component |  |  |
| 11 | functional React component2 | func React component2 |  |  |
| 13 | classes css | classes css |  | className={classes.$1}$0 |
| 14 | axios import | axios import |  | import axios from 'axios' |
| 15 | classes import | classes import |  | import classes from './$1.module.css'$0 |
| 16 | prettier_ignore | pri |  | `<!-- prettier-ignore -->` |
| 17 | prettier_ignore comment | prc |  | `<!-- prettier-ignore-start -->` $SELECTED_TEXT `<!-- prettier-ignore-end -->` |
| 18 | [Auto Frontmatter](auto-frontmatter.md) | Docusaurus-id |  |  |
| 19 | Clickable image | Select Header (words only), press `Ctrl + Space`, select 'Clickable image' in the menu without entering any text | -> clickable md image will be below | with `[![](.png)](.png)` pattern |
| 20 | Insert Code Block | code_shell | Add md code block with shell type | ` ```shell ``` ` |

</small>

## Keyboard Shortcuts

Some snippets (with shortcuts) are located on the [keyboard shortcuts](../all-vscode-keyboard-shortcuts) page.

## Snippets Results

### `full React component`

Snippet with three tabstops using the filename.

```jsx
import React from 'react'

const userOutput = () => {return ()}

export default userOutput
```

- Automatically names a React component with a file name
- Print the entire blank of a React component
- 3 tabs stops:
  - 1: if you want to rename a component
  - 2: if you want to remove the `return` keyword
  - 3: if you want to add JSX code

### Comment block

Snippet with 2 vars. Source: <a href='https://stackoverflow.com/questions/57340128/vs-code-variables-in-custom-snippet' class='external'>stackoverflow.com: VS-Code Variables In Custom Snippet</a>

```html
<!-- First start -->
Second
<!--First end -->
```

## Working with Snippets

### Using a Snippet

For example, to activate `Anchor-from-Clipboard` snippet, you type `arc`, press Ctrl + Space and choose `Anchor-from-Clipboard` from context menu (for this snippet to work correctly, you first need to copy the embed link).

### How to Make a Snippet

[Anchor from Clipboard](anchor-from-clipboard)

## Source

- [Snippet plus Shortcut](snippet-plus-shortcut)
- <a href='https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets' class='external'>Snippets in VS Code</a>
