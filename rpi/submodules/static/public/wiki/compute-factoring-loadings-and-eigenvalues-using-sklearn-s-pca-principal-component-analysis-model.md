---
title: Compute factoring loadings and eigenvalues using sklearn's `PCA` (principal component analysis) model
tags: math, programming, data-science
---

From [here](https://scentellegher.github.io/machine-learning/2020/01/27/pca-loadings-sklearn.html):

By default, sklearn's `PCA` model doesn't directly give factoring loadings or eigenvalues. Computing those is pretty easy, though. For example:

```python
from sklearn.decomposition import PCA

x = get_data_somehow()
pca = PCA()
pca.fit(x)

loadings = pca.components_.T
eigenvalues = pca.singular_values_ ** 2
```
