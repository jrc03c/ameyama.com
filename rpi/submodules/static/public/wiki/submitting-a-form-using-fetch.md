---
title: Submitting a form using `fetch`
tags: javascript, web, programming
---

```js
const form = document.querySelector("#form")

form.addEventListener("submit", async event => {
  event.preventDefault()

  const response = await fetch("...", {
    method: "POST",
    body: new FormData(form),
  })

  // do something with `response`
})
```
