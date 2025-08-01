---
title: Rebase to a different Fedora atomic distro
tags: linux
---

## Rebase to an official distro

1. List official rebase targets:

```bash
ostree remote refs fedora
```

2. Rebase to one of the official targets:

```bash
sudo rpm-ostree rebase fedora:fedora/35/x86_64/kinoite
```

3. Reboot.

## Rebase to a community distro

1. Rebase to the unsigned image:

```bash
sudo rpm-ostree rebase ostree-unverified-registry:ghcr.io/winblues/vauxite:latest
```

2. Reboot.

3. Rebase to the signed image (if it exists):

```bash
sudo rpm-ostree rebase ostree-image-signed:docker://ghcr.io/winblues/vauxite:latest
```

4. Reboot.

5. (Optional) Create a new user account. (I don't actually know how important this step is, but it's recommended in [the winblues Blue95 docs](https://blues.win/95/docs/).)

## Resources

- https://blues.win/95/docs/install/#from-other-atomic-desktops
- https://github.com/winblues/vauxite
- https://communityblog.fedoraproject.org/rebasing-fedora-silverblue-to-kinoite/
