---
id: tabs-snippet
title: Tabs Snippet
date: 2022-05-27 16:41:06
---

## Usage

- type two keywords with one space between them: `JSX React`
- cut this text
- press `Ctrl + Space`
- type `Tab` (look for: Tabs-from-Clipboard)

You should see a ready form:

````jsx
import Tabs from '@theme/Tabs'  
import TabItem from '@theme/TabItem'

<Tabs>
  <TabItem value="jsx" label="JSX" default>

```

```

  </TabItem>
  <TabItem value="react" label="React">

```

```

  </TabItem>
</Tabs>
````

## View

import BrowserWindow from '@site/src/components/BrowserWindow'  
import Tabs from '@theme/Tabs'  
import TabItem from '@theme/TabItem'

<BrowserWindow>

<Tabs>
  <TabItem value="jsx" label="JSX" default>

```

```

  </TabItem>
  <TabItem value="react" label="React">

```

```

  </TabItem>
</Tabs>

</BrowserWindow>

## Snippet Code

````json title="global.code-snippets"
"Tabs": {
		"scope": "javascript,typescript,html,markdown",
		"prefix": "Tabs-from-Clipboard",
		"body": [
			"import Tabs from '@theme/Tabs'  ",
			"import TabItem from '@theme/TabItem'",
			"",
			"<Tabs>",
			"  <TabItem value=\"${CLIPBOARD/(.*)\\s.*/${1:/downcase}/}\" label=\"${CLIPBOARD/(.*)\\s.*/$1/}\" default>",
			"",
			"```",
			"",
			"```",
			"",
			"  </TabItem>",
			"  <TabItem value=\"${CLIPBOARD/.*\\s(.*)/${1:/downcase}/}\" label=\"${CLIPBOARD/.*\\s(.*)/$1/}\">",
			"",
			"```",
			"",
			"```",
			"",
			"  </TabItem>",
			"</Tabs>"
		],
		"description": "Make anchor from clipboard"
	},
````
