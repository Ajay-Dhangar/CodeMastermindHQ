---
id: certUtil
title: certUtil
date: 2022-08-31 18:50:30
---

Checksum. Works both in Windows CMD and PowerShell.

## MD5 checksum

```cmd
C:\> certUtil -hashfile C:\MX-21.1_KDE_x64.iso MD5
```

## SHA256 checksum

```Powershell
C:\> certUtil -hashfile C:\MX-21.1_KDE_x64.iso SHA256
```

Available hash algorithms:

- MD2
- MD4
- MD5
- SHA1
- SHA256
- SHA384
- SHA512
