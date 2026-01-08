---
title: Get the percent variance of factors using singular value decomposition (SVD)
tags:
  - data-science
  - math
  - programming
  - wiki
permalink: /wiki/6a6fdc3d/
layout: page
---

```python
import numpy as np

def get_percent_variances(x):
    c = np.corrcoef(x.T)
    u, s, v = np.linalg.svd(c)
    return s / np.sum(s)
```
