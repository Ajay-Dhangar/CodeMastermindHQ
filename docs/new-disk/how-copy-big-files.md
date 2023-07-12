---
id: how-copy-big-files
title: How Copy Big Files
---

I ran this:

```
$ rsync -a --info=progress2 --info=name0 /mnt/sda4/ /mnt/sdc2/

```

but need to run this:

```
sudo rsync -rah --stats --info=progress2 '/path/to/source' '/path/to/destination'
```
From here:  
https://superuser.com/questions/1271882/convert-ntfs-partition-to-ext4-how-to-copy-the-data/1464264#1464264