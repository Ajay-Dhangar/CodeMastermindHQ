---
id: 0-auto-frontmatter
title: 0 Auto Frontmatter
date: 2021-03-16 09:55:20
---

The macro does:

- takes `filename`, removes the file extension and sets it as frontmatter’s `id`
- takes this `id`, replaces `hyphens` with `spaces`, capitalizes it, and sets it to `title`
- takes the current date and time and sets it as `date`

This functionality has been achieved thanks to the VS-Code  `multi-command` extension.

The rest of the methods (snippet manipulations) were unsuccessful.

## Install `multi-command` extension

Install <a href='https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command&ssr=false#overview' class='external'>multi-command</a> extension

### Find Command

[Find](find-command-in-multi-command) the name of the command you want to execute.

## Configure `settings.json`

Copy/past at the end of the `settings.json` file:

```json title="settings.json"
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
  }
],
```

## Add keyboard shortcut

Copy/past to `keybindings.json`:

```json title="keybindings.json"
{
  "key": "alt+g c",    // whatever keybinding you like
  "command": "extension.multiCommand.execute",
  "args": { "command": "multiCommand.autoFrontmatter" },
},
```

## Result

Now you can type `Alt+G c` and you’ll automatically get a front matter with 3 fields:

```md
---
id: auto-front-matter
title: auto Front Matter
date: 2021-03-16 11:26:47
---
```

## To Do

I want this command macro to run whenever I create a new markdown file.

## Source

- <a href='https://stackoverflow.com/questions/64487646/nested-regex-replacement-in-vs-code-snippet' class='external'>stackoverflow.com: Refactor Headings</a>
- or <a href='https://stackoverflow.com/questions/59759720/vs-code-snippets-regex-multiple-operations' class='external'>stackoverflow.com: Replace Danish Characters</a>
