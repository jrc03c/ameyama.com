---
title: Copying permissions one from file to another
tags: linux, programming
---

```bash
chown --reference=file1 file2
chmod --reference=file1 file2
```

## Sources

- [https://unix.stackexchange.com/a/20646](https://unix.stackexchange.com/a/20646)
