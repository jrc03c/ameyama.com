---
title: Set Express server port randomly
tags: node, javascript, web, programming
---

```js
const express = require("express")
const app = express()

const server = app.listen(0, () => {
  const port = server.address().port
  console.log(`Listening on port ${port}...`)
})
```
