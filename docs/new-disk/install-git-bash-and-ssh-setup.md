---
id: install-git-bash-and-ssh-setup
title: Install Git Bash and SSH Setup
date: 2021-11-08 11:14:23
---

## Git-Bash

:::info

When you install Git-Bash, you also install `OpenSSH` suit.

:::

Download `Git for Windows`: <a href='https://git-scm.com/download/win' class='external'>git-scm.com: Win</a>

:::caution

If you change the default `Git-Bash` location, for example, to the `F:\Program Files\Git` folder, after a while you might get messages:

```sh
git not installed...
```

or

```sh
add to PATH
```

If so, you need to add `F:\Program Files\Git\cmd` to your `Path` environment variable.

:::

## SSH

:::warning

For security reasons, you need to create another key pair, regarless of their presence, for each new connection.

:::

Generate new ssh keys:

```bash title="Git-Bash"
ssh-keygen -t rsa -f ~/.ssh/id_rsa_your_new_connection -b 4096 -C "your_email@example.com"
```

When prompt `"Enter a file..."` press Enter.  
When prompt `"Enter passphrase..."` press Enter.

Starting ssh-agent:

```bash
eval $(ssh-agent -s)
```

Adding ssh-key to ssh-agent:

```bash
ssh-add ~/.ssh/id_rsa_your_new_connection
```

## Connect to GitHub

Open ssh pub-key:

```bash
cat ~/.ssh/id_rsa.pub
```

Copy/past the above output into your GitHub account settings (new SSH key).

Read more: <a href='https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account' class='external'>docs.github.com: Adding a new SSH key to your GitHub account</a>

## Git author identity

to set your account's default identity, run:

```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

## Check Connection

Source: <a href='https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection' class='external'>docs.github.com: Testing Your SSH Connection</a>

After saving the new SSH key to GitHub, open Git-Bash and run the command:

```bash title="Git-Bash"
ssh -T git@github.com
```

You may see a warning like this:

```bash
> The authenticity of host 'github.com (IP ADDRESS)' can't be established.
> RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
> Are you sure you want to continue connecting (yes/no)?
```

Enter `Yes` and then run `git push` from any folder connected to GitHub.

You will see a GitHub checkout popup.

Choose the second method using `code` and copy/past the suggested code into the provided link.

## Sources

- <a href='https://docs.github.com/en/authentication/connecting-to-github-with-ssh' class='external'>docs.github.com: Connecting to GitHub with SSH</a>

- <a href='https://help.dreamhost.com/hc/en-us/articles/216499537-How-to-configure-passwordless-login-in-Mac-OS-X-and-Linux' class='external'>help.dreamhost.com: 216499537 How to Configure Passwordless Login in MacOS X and Linux</a>

- <a href='http://mah.everybody.org/docs/ssh' class='external'>mah.everybody.org: Using ssh-agent with ssh</a>
