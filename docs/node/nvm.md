---
id: nvm
title: nvm
date: 2021-03-12 10:11:23
---

Source: <a href='https://github.com/nvm-sh/nvm' class='external'>github.com: Node Version Manager</a>

Manage multiple installations of `node.js` on these platforms: unix, macOS, and windows WSL.

## Installation

1. Install `cURL` (a tool used for downloading content from the internet in the command-line) with:

   ```bash
   sudo apt-get install curl
   ```

2. Check the most recent release at <a href='https://github.com/nvm-sh/nvm' class='external'>github.com: Node Version Manager</a>. Adjust the below command to include the newest version:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
   ```

3. To verify installation, enter:

   ```bash
   command -v nvm
   ```

   this should return `nvm`, if you receive `command not found` or no response at all, close your current terminal, reopen it, and try again. <a href='https://github.com/nvm-sh/nvm' class='external'>Learn more in the nvm github repo</a>.

4. List which versions of `node` are currently installed (should be none at this point):

   ```bash
   nvm ls
   ```

5. Install two version of `node`:

   1. Current release of node.js (for testing the newest feature improvements, but more likely to have issues):

      ```bash
      nvm install node    # "node" is an alias for the latest version
      ```

   2. The latest stable LTS release of node.js (recommended):

      ```bash
      nvm install --lts
      ```

6. List what versions of `node` are installed:

   ```bash
   nvm ls
   ```

   now you should see the two versions that you just installed listed.

7. Verify that `node.js` is installed and the currently default version with:

   ```bash
   node --version
   ```

   Then verify that you have npm as well, with:

   ```bash
   npm --version
   ```

   (You can also use `which node` or `which npm` to see the path used for the default versions).

## Change Version of Node

To change the version of `node.js` you would like to use for a project, create a new project directory:

```bash
mkdir NodeTest  # create the directory

cd NodeTest     # enter the directory

nvm use node    # swith to the Current version or

nvm use --lts   # switch to the LTS version
```

You can also use the specific number for any additional versions you've installed, like:

```bash
nvm use v8.2.1
```

To list all of the versions of `node.js` available, use the command:

```bash
nvm ls-remote
```

:::tip

If you are using `nvm`to install `node.js` and `npm`, you should not need to use the `sudo` command to install new packages.

:::

## Set the Default Node Version

To set a default `node` version to be used in any new shell, use the alias 'default':

```bash
nvm alias default node

# in my case
nvm alias default 12

# and if you don't want restart shell
nvm use 12
```

## Updating

Installing the newer version of `nvm` using `cURL` will replace the older one, leaving the version of `node` you've used nvm to install intact. For example:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
```

:::caution

Remember to check the most recent release at <a href='https://github.com/nvm-sh/nvm' class='external'>github.com: Node Version Manager</a> and adjust the above command to include the newest version.

:::

## Auto-switching node version

See [nvm per Folder](nvm-per-project-folder)

## Related

- [nvs for Windows](https://papa31.github.io/hm/blog/2021/09/19/nvs-one-node-version-per-terminal-in-windows)
- [~~nvm-windows~~](nvm-windows)
