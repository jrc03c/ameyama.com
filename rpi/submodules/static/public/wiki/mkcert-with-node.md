---
title: `mkcert` with Node
tags: programming, web-dev, js
---

[`mkcert`](https://github.com/FiloSottile/mkcert) makes it easy to serve local content (i.e., localhost) over HTTPS. By default, however, Node-based servers (e.g., Express) won't accept mkcert's certificates; so you have to set this environment variable:

```bash
export NODE_EXTRA_CA_CERTS="$(mkcert -CAROOT)/rootCA.pem"
```

**Source:** [https://github.com/FiloSottile/mkcert?tab=readme-ov-file#using-the-root-with-nodejs](https://github.com/FiloSottile/mkcert?tab=readme-ov-file#using-the-root-with-nodejs)
