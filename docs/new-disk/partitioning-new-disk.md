---
id: partitioning-new-disk
title: Partitioning a New Disk
---

If you bought new disk you need to partition it and install OS in one of these partitions. I have 512Gb NVMe disk.

## Boot Configuration

:::warning BIOS Setup

First of all, you must have a Boot Configuration like this:

```bios
 -------- Boot (tab) -------------

...
# 1     [P0: P3-256]
# 2     [UEFI OS (P0: P3-256)]
# 3     [UEFI: JetFlashTranscend …]
...
```

```bios
HARD DRIVE BBS PRIORITIES (subsection)

# 1     [P0 P3-256]
# 2     [NE-512]
# 3     [JetFlashTranscend ...]
...
```

```bios
CSM PARAMETERS (subsection)

...
Boot option filter:            [UEFI and Legacy]
Launch PXE OpROM:              [UEFI only]
Launch storage OpROM policy:   [UEFI only]
Launch Video OpROM policy:     [Legacy only]
Other PCI device ROM priority: [Legacy OpROM]
...
```

:::

## Linux

### Bash

todo

### KDE Partition Manager

1. Make new partiion table (select the `msdos` type; Windows may not be install in the `gpt` type)
2. Make new partition `ntfs` (size: 60Gb)
3. Make another new partition `ntfs` (size: remainder; with 550Mb free space after)
4. Make extra partition
5. Edit mount point:
   - first: /mnt/sdc1
   - second: /mnt/sdc2
6. Apply config

7. Make two dirs in bash:
   - /mnt/sdc1
   - /mnt/sdc2
8. Edit mount point again
9. Mount two new partitions with KDE Partition Manager

## Windows

### Installation Error

If you get some error during the installation:

```
couldn't partition ...
```

:::caution

**Rufus:** Add a `600 mb partition` in rufus settings

:::

:::caution Change Disk Order in BIOS

**Ventoy:** If you have multiple SSD, HDD or NVMe disks or mix from them, you, first of all, must set the order to the disk, where you want to install Windows, right after the the LIVE CD flash.

:::

Do it right inside Windows installer:

1. Press Shif + F10 (opens command line terminal)
2. (in the command line terminal) type following commands:

```cmd title="cmd"
diskpart
list disk
select disk 2      # where you want to install windows
clean
create partition primary size=60000      # or another size
format fs=ntfs quick
assign
active
list volume
exit
```

and enter to the windows install process again. Your partition be signed as a system type.

### Edit Partition in cmd

If you want edit a partition:

```cmd
list partition
select partition

disk 0 clean     # partition number for Windows installation
disk 0 create partition primary
disk 0 active
disk 0 format fs=ntfs quick
disk 0 assign
```

## Delete extra Windows Boot Loader

If you see two versions of Windows when booting you need to delete one of the Windows Boot Loaders:

```
bcdedit /delete {7ca97355-3bf6-11eb-95ba-ac7b2907d2c6}
```

With `id` another one Windows Boot Loader.

:::info update-grub

Needs to do if you see two entries of Windows on grub menu when booting

:::

## Helpful Commands

If installed Windows don't want start...

### Single Windows

```
bootrec /fixmbr
bootrec /fixboot
bootrec /scanos
bootrec /rebuildbcd
```

restart

```shell
bcdboot c:\windows /s c: /l en-us
```

### Multiple Windows

```
diskpart
list volume
```

select with `system` type

```
select volume ?
assign letter=z
exit
```

```
bcdboot c:\windows \s z: /f all
```

```
bcdboot c:\windows /s z: /f uefi
```
