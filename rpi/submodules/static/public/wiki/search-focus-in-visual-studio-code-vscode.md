---
title: Search focus in Visual Studio Code (VSCode)
tags: programming, ide, text-editor
---

It is now the case in VSCode that if you click on a file in the explorer (tree) view and then press CTRL+F to search, you'll end up searching for files and folders in the explorer, _not_ for text in an open file. To fix this incredibly stupid "feature", use the keybinding from [here](https://code.visualstudio.com/updates/v1_70#_tree-find-control):

```json
{
  "key": "ctrl+f",
  "command": "-list.find",
  "when": "listFocus && listSupportsFind"
}
```
