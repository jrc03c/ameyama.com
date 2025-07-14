---
title: Get a user's home directory in Node
tags: node, javascript, programming, linux, mac, macos
---

To get a user's home directory in Node in a platform-agnostic way, do:

```
const os = require("node:os")
const home = os.homedir()
```
