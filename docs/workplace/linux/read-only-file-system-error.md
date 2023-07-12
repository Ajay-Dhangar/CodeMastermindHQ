---
id: read-only-file-system-error
title: Read Only File System Error
date: 2021-03-11 10:41:59

---

I got this error after a sudden power outage. I was in Windows. After a reboot, I couldn't save any file on Linux:

```shell
touch /file

Error: Permission Denied
```

## Unmount/mount

I read link below and many others on a search query: `read-only file system` but without success. But after `unmount/mount` my disk `/mnt/sdc2/` in KDE Partition Manager, the problem was gone!

Read more: <a href='https://askubuntu.com/questions/197459/how-to-fix-sudo-unable-to-open-read-only-file-system' class='external'>askubuntu.com</a>
