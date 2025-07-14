---
title: Restarting a Node process from within itself
tags: js, programming
---

```
import { spawn } from "node:child_process"
import process from "node:process"

process.on("exit", () => {
  spawn(process.argv.shift(), process.argv, {
    cwd: process.cwd(),
    detached: true,
    stdio: "inherit",
  })

  // not sure if this is necessary:
  process.kill()
})

process.exit()
```
