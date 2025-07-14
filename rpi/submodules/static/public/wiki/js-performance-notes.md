---
title: JS performance notes
tags: programming, js, node, web-dev
---

> **NOTE:** All of the notes below will use these timing functions:
>
> ```js
> function time(fn) {
>   const start = new Date()
>   fn()
>   return new Date() - start
> }
>
> function timeAsync(fn) {
>   const start = new Date()
>   await fn()
>   return new Date() - start
> }
> ```

## Loops

When working with arrays, always prefer `for` loops to `forEach`, `map`, `filter`, etc. Plain ol' `for` loops can be orders of magnitude faster! For example:

```js
function loopWithPlainOldForLoop(x, fn) {
  for (let i = 0; i < x.length; i++) {
    fn(x[i])
  }
}

function loopWithArrayForEach(x, fn) {
  x.forEach(v => fn(v))
}

const x = []

for (let i = 0; i < 100000000; i++) {
  x.push(Math.random())
}

const dubbleFn = v => v * 2
let meanPlainOldForLoopTime = 0
let meanArrayForEachTime = 0

for (let i = 0; i < 100; i++) {
  const t = time(() => loopWithPlainOldForLoop(x, dubbleFn))
  meanPlainOldForLoopTime += t / 100
}

for (let i = 0; i < 100; i++) {
  const t = time(() => loopWithArrayForEach(x, dubbleFn))
  meanArrayForEachTime += t / 100
}

console.log("mean `for` loop time:", meanPlainOldForLoopTime.toFixed(2), "ms")
// mean `for` loop time: 42.43 ms
console.log("mean `Array.forEach` loop time:", meanArrayForEachTime.toFixed(2), "ms")
// mean `Array.forEach` loop time: 1245.44 ms
```

> **ASIDE:** This makes me wonder if I should try monkey-patching the `Array.prototype` methods. Hm... It's probably a horrible idea, but it's tempting nonetheless!
