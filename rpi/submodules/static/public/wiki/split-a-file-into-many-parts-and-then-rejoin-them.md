---
title: Split a file into many parts and then rejoin them
tags: linux, security, privacy
---

## Split the files

By number of lines per file:

```bash
split -l 100 myFile myFileSplit
```

Where "myFileSplit" is the prefix that will be applied to each splitted file; e.g.: myFileSplit.a, myFileSplit.b, etc.

By resulting file sizes:

```bash
split -b 64k myFile myFileSplit
```

## Re-join the files

```bash
cat myFileSplit* >> myFile
```
