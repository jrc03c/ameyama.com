---
title: JS cheat sheet
tags: js, programming, web-dev
---

## Bundling

When to bundle:

- when the project's output is a website or callable script (i.e., not a library)
- when it's important to distribute the dependencies along with the project
  - this is probably most useful in cases of IIFE scripts in the browser
- when it's important to minify the project to reduce its size

When _not_ to bundle:

- when the project's output is a library (i.e., not a website or callable script) that will be consumed by other developers
- when the project will only be used in a Node context

By "callable script" in the above lists, I mean something that's exported via the `"bin"` field in the project's `package.json` and which is installable via `npm link` or `npm i -g`.
