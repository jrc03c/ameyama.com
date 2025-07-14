---
title: Detecting browser vs. Node environment
tags: node, javascript, web, programming
---

From [here](https://stackoverflow.com/a/31090240):

```js
const isBrowser = new Function(
  "try { return this === window } catch(e) { return false }",
)

console.log("is browser:", isBrowser())
```
