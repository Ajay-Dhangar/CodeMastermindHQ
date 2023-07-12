---
id: mv-permission-denied
title: mv Permission Denied
date: 2021-02-24 19:39:11
description: Permission denied in Windows VS Code or when using mv in Git-Bash or PowerShell
---


If you can't rename file in `VS Code` or
you can't move the file  with:

```shell title="Git-Bash or PowerShell"
mv docs\games\capture\ docs
```

You need to replace the owner of the parent folder (in my case it's the `docs` folder) and all subfolders and child files.

## Replace Folder Owner

Try this:

- Right click, select `Properties`.
- Click the `Security` tab.
- Click `Advanced`.
- Click the Owner: ... `Change`.
- Click `Advanced` again.
- Click `Find now`.
- Choose `Everyone` and click `OK`.
- Check `Replace owner on subcontainers and objects`.
- Click `Apply`.
- Wait for the change of ownership...
- Read `If you have just taken...`, click `OK`.
- Click `OK`.

## Source

<a href='https://superuser.com/questions/614237/permission-denied-when-using-mv-in-windows-7-cygwin#617547' class='external'>superuser.com</a>
