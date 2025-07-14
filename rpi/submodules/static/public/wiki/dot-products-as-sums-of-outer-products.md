---
title: Dot products as sums of outer products
tags: programming, data-science, math
---

It's possible to write a matrix dot product as (1) a sum of a dot product and some outer products, or (2) a sum of outer products. This may be useful when trying to solve for a single column or row of a matrix.

These should all produce identical results:

```python
import numpy as np
import pandas as pd

# define a scoring function where 1.0 is the highest (and best) possible score
def r_squared(true, pred):
  num = np.sum((true - pred)**2)
  den = np.sum((true - np.mean(true))**2)
  return 1 - num / den

A = pd.DataFrame(np.random.normal(size=[100, 25]))
B = pd.DataFrame(np.random.normal(size=[25, 10]))

# regular ol' dot product
C1 = np.dot(A, B)

# the sum of a dot product (after replacing the last column in A and the last row in B
# with zeros) and an outer product (of the last column in A and the last row in B)
ATemp = A.copy()
ATemp.iloc[:, A.shape[1] - 1] = np.zeros(A.shape[0])
BTemp = B.copy()
BTemp.iloc[B.shape[0] - 1, :] = np.zeros(B.shape[1])
C2 = np.dot(ATemp, BTemp) + np.outer(A[A.columns[-1]], B.iloc[B.shape[0] - 1, :])

# the sum of outer products of each column of A with each corresponding row of B
C3 = None

for i in range(0, A.shape[1]):
  if C3 is None:
    C3 = np.outer(A.iloc[:, i], B.iloc[i, :])

  else:
    C3 += np.outer(A.iloc[:, i], B.iloc[i, :])

print(r_squared(C1, C2)) # 1.0
print(r_squared(C1, C3)) # 1.0
print(r_squared(C2, C3)) # 1.0
```

Note also that an outer product of two vectors is the same as a dot product between a column vector and a row vector. Column vectors can be thought of matrices full of zeros _except for_ a single column of values. Similarly, row vectors can be thought of as matrices full of zeros _except for_ a single row of values. For example:

```
# a column vector; i.e., a matrix of zeros with a single column of values
a = np.array([
  [1, 0, 0],
  [2, 0, 0],
  [3, 0, 0],
])

# a row vector; i.e., a matrix of zeros with a single row of values
b = np.array([
  [4, 5, 6],
  [0, 0, 0],
  [0, 0, 0],
])

print(np.dot(a, b))
# array([[ 4,  5,  6],
#        [ 8, 10, 12],
#        [12, 15, 18]])

print(np.outer(a[:, 0], b[0, :]))
# array([[ 4,  5,  6],
#        [ 8, 10, 12],
#        [12, 15, 18]])
```
