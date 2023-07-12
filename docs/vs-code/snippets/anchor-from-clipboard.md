---
id: anchor-from-clipboard
title: Anchor From Clipboard
date: 2021-02-22 14:34:39
description: Make anchor from `clipboard` with regex
---

This snippet is universal. It’s useful with `markdown` files, `javascript` and `html` files, so we’ll make a global snippet.

## Global Snippets

Find your global snippet file in `File > Preferences > User Snippets` and open it. If this file doesn’t exist, create it using the `New Global Snippets file...` parameter. Type a file name such as `global` and press `Enter`. In this case the filename should be `global.code-snippets`.

Full path to this file in Linux `/home/papa/.config/Code/User/snippets/global.code-snippets`.

Copy/past this code into the `global.code-snippets` file, save it and use it.

```json title="global.code-snippets" {2,5}
	"anchor": {
		"scope": "javascript,typescript,html,markdown",
		"prefix": "Anchor-from-Clipboard",
		"body": [
			"<a href='${CLIPBOARD/(.*)\\s(.*)/$1/}' class='external'>${CLIPBOARD/.*\\/\\/(www\\.)?([^\\/]+)\\/.*/$2/}</a>",
		],
		"description": "Make anchor from `clipboard`"
	},
```

### Scope

Notice this line `"scope": "javascript,typescript,html,markdown",` in the above code. It is an array of types. If you want to use this snippet in different types of files, you need to insert those types into this array.

### RegEx

The regular expression processes the CLIPBOARD variable, clearing it of redundant data:

```shell
CLIPBOARD/.*\\/\\/(www\\.)?([^\\/]+)\\/.*/$2/
```

As result, after copying the link and executing the snippet via `Ctrl + Space` we will have:

```jsx
<a href='https://code.visualstudio.com/docs/editor/userdefinedsnippets' class='external'>code.visualstudio.com</a>
```

## Usage

Copy some `url` > type `anc` in document > press `Ctrl + Space` > Select `Anchor-from-Clipboard`

The links you see below are made using this snippet. Easy and fast.

## Versions

At the moment (2021-03-29 13:45:57), I have 5 versions of this snippet:

1. Anchor-for-Clipboard (`clipboard`→href; `shortened clipboard`→between tags)
2. Anchor-for-Clipboard2 (`clipboard`→href; `highlighted`→between tags)
3. Anchor-for-Clipboard3 (`clipboard`→href; `shortened clipboard: highlighted`→between tags)
4. Anchor-for-Clipboard4 (`clipboard`→href; `highlighted (shortened clipboard)`→between tags)
5. Macro (`clipboard`→href; `shortened clipboard: cleared and capitalized page slug`→between tags)

### Examples

For example, if you copied (`Ctrl+C`) this url:

```shell
https://stackoverflow.com/questions/25703360/regular-expression-extract-subdomain-domain
```

and do highlight these words: Extract Subdomain

and then start snippets (`Ctrl+Space` and select some of  `Anchor-for-Clipboard`s)…

You’ll get the corresponding output for the Versions section above:

1. <a href='https://stackoverflow.com/questions/25703360/regular-expression-extract-subdomain-domain' class='external'>stackoverflow.com</a>
2. <a href='https://stackoverflow.com/questions/25703360/regular-expression-extract-subdomain-domain' class='external'>Extract Subdomain</a>
3. <a href='https://stackoverflow.com/questions/25703360/regular-expression-extract-subdomain-domain' class='external'>stackoverflow.com: Extract Subdomain</a>
4. <a href='https://stackoverflow.com/questions/25703360/regular-expression-extract-subdomain-domain' class='external'>Extract Subdomain (stackoverflow.com)</a>
5. <a href='https://stackoverflow.com/questions/25703360/regular-expression-extract-subdomain-domain' class='external'>stackoverflow.com: Regular Expression Extract Subdomain Domain</a>

## Source

- <a href='https://code.visualstudio.com/docs/editor/userdefinedsnippets' class='external'>code.visualstudio.com</a>
- <a href='https://stackoverflow.com/questions/25703360/regular-expression-extract-subdomain-domain' class='external'>stackoverflow.com</a>
