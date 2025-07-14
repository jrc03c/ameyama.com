---
title: `rsync` cheat sheet
tags: programming, linux
---

Specify SSH options to use:

```bash
rsync -arvz -e "ssh -p 12345 -i path/to/some_key" <source> <destination>
```

Show progress:

```bash
rsync -arvz --info=progress2 --info=name0 <source> <destination>
```
