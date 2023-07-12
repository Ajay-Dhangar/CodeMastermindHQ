---
id: auto-anchor
title: Auto Anchor
date: 2021-03-26 14:50:35
---

The command puts the information from the copied link into the “anchor tag”.

First, paste the highlighted code below into your `settings.json` :

```json title="settings.json" {6-32}
"multiCommand.commands": [
    {
      "command": "multiCommand.autoFrontmatter",  // first command
        ...
    },
    {
      "command": "multiCommand.autoAnchor",   // our command
      "label": "Anchor",
      "description": "Auto Link",
      "sequence": [
        {
          "command": "editor.action.insertSnippet",
          "args": {
            "snippet": "${CLIPBOARD/.*[\\/#]([\\w\\-_]+)\\/?[$\\.]?.*/$1/}"
          }
        },
        "cursorLineStartSelect",
        {
          "command": "editor.action.insertSnippet",
          "args": {
            "snippet": "${TM_SELECTED_TEXT/([^-]+)(-*)/${1:/capitalize}${2:+ }/gi}"
          }
        },
        "cursorLineStartSelect",
        {
          "command": "editor.action.insertSnippet",
          "args": {
             "snippet": "<a href='${CLIPBOARD/(.*)\\s(.*)/$1/}' class='external'>${CLIPBOARD/.*\\/\\/(www\\.)?([^\\/]+)?(\\/.*|)/$2/}: ${TM_SELECTED_TEXT}</a>"
          }
        },
      ]
    }
]
```

Add a keyboard shortcut:

```json title="keybindings.json"
   {
    "key": "alt+g a",
    "command": "extension.multiCommand.execute",
    "args": { "command": "multiCommand.autoAnchor" }
  },
```

## Result

Copy any link and past it using `Alt+G a`. For example, if you copy this link:

```shell
https://code.visualstudio.com/api/get-started/your-first-extension
```

This macro will output the following:

<a href='https://code.visualstudio.com/api/get-started/your-first-extension' class='external'>code.visualstudio.com: Your First Extension</a>

## Test Page

I insert here URLs that failed to convert at first:

[Test for auto anchor](test-for-auto-anchor)
