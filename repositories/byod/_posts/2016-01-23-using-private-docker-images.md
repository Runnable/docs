---
title: Using Private Docker Images
short: Using Private Docker Images
category: repositories
order: 7
---

Many teams use private Docker registries to securely host images that are built from their source code. If your repositories build from private images, you can set up access to your registry so we can build environments with your images.

*Note: This won’t work if you are using Docker Compose files in Runnable. Private registry support for Compose is coming soon.*

---

## 1. Add a File

First, open the configuration for your repository by clicking the gear icon next to its name in the Containers view.

![Configure Service]({{ site.baseurl }}/images/dockerfiles_configure.png)

Select the **Dockerfile** tool, then click the **+** button and add a file named `runnable.json`. **If Mirror Dockerfile** is enabled, you'll need to disable it first.

![Adding Private Registry]({{ site.baseurl }}/images/dockerfiles_private_registry.png)

## 2. Add Your Credentials

In the file you created, add the credentials for your private registry in the following format:

```json
{
  "username": "username",
  "password":"password",
  "url":"https://index.docker.io/v1/"
}
```

Then click the **Save & Build** button to apply your changes. Now our image builder will use the credentials you added when accessing images in your private registry. Next, you should go through these steps again for any other repositories that build from private images.
