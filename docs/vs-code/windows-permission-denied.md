---
id: windows-permission-denied
title: Windows Permission Denied
date: 2021-02-24 20:35:24
description: Permission denied in Windows VS Code or when using mv in Git-Bash or PowerShell   
---

If you can't rename file in `VS Code` or
you can't move the file  with:

```shell title="Git-Bash or PowerShell"
mv docs\games\capture\ docs
```

You need to [replace the owner](../workplace/windows/mv-permission-denied) of the parent folder (in my case it's the `docs` folder) and all subfolders and child files.
