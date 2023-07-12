---
id: sftp-extension-and-ssh-settings
title: SFTP Extension and SSH Settings
date: 2021-09-09 19:43:14
---

:::caution

After changing the password in the Dreamhost panel, I was able to connect with `ssh my-login@my-host.com` comand.

:::

But until I did this, I copied/pasted the keys manually through the file manager.

## Make a pair of keys

See [SSH setup](../new-disk/install-git-bash-and-ssh-setup#ssh).

Last time I made them like this: <a href='https://help.dreamhost.com/hc/en-us/articles/216499537-How-to-configure-passwordless-login-in-Mac-OS-X-and-Linux' class='external'>help.dreamhost.com: How To Configure Passwordless Login In Mac OS X And Linux</a>).

Another article: <a href='http://mah.everybody.org/docs/ssh' class='external'>mah.everybody.org: Using ssh-agent with ssh</a> may be help.

## Copy/past a pub key

Copy/past the contents of the pub key into the file `/home/papa31/.ssh/authorized_keys` on the dreamhost server:

:::caution

On Windows, it works in the [Git-Bash](../new-disk/install-git-bash-and-ssh-setup) terminal.

:::

```bash
cat ~/.ssh/id_rsa_your_new_connection.pub | ssh you@remote 'cat - >> ~/.ssh/authorized_keys'
```

:::note

If you can't deliver the pub key via command, try do this manually through the web-based FTP client (File Manager).

:::

## Connect to Dreamhost

## Setup `sftp.json` config file

- Don't change the settings file: `F:\Yandex.Disk-visi\english-polyglot\english-polyglot.com\.vscode\sftp.json`

- All you have to do is make sure that you have done your job correctly (especially when copying/pasting the contents of the pub key)
