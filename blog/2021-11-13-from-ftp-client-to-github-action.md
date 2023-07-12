---
title: 'CI evolution: From FTP client to GitHub Action'
author: Ajay Dhangar
tags: [ftp, sftp, GitHub Action, ftp deploy]
date: 2021-11-13 13:22:39
decription: The evolution of remote file management
draft: false
---

I started with the `FTP client` built into `Dreamweaver`.

<!--truncate-->

Then I switched from Dreamweaver to `VS-Code` and started looking for a tool to sync local and remote servers.

## `SFTP` extension

At first, such a tool was the liximono `SFTP` extension (I even made a small contribution to get around the annoying <a href='/blog/2021/11/06/fix-bug-in-vscode-extension'>upload bug</a>. But it works manually, and I kept looking.

## `git-ftp` shell program

I couple of days ago I stumbled upon (while GitHub searching) the <a href='https://github.com/git-ftp/git-ftp' class='external'>github.com: git-ftp</a> shell program from SamKirkland. This program checks the difference (git diff) between local and remote content and uploads new files automatically.

## FTP Deploy Action

Then I found that Sam had already made the GitHub Action script <a href='https://github.com/marketplace/actions/ftp-deploy?version=3.1.1' class='external'>github.com: FTP-Deploy</a>, I configured it and started using it.
