---
title: Read a large file line-by-line in Node
tags: node, javascript, data-science, programming
---

```js
const fs = require("fs")
const readline = require("readline")

const stream = fs.createReadStream(file)

const rl = readline.createInterface({
  input: stream,
  crlfDelay: Infinity,
})

for await (const line of rl) {
  // do something with `line`
}
```
