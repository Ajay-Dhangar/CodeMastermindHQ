---
id: ntfs-partition-permissions-denied
title: NTFS Partition Permissions Denied
date: 2022-01-19 12:56:31
---

[How do I use 'chmod' on an NTFS (or FAT32) partition?](https://askubuntu.com/a/91054/191007)

Don't forget reboot!

:::caution

I had to stop using **ntfs-3g** due to unexpected "permission denied" failures.

:::

Useful commands:

```sh
# for one file

stat -c '%a - %n' filename     # list file permission in 777 style
chmod 755 filename             # change file permission to 755

# for all files in current folder

stat -c '%a - %n' *
chmod 755 -R *                 # change permissions recursively

```
