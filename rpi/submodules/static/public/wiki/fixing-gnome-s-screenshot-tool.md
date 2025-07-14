---
title: Fixing Gnome's screenshot tool
tags: linux
---

Sometimes, Gnome's screenshot tool, `gnome-screenshot`, fails to copy any image data to the clipboard. The following commands can be invoked instead as a workaround.

Screenshot (full screen):

```bash
gnome-screenshot -cf /tmp/test && cat /tmp/test
```

Screenshot (area selection):

```bash
gnome-screenshot -acf /tmp/test && cat /tmp/test
```

(The only difference between the two is the lack of `-a` flag in the first command.)
