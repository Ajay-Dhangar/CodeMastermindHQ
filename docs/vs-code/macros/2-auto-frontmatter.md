---
id: 2-auto-frontmatter
title: 2 Auto Frontmatter
date: 2021-02-21 18:52:09
description: A snippet that takes the old frontmatter and updates the id and title, but doesn't change the old file creation date
---

I have a couple of solutions to automatically create a frontmatter.

## Snippet

I started from snippet...

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

To run the snippet, start a new file, press `Ctrl + Space`, type `id` and choose `Docusaurus-id`.

## Macro: createAutoFrontmatter

Then I created the [createAutoFrontmatter](1-auto-frontmatter) macro using a [multi-command extension](../extensions/multi-command-extension). This macro is more convenient.

To use it, just press `Alt+G c`.

## Macro: updateAutoFrontmatter

If you've changed the name of markdown file and want to update its `frontmatter`, just press `Alt+G u`.

:::tip

Currently, this macro not only `changes the frontmatter` of the file, but also `saves the edited file` and `returns focus to the sidebar` to continue working with the files.

:::

```jsx title="settings.json" {}
    {
      "command": "multiCommand.updateAutoFrontmatter",
      "label": "Markdown",
      "description": "Update Auto Frontmatter",
      "sequence": [
        "workbench.action.focusFirstEditorGroup",
        "cursorTop",
        "cursorDown",
        "cut",
        "cut",
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
        "type",
        "workbench.action.files.save",
        "workbench.action.focusSideBar"
      ]
    },
```

## Add a Shortcut

```jsx title="keybindings.json" {}
  {
    "key": "alt+g u",
    "command": "extension.multiCommand.execute",
    "args": { "command": "multiCommand.updateAutoFrontmatter" },
  },
```
