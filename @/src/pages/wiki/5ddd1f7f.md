---
title: matplotlib cheat sheet
tags:
  - data-science
  - math
  - programming
  - python
  - statistics
  - wiki
permalink: /wiki/5ddd1f7f/
layout: page
---

To manually set the size of a `matplotlib` plot, do:

```py
# 8" x 4.5"
plot.rcParams["figure.figsize"] = 8, 4.5
```

To use a particular (named) color palette:

```py
import matplotlib as mpl

# List all color sequences:
for name in mpl.color_sequences:
  print(name)

# tab10
# tab20
# tab20b
# tab20c
# Pastel1
# Pastel2
# Paired
# Accent
# Dark2
# Set1
# Set2
# Set3
# petroff10

# List the colors in a particular color sequence:
for color in mpl.color_sequences["Pastel1"]:
  print(color)

# (0.984313725490196, 0.7058823529411765, 0.6823529411764706)
# (0.7019607843137254, 0.803921568627451, 0.8901960784313725)
# (0.8, 0.9215686274509803, 0.7725490196078432)
# (0.8705882352941177, 0.796078431372549, 0.8941176470588236)
# (0.996078431372549, 0.8509803921568627, 0.6509803921568628)
# (1.0, 1.0, 0.8)
# (0.8980392156862745, 0.8470588235294118, 0.7411764705882353)
# (0.9921568627450981, 0.8549019607843137, 0.9254901960784314)
# (0.9490196078431372, 0.9490196078431372, 0.9490196078431372)
```
