---
title: Fixing "Uncaught ReferenceError: __VUE_PROD_DEVTOOLS__ is not defined"
tags: web, javascript, programming, vue, vuex, js
---

A particular error has kept occurring when I try to use Vuex: "Uncaught ReferenceError: **VUE_PROD_DEVTOOLS** is not defined". This solves it:

```js
const {createStore} = require("vuex")

const store = createStore({
  devtools: false, // this!
  state: {...},
  getters: {...},
  mutations: {...},
  actions: {...},
})
```

## Sources

- [https://stackoverflow.com/a/67975655](https://stackoverflow.com/a/67975655)
