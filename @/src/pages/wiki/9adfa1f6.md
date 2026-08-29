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

I've found it useful in work contexts for managing files in S3 storage buckets and in other contexts as a faster alternative to `rsync` (because it can run transfers in parallel).

### S3

#### Setup

Either run the config helper:

```bash
rclone config
```

Or create `~/.config/rclone/rclone.conf` with this content (especially useful for non-AWS providers that aren't listed in `rclone config`):

```toml
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

To create a sort of shortcut to a particular bucket, it's possible to create "alias" entries in the config file. For example:

```toml
# First, declare the endpoint (same as above):
[some_service_name]
type = s3
provider = Other
endpoint = https://example.com
access_key_id = [...]
secret_access_key = [...]
region = us-1

# Then create the alias
[some_bucket_name]
type = alias
remote = some_service_name:some_bucket_name
```

Then confirm that the connection works:

```bash
rclone lsd some_bucket_name:
```

#### Usage

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

### SSH

#### Setup

I was able to get SFTP working with a config like this:

```toml
[some_server]
user = alice
type = sftp
host = example.com
port = 22
key_file = ~/.ssh/id_rsa
key_use_agent = false
use_insecure_cipher = false
```

#### Usage

Copy files:

```bash
rclone copy \
  some_server:/some/remote/path \
  /some/local/path/ \
  --multi-thread-streams=3 \
  --progress
```
