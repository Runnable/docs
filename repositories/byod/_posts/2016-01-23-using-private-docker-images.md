---
title: Using Private Docker Images
short: Using Private Docker Images
category: repositories
order: 7
---

Many teams use private Docker registries to host their images. To use your private images, refer to them in your repositories' Dockerfiles and set up access to your registry.

> Note: If you're using Docker Compose, you should [add your registry credentials]({{ site.baseurl }}/docker-compose/using-private-docker-images) in your team's settings.

## Using an Image in Your Dockerfile

Use an image in a Dockerfile by referring to it with the `FROM` instruction:

```yaml
FROM example-registry.com:4000/api
```

---

## Adding Your Credentials

First, open the configuration for your repository by clicking the gear icon next to its name in the Containers view.

![Configure Service]({{ site.baseurl }}/images/dockerfiles_configure.png)

Select the **Dockerfile** tool, then click the **+** button and add a file named `runnable.json`. If **Mirror Dockerfile** is enabled, you'll need to disable it first.

![Adding Private Registry]({{ site.baseurl }}/images/dockerfiles_private_registry.png)

In the file you created, add the credentials for your private registry in the following format:

```yaml
{
  "username": "username",
  "password":"password",
  "url":"https://example-registry.com"
}
```

Then click the **Save & Build** button to apply your changes. Now images from your registry that are referred to in your Dockerfile can be used successfully. You should go through these steps again for any other repositories that use private images.
