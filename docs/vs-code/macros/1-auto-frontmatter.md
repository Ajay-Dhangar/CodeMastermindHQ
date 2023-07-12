---
id: 1-auto-frontmatter
title: 1 Auto Frontmatter
date: 2021-03-26 15:35:47
---

I add some functionality to initial macro.

## Auto Frontmatter 1.0.0

See [Auto Frontmatter](0-auto-frontmatter)

The old macro did:

- takes `filename`, removes the file extension and sets it as frontmatter’s `id`
- takes this `id`, replaces `hyphens` with `spaces`, capitalizes it, and sets it to `title`
- takes the current date and time and sets it as `date`

## Auto Frontmatter 1.0.1

```jsx title="settings.json" {}
  "multiCommand.commands": [
    {
      "command": "multiCommand.autoFrontmatter",
      "label": "Markdown",
      "description": "Auto Frontmatter",
      "sequence": [
        "cursorTop",
        {
          "command": "editor.action.insertSnippet",
          "args": {
            "snippet": "---\n"
          }
        },
        {
          "command": "editor.action.insertSnippet",
          "args": {
            "snippet": "id: $TM_FILENAME_BASE\n"
          }
        },
        {
          "command": "editor.action.insertSnippet",
          "args": {
            "snippet": "title: ${TM_FILENAME_BASE/([^-]+)(-*)/${1:/capitalize}${2:+ }/g}"
          }
        },
        "cursorLineStartSelect",
        {
          "command": "editor.action.insertSnippet",
          "args": {
            "snippet": "${TM_SELECTED_TEXT/(\\d+)\\s(?=\\d)/$1./g}\n"
          }
        },
        {
          "command": "editor.action.insertSnippet",
          "args": {
            "snippet": "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND\n"
          }
        },
        {
          "command": "editor.action.insertSnippet",
          "args": {
            "snippet": "---\n\n"
          }
        }
      ]
    },
```

In addition to this, the new macro does:

- if there are more than one leading digit in filename, the macro replaces `hyphens` between them with `.` (dots)

And now you don’t need to worry about the current cursor position. The macro will insert a frontmatter at the top of the markdown page wherever the cursor is.
