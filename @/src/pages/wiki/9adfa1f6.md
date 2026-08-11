---
title: Rclone notes
tags:
  - amazon
  - aws
  - cloud
  - rclone
  - s3
  - sftp
  - storage
  - wiki
layout: page
permalink: /wiki/9adfa1f6/
---

### Intro

> [Rclone](https://rclone.org/) is a command-line program to manage files on cloud storage.

I've found it useful in work contexts for managing files in S3 storage buckets.

### Setup

Either run the config helper:

```bash
rclone config
```

Or create `~/.config/rclone/rclone.conf` with this content (especially useful for non-AWS providers that aren't listed in `rclone config`):

```
[some_service_name]
type = s3
provider = Other
endpoint = https://example.com
access_key_id = [...]
secret_access_key = [...]
region = us-1
```

Then confirm that the connection works:

```bash
rclone lsd some_service_name:some_bucket_name
```

### Usage

Browse using the built-in TUI:

```bash
rclone ncdu --fast-list some_service_name:some_bucket_name
```

(The `--fast-list` switch returns directory sizes all at once rather than sending multiple requests to compute the sizes recursively.)

Or start an SFTP server and connect to it via other tools like Filezilla:

```bash
rclone serve sftp \
  some_service_name:some_bucket_name \
    --addr :2022 \
    --user local_username \
    --pass local_password
```
