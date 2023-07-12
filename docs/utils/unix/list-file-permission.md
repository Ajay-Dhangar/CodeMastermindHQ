---
id: list-file-permission
title: List File Permission
date: 2022-05-17 07:16:27
---

```bash
# for one file

stat -c '%a - %n' filename     # list file permission in 777 style
chmod 755 filename             # change file permission to 755

# for all files in current folder

stat -c '%a - %n' *
chmod 755 -R *                 # change permissions recursively
```
