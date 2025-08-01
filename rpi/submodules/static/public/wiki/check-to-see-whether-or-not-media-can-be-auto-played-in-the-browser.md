---
title: Check to see whether or not media can be auto-played in the browser
tags: javascript, web, programming
---

Create an `<audio>` element pointing to (e.g.) a short clip of silence and then call its `play` method. That method returns a `Promise`, which can be watched for success or failure. For example:

```js
const audio = document.createElement("audio")
audio.src = "https://example.com/path/to/silence.mp3"

audio
  .play()
  .then(() => {
    console.log("Autoplay works!")
  })
  .catch(() => {
    console.log("Autoplay doesn't work.")
  })
```
