---
title: Take the pseudoinverse of non-invertible and non-square matrices using singular value decomposition (SVD)
tags: math, programming, data-science
---

A generalized process for finding the inverse of _any_ matrix (including non-invertible and non-square matrices) uses SVD as follows:

Given matrix <katex>M</katex>:

<katex-block>
\text{svd}(M) = U \cdot \Sigma \cdot V^T
M^{-1} = V \cdot \Sigma^{-1} \cdot U^T
</katex-block>

In pseudo-code:

```js
const { U, S, VT } = svd(M)
const SInv = inv(S)
const MInv = dot(dot(VT.T, SInv), U.T)
```

(Taking the inverse of `S` is easy. All of the zeros remain zeros, and all the other values become their multiplicative inverse. For example, if:

```
S = [[3, 0], [0, 2]]
```

Then:

```
SInv = [[1/3, 0], [1/2, 0]]
```
