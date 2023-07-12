---
id: move-c-users-to-f-users
title: Move C:\Users To F:\Users
date: 2021-11-03 09:04:08
---

Source: <a href='https://www.tenforums.com/tutorials/1964-move-users-folder-location-windows-10-a.html' class='external'>tenforums.com: 1964 Move Users Folder Location Windows 10 A</a>

When installing Windows, at the step of selecting the region format (language and keboard layout), press `Ctrl+Shift+F3` to reboot into `Audit mode`.

After a while, press `Cancel` on the `System Preparation Tool 3.14` popup window.

Then create a file `relocate.xml` with following:

```sh title="relocate.xml" {4,6}
<?xml version="1.0" encoding="utf-8"?>
<unattend xmlns="urn:schemas-microsoft-com:unattend">
<settings pass="oobeSystem">
<component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<FolderLocations>
<ProfilesDirectory>F:\Users</ProfilesDirectory>
</FolderLocations>
</component>
</settings>
</unattend>
```

Pay attention to the property: `processorArchitecture="amd64"` (if you have 32-bit Windows, it should be `"x86"`).

And look at the inner of the `<ProfileDirectory>` tag: `F:\Users`. This is the new location of the `C:\Users` folder.
