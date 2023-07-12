---
id: php-server-extension
title: PHP Server Extension VS Code
date: 2022-01-17 18:35:25
---

- First, [install PHP](../../workplace/windows/install-php-windows) itself
- Install the <a href='https://marketplace.visualstudio.com/items?itemName=brapifra.phpserver' class='external'>PHP server</a> extension.
- Add this code to your [settings.json](../open-settings-json-vscode) vscode:

```json
  "php.validate.executablePath": "C:\\php",
  "phpserver.phpPath": "C:\\php\\php.exe",
  "phpserver.port": 3025
```

:::caution

Notice the double backslash in the above paths. It is important.

:::

:::tip

Port: 3000 by default.

:::
