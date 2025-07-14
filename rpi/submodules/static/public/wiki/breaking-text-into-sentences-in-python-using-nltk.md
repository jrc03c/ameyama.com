---
title: Breaking text into sentences in Python using NLTK
tags: programming, python, language, natural-language-processing
---

To break a chunk of text into sentences in Python using NLTK, do the following.

Install NLTK:

```bash
pip install -U nltk
```

Download the `punkt` submodule in a Python REPL:

```python
import nltk
nltk.download("punkt")
nltk.download("punkt_tab")
```

And then break the text into sentences:

```python
import nltk

with open("my-big-file.txt") as file:
  raw = file.read()

sentences = nltk.tokenize.sent_tokenize(raw)
```
