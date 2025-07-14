---
title: Killing the most resource-intensive process
tags: linux, bash
---

A fun little one-liner from [Claude](https://claude.ai/) to kill the most resource-intensive process owned by me:

```bash
pkill -9 -f "$(ps -U $USER -o pid,command --sort=-pmem | awk 'NR>1 {print $2; exit}')"
```
