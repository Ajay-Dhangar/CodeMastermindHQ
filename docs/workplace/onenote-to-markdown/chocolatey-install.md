---
id: chocolatey-install
title: Chocolatey Install
date: 2022-02-08 22:08:04
---

Source: [chocolatey.org](https://docs.chocolatey.org/en-us/choco/setup)

`Chocolatey` a package manager for Windows. It will make the work of installing the rest of the programs easier.

Chocolatey needed to [install pandoc](pandoc-install) or to install [VirtualBox](../../virtual-machines/docker/install-docker-software#install-virtual-box) for Docker.

```sh title="PowerShell (as admin)"
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

:::warning

It's very likely you will need to close and reopen your shell before you can use choco.

:::

## Resources

- [Convert OneNote to Markdown](onenote-to-markdown.md)
