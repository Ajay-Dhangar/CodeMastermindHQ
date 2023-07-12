---
id: setup-ventoy-remove-win11-check
title: Setup Ventoy (Remove Win11 Check)
date: 2021-11-03 07:38:49
---

Source: <a href='https://www.ventoy.net/en/plugin_control.html' class='external'>ventoy.net: Plugin_control</a>

Download the latest version of `Ventoy` from here:

<a href='https://github.com/ventoy/Ventoy/releases' class='external'>github.com: Releases</a>

Launch the Ventoy GUI (Windows: "Ventoy2Disk.exe", Linux: "VentoyGUI.x86_64") and install `Ventoy` on a USB stick (8Gb or more).

After that, you will have A USB stick with two partitions: `Ventoy`(empty) and `VTOYEFI` (with files; this partition may be invisible).

First, copy/past an `windows.iso` into `Ventoy's` empty root. Then create a `ventoy` folder in the root and place a `ventoy.json` file with following content in this folder:

```json title="ventoy.json"
{
  "control": [{"VTOY_WIN11_BYPASS_CHECK": "1"}]
}
```
