---
title: Windows Terminal
---

source: https://docs.microsoft.com/en-us/windows/terminal/tutorials/powerline-setup

Powerline uses glyphs in order to style the prompt. If your font does not include Powerline glyphs, you may see several Unicode replacement characters '▯' throughout your prompt. Though [Cascadia Mono](https://docs.microsoft.com/en-us/windows/terminal/cascadia-code) does not include Powerline glyphs, you can install Cascadia Code PL or Cascadia Mono PL, which have the Powerline glyphs included. These fonts can be installed from the [Cascadia Code GitHub releases page](https://github.com/microsoft/cascadia-code/releases).

## Installation

You can install Windows Terminal from the [Microsoft Store](https://aka.ms/terminal).

If you don't have access to the Microsoft Store, the builds are published on the [GitHub releases page](https://github.com/microsoft/terminal/releases). If you install from GitHub, the terminal will not automatically update with new versions.

:::danger Error

```
Microsoft.PowerShell_profile.ps1 cannot be loaded because running
scripts is disabled on this system.
```

:::

To resolve issue, start Windows PowerShell with the "Run as administrator" option and run:

```powershell title="PowerShell"
Set-ExecutionPolicy RemoteSigned
```

You can check powershell execution policy:

```powershell title="PowerShell"
get-executionpolicy
```

If you see above error, do this:

```powershell

```

## Powerline in PowerShell

### PowerShell prerequisites

If you don't already have it, [install Git for Windows](https://git-scm.com/downloads).

Using PowerShell, install Posh-Git:

```powershell title="PowerShell"
Install-Module posh-git -Scope CurrentUser
```

and Oh-My-Posh:

```powershell title="PowerShell"
Install-Module oh-my-posh -Scope CurrentUser
```

:::tip

You may need to install NuGet if you don't already have it. Your PowerShell command line will ask if you want to install NuGet if this is the case. Select [Y] Yes. You may also need to approve that you are installing modules from PSGallery, an 'untrusted repository'. Select [Y] Yes.

:::

Posh-Git adds Git status information to your prompt as well as tab-completion for Git commands, parameters, remotes, and branch names. Oh-My-Posh provides theme capabilities for your PowerShell prompt.

If you are using PowerShell Core, install PSReadline:

```powershell title="PowerShell"
Install-Module -Name PSReadLine -Scope CurrentUser -Force -SkipPublisherCheck
```

### Customize your PowerShell prompt

Open your PowerShell profile with `notepad $PROFILE` or the text editor of your choice. This is not your Windows Terminal profile. Your PowerShell profile is a script that runs every time PowerShell starts. [Learn more about PowerShell profiles](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles).

In your PowerShell profile, add the following to the end of the file:

```powershell title="PowerShell"
Import-Module posh-git
Import-Module oh-my-posh
Set-PoshPrompt -Theme paradox
```

:::warning Error

If you get the error: `Windows cannot access the specified device, path, or file`... Locate the `"C:\Program Files\WindowsApps\Microsoft.WindowsTerminal_1.10.2714.0_x64__8wekyb3d8bbwe\WindowsTerminal.exe"` file and run `Take Ownership` from right context menu. After that use this file to create the desktop shortcut.

:::

## Set Cascadia Code PL as fontFace in settings

To set the Cascadia Code PL font for use with PowerLine (after [downloading, unzipping, and installing](new-windows-setup#installing-fonts) on your system), you will need to open your profile settings in your settings.json file by selecting Settings (Ctrl+,) from your Windows Terminal drop-down menu.

:::info

To see default.json you must hold Alt key and click Settings in Windows Terminal menu.

:::

Once your settings.json file opens, find the Windows PowerShell profile and add: "fontFace": "Cascadia Code PL" to designate Cascadia Code PL as the font. This will provide those nice Cascadia Code Powerline glyphs. You should notice the change in your terminal as soon as you select Save in your editor.

Your Windows PowerShell profile settings.json file should now look like this:

```json title="settings.json"
{
    // Make changes here to the powershell.exe profile.
    "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
    "name": "Windows PowerShell",
    "commandline": "powershell.exe",
    "fontFace": "CaskaydiaCove Nerd Font Mono",//"Cascadia Code PL",
    "hidden": false,
    "startingDirectory": "F:/Yandex.Disk-parsh/hm/"
},
```

:::caution

The `fontFace` entry has been changed because some glyphs in the `Cascadia Code PL` are displayed incorrectly.

:::

## After installing Git & Multipass

Add this in `settings.json`:

```json title="settings.json"
{
    "background" : "#350425",
    "commandline" : "multipass shell",
    "cursorShape" : "filledBox",
    "fontFace" : "Ubuntu Mono",
    "guid" : "{aaaa9e6d-1e09-4be6-b76c-82b4ba1885fb}",
    "historySize" : 50000,
    "icon" : "F:/Program Files/Multipass/bin/multipass_wt.ico",
    "name" : "Multipass"
},
{
    "background" : "#1a0a3f",
    "commandline" : "F:/Program Files/Git/bin/bash.exe",
    "cursorShape" : "filledBox",
    "fontFace" : "Cascadia Code PL",
    "guid" : "{00000000-0000-0000-0000-000000000001}",
    "historySize" : 50000,
    "icon" : "C:/Program Files/Git/mingw64/share/git/git-for-windows.ico",
    "name" : "Git-Bash",
    "startingDirectory": "F:/Yandex.Disk-parsh/hm/"
},
// or simply
{
    "guid": "{2ece5bfe-50ed-5f3a-ab87-5cd4baafed2b}",
    "name": "Git Bash /english-polyglot",
    "source": "Git",
    "startingDirectory": "F:/Yandex.Disk-visi/english-polyglot/english-polyglot.com/"
},
```

To see `default.json` you must hold Alt key and click Settings in Windows Terminal menu.

:::caution

But I can't change `default.json` from Windows 10 due to permission issue.

:::
