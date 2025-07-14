---
title: Securely wiping a drive or partition in Linux
tags: linux, privacy, security
---

```bash
sudo shred -fvz /dev/sdX
```

- `-f` = force write permission if nonexistent
- `-v` = be verbose
- `-z` = write zeros on final pass
