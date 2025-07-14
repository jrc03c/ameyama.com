---
title: Converting between text file types using `pandoc`
tags: programming, text, language, natural language processing, nlp, epub, markdown, plaintext, html, pdf, docx, odt, rtf
---

```bash
# syntax:
pandoc <src> -f <src_format> -t <dest_format> -s -o <dest>

# for example, convert epub to plaintext:
pandoc file.epub -f epub -t plain -s -o file.txt
```

The `-s` flag means "standalone". From the `man` pages:

> Produce output with an appropriate header and footer (e.g. a standalone HTML, LaTeX, TEI, or RTF file, not a fragment). This option is set automatically for pdf, epub, epub3, fb2, docx, and odt output. For native output, this option causes metadata to be included; otherwise, metadata is suppressed.
