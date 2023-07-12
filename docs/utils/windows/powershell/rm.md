---
id: rm
title: rm
date: 2021-03-09 15:50:00
description: Remove analogue to PowerShell
---

Remove Item

## Delete folder

### Usage

```PowerShell title="PowerShell"
Remove-Item C:\tmp -Recurse -Force
```

or short:

```shell title="PowerShell"
rm C:\tmp -r -fo
```

### Example

```shell title="PowerShell"
rm node_modules package-lock.json -r -fo
```

source: <a href='https://stackoverflow.com/questions/10443891/powershell-command-rm-rf' class='external'>stackoverflow.com</a>
