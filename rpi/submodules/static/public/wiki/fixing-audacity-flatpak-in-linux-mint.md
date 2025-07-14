---
title: Fixing Audacity Flatpak in Linux Mint
tags: linux, audio, music
---

After installing Audacity in Flatpak in Linux Mint (and perhaps in other distros), Audacity won't launch. It just hangs forever. The fix (from [here](https://github.com/audacity/audacity/issues/3332#issuecomment-1288399427)) is to remove "xdg-run/pipewire-0" from the "Filesystem" > "Other files" settings Flatseal:

![](res/media/img/audacity-flatpak-fix.png)
