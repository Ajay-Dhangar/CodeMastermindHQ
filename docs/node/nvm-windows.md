---
id: nvm-windows
title: nvm-windows
date: 2021-03-09 00:44:57
---

Manage multiple installations of `node.js` on a Windows computer.

:::warning

I found out that <a href='https://github.com/jasongin/nvs#automatic-switching-per-directory' class='external'>nvs</a> is better for using with multiple node versions. See my [post](../../blog/2021/09/19/nvs-one-node-version-per-terminal-in-windows).

:::

Source: <a href='https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows' class='external'>github.com: Node Version Manager (nvm) for Windows</a>

## nvm-windows Installation

:::caution

It is always recommended to remove any existing installations of `Node.js` or `npm` from your operating system before installing a version manager as the different types of installation can lead to strange and confusing conflicts. This includes deleting any existing nodejs installation directories (e.g., `C:\Program Files\nodejs`) that might remain. `nvm`'s generated symlink will not overwrite an existing (even empty) installation directory. For help with removing previous installations, see <a href='https://stackoverflow.com/questions/20711240/how-to-completely-remove-node-js-from-windows' class='external'>stackoverflow.com: How to completely remove node.js from Windows</a>.

:::

1. Download from <a href='https://github.com/coreybutler/nvm/releases' class='external'>github.com: nvm (Windows) releases</a> one of the latest installers (for example, `nvm-setup.zip`), unzip it and run `nvm-setup.exe` file with default settings.

2. Open `PowerShell` and check the `npm` version:

   ```shell
   npm --version
   6.14.11
   ```

3. Install the current release of `node.js` (for testing the newest feature improvements, but more likely to have issues than the LTS version):

   ```shell
   nvm install latest
   ```

4. And install the latest stable LTS release of `node.js` (recommended) by first looking up what the current LTS version number is with:

   ```shell
   nvm list available
   ```

   :::tip

   Also you can see all available `node` versions at <a href='https://nodejs.org/en/download/releases/' class='external'>nodejs.org</a>

   :::

   then installing the LTS version number with:

   ```shell
   nvm install <version>
   ```

   replacing `<version>` with the number, ie: `nvm install 12.14.0`.

5. List what versions of `node` are installed:

   ```shell
   nvm ls
   ```

   now you should see the two versions that you just installed listed.

   :::note

   At the moment (2020-03-20), I have installed node.js version `10.x` due to compatibility issues and version `12.x` due to Docusaurus requirement.

   :::

6. After installing the `node.js` version numbers you need, select the version that you would like to use by entering:

   ```shell
   nvm use <version>
   ```

   replacing `<version>` with the number, ie: `nvm use 12.9.0`.

7. To change the version of `node.js` you would like to use for a project, create a new project directory:

   ```shell
   mkdir NodeTest   # Create the directory

   cd NodeTest      # and enter the directory

   nvm use <version>    # then enter node version
   ```

   replacing `<version>` with the version number you'd like to use (ie: `v10.16.3`).

8. Verify which version of `npm` is installed with:

   ```shell
   npm --version
   ```

   this version number will automatically change to whichever `npm` version is associated with your current version of `node.js`.

## Upgrading nvm-windows

To upgrade `nvm-windows`, run the new installer. It will safely overwrite the files it needs to update without touching your `node.js` installations. Make sure you use the same installation and `symlink folder`. If you originally installed to the default locations, you just need to click `next` on each window until it finishes.

## .nvmrc error Windows

If:

```powershell title="PowerShell"
❯ nvm use
.0.0
node v.0.0 (64-bit) is not installed.
```

First, run:

```powershell
nvm on
```

Then:

```powershell title="PowerShell"
type .\.nvmrc | %{$_ -replace "v",""} | %{nvm install $_}
type .\.nvmrc | %{$_ -replace "v",""} | %{nvm use $_}
```

Other nvm commands:

```powershell
nvm current
```

source: <a href='https://github.com/coreybutler/nvm-windows/issues/388#issuecomment-454985039' class='external'>github.com: nvm use with nvmrc as node node v.0.0 (64-bit) is not installed.</a>
