---
title: Encrypt a file with a password in Linux
tags: linux, privacy, security
---

## Encrypt

```bash
gpg -c <some-file>
```

You'll probably be prompted for a password.

## Decrypt

```bash
gpg -d <some-file>.gpg
```

You might be prompted for a password here. If not, it means that GPG has cached the password for temporary use. To disable this (or to decrease the cache TTL), create and/or edit the `~/.gnupg/gpg-agent.conf` file with these lines:

```
default-cache-ttl 0
max-cache-ttl 0
```

The above lines will set the cache TTLs to 0 seconds. Once those changes have been implemented, you'll have to reload the configuration using:

```bash
gpgconf --reload all
```
