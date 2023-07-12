---
id: all-vscode-keyboard-shortcuts
title: All vscode Keyboard Shortcuts
date: 2021-02-15 15:02:28
description: What keyboard shortcuts do I use with VS Code
---

## Windows & Linux Sync Keyboard Shortcuts

How do I sync keyboard shortcuts across platforms (Linux, Windows, Mac)?

Internal settings do not support this option.

I copied `keybindings.json` when I being in Linux to Windows disk:

```shell
cp ~/.config/Code/User/keybindings.json '/mnt/sdc1/Users/parsh/Application Data/Code/User/'
```

### Auto Sync

Synchronization in `vscode` can be performed automatically after loggin into `vscode` and enabling `Settings Sync` option.

:::important

You need to be logged into the same account on both OS. (e.g. PaPa31 (GitHub) on Linux & PaPa31 (GitHub) on Windows)

:::

## Keyboard Shortcuts List

[Default hotkeys(shortcuts)](https://nikomedvedev.ru/other/vscodeshortcuts/hotkeys.html)

<small>

|  | Keyboard Shortcut | How Did | Description | Result |
| --- | --- | --- | --- | --- |
| 1 | `Ctrl+k t` | [copy/past](https://stackoverflow.com/questions/38780057/how-to-insert-current-date-time-in-vscode#57654879) to keybindings.json | Insert readable Date & Time | 2021-02-05 20:22:46 |
| 2 | `Ctrl+k Shift+t` | see above | Insert unreadable Date & Time | 20210205202330 |
| 3 | Change ~~`Shift+Alt+/`~~ to `Ctrl+Shift+/` | Press `Ctrl+Shift+P`> type Emmet: Wrap with Abbreviation > press `gear` icon | Wrap with `some` HTML-tags | type log2 > select 2 > `Ctrl+Shift+/` > type sub + Enter > log<sub>2</sub> |
| 4 | `Ctrl+e Up` | [Snippet + Shortcut](snippets/snippet-plus-shortcut) | Wrap with `<sup>` tags | 23 -> 2<sup>3</sup> |
| 5 | `Ctrl+e Down` | see above | Wrap with `<sub>` tags | log2 -> log<sub>2</sub> |
| 6 | `Ctrl+e t` | see above | Wrap with `<textarea>` and some text | `<textarea>Your answer:</textarea>` |
| 7 | `Ctrl+g c` | NOTE, TIP, IMPORTANT, CAUTION, WARNING | add markdown admonition | `::: :::` |
| 8 | `Ctrl+g t` |  | add markdown code block | ` ``` ``` ` |
|  | `Ctrl+g s` |  | add md code block with shell type | ` ```shell ``` ` |
| 9 | `Alt+g c` | [Macro: createAutoFrontmatter](macros/1-auto-frontmatter) | add markdown frontmatter | `--- ... ---` |
| 10 | `Ctrl+g a` | make external link with 2 vars | 1st var -> copy some link; 2nd var highlight some text | <a href='https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode' class='external'>Prettier</a> |
| 11 | `Ctrl+g y` |  | insert advanced code block | `jsx title="App.js" {}` |
| 12 | `Alt+g a` | AutoAnchor: make external link using copied link | Caution: place cursor at start of line | <a href='https://code.visualstudio.com/api/get-started/your-first-extension' class='external'>code.visualstudio.com: Your First Extension</a> |
| 13 | `Alt+g Shift+s` |  | AutoAnchor with "Source:" |  |
| 14 | `Alt+g Shift+r` |  | AutoAnchor with "Read more:" |  |
| 15 | `Ctrl+Alt+1` or `Ctrl+1` |  | Open default browser |  |
| 16 | `Alt+g f` |  | Inspect TM scopes |  |
| 17 | `Ctrl+n` |  | open new file |  |
| 18 | `Ctrl+Alt s` |  | save all files |  |
| 19 | `Ctrl+K Ctrl+w` |  | close all tabs |  |
| 20 | `Alt+G u` |  | [Macro: updateAutoFrontmatter](macros/2-auto-frontmatter) |  |
| 21 | `Ctrl+g i` |  | make md clickable image below selected Header | `[![](.png)](.png)` |

</small>
