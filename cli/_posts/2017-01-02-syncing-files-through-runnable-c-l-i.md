---
title: Syncing Files through Runnable CLI
shortTitle: Syncing Files
step: 3
description: Syncing Files through Runnable CLI
---

Instead of uploading files through the UI on [runnable.io](http://runnable.io), our runnable-cli enables you to upload files to your repository directly from your command line.

---

### Usage
`runnable upload <file>`

Use this command to upload a file to the repository.
The file will be placed at the root of the repository folder in the container.

---

### Steps

1. Change directory to a local copy of your repository (runnable-cli will use this folder to detect which online repository to upload to)
  ```$ cd <path-to-github-repository>```

2. Login to Runnable through the CLI (if not already)
  ```$ runnable Login```

3. Upload the desired file by invoking the runnable-cli
  ```$ runnable upload <file>```
  > Replace **file** with the path of the file you wish to upload
