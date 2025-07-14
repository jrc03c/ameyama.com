---
title: Bash cheat sheet
tags: unix, bash, linux, programming
---

Get the directory that contains a file:

```
dirname path/to/file
# path/to
```

Get a file's name given a long path:

```
basename path/to/file
# file
```

Check if a file has a particular extension (e.g., ".mp3"):

```
if [[ "$filename" == *.mp3 ]]; then
  echo "Yarp!"
else
  echo "Narp!"
fi
```
