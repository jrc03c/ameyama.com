---
title: Install Cinnamon (X11) on Fedora Silverblue
tags: linux, silverblue, fedora, cinnamon, x11, desktop-environments, window-managers
---

```
sudo rpm-ostree refresh-md
sudo rpm-ostree install cinnamon cinnamon-session gnome-session-xsession
```

I'm not totally sure if the `cinnamon-session` package is necessary, but the `gnome-session-xsession` definitely _is_ required to be able to run the X11 version of Cinnamon. Without it, only the experimental Wayland version of Cinnamon will be installed.
