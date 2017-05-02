---
title: How to Use Private Docker Images
short: Private Docker Images
category: repositories
order: 7
---

To use a private Docker repository on Runnable:

---

1. First, create a file called `runnable.json` on the root of the File Explorer under the Dockerfile section of the container configuration.
  ![Create A File]({{ site.baseurl }}/images/add-file-dockerfile-mode.png)

2. Use the following format for the credentials needed to access your private repository. This file will by used by our image builder to pull your desired images.

```json
{
"username": "username",
"password":"password",
"url":"https://index.docker.io/v1/"
}
```
