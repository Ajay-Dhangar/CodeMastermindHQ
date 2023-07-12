---
id: README
title: MX Linux
date: 2022-05-22 20:26:24
---

The latest MX Linux distro: <a href='https://mxlinux.org/mx-linux-blog/' class='external'>mxlinux.org: MX Linux Blog</a>

## MX-21

- **Base on**: Debian 11 “bullseye”
- New and updated applications
- New installer partition selection/management area including some lvm support if lvm volume exists already and the ability to set existing data partitions to be mounted on install
- New UEFI live system boot menus. UEFI live users can now select your live boot options (persistence, etc…) from the boot menu and submenus rather than using the previous console menus
- Xfce 4.16, Plasma 5.20, fluxbox 1.3.7 with mx-fluxbox 3.0 configs
- User password (sudo) for admin tasks by default. You can switch this in mx-tweak->Other tab
- MX-Tour showing an overview of each desktop environment
- Translation updates!
- MX-Comfort default theming, including dark variants and “thick border” Xfwm variants
- Mesa vulkan drivers are installed by default
- Better realtek wifi support
- A ton of customization and custom scripts in MX-Fluxbox

antiX live system changes:

- UEFI Live boot menus
- Extra “rollback” boot option now exposed in menus
- The live system will likely not boot on systems with secure boot enabled (at least for now…)

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
