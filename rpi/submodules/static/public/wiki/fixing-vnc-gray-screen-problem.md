---
title: Fixing VNC gray-screen problem
tags: linux
---

While trying to use VNC with an Xubuntu host (i.e., the machine running the VNC server), I could connect successfully but could only see the color gray and nothing else. The following change to the host's `~/.vnc/xstartup` file fixed the problem.

1. Back up the original `~/.vnc/xstartup` file.
2. Change the contents of `~/.vnc/xstartup` to:

```
#!/bin/sh
unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS
startxfce4 &
```

See more info about setting up a VNC server on Linux [here](/doc/30b906befc888fdfd7a3040316097a21700a33810ab003b6dc6bd92209bdf35a).
