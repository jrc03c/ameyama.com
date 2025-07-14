---
title: Detect main thread vs. web worker context
tags: programming, js, web-dev
---

Here's a function for detecting whether or not a script is running in the browser's main thread or in a web worker context:

```
function isInWorkerContext() {
  return (
    typeof WorkerGlobalScope !== "undefined" &&
    self instanceof WorkerGlobalScope
  )
}
```

Source: [[link](https://stackoverflow.com/a/18002694)]
