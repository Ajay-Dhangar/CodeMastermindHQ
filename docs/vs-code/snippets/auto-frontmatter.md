---
id: auto-frontmatter
title: Auto Frontmatter
date: 2021-02-21 18:52:09
description: How to make a snippet in VS Code that will take data from the file name and fill out the front-matter with it
---

You are creating a new markdown file in VS Code. You open it. And the first thing you need to do is fill out the boring front matter!

Let's make a VS Code snippet that automates almost all of the work!

This is an example:

```json title="markdown.json"

 "Id": {
    "prefix": "Docusaurus-id",
    "body": [
      "---",
      "id: $TM_FILENAME_BASE",
      "title: ${TM_FILENAME_BASE/([^-]+)(-*)/${1:/capitalize}${2:+ }/g}",
      "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",
      "---",
      "",
      "$1"
    ],
    "description": "Print out Docusaurus markdown title"
  },

```

## Macros

I make a macros that automated this work:

[create frontmatter](../macros/1-auto-frontmatter)
[update frontmatter](../macros/2-auto-frontmatter)

from: <https://code.visualstudio.com/docs/editor/userdefinedsnippets>
