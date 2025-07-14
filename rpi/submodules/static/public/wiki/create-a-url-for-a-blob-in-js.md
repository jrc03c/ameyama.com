---
title: Create a URL for a Blob in JS
tags: programming, js, web-dev
---

```
const raw = "Hello, world!"
const blob = new Blob([raw], { type: "text/plain" })
const url = URL.createObjectURL(blob)

// then, for example:
fetch(url).then(response => {
  response.text().then(console.log)
  // "Hello, world!"
})
```
