---
title: Using Private Docker Images
short: Using Private Docker Images
category: docker-compose
order: 3
development: true
---

Many teams use private Docker registries to host their images. To use your private images, refer to them in your Compose files or Dockerfiles and add your registry credentials to Runnable.

---

## Using Images in Your Files

Use images in a Compose file by referring to them with the `image` configuration option:

```yaml
Services:
  db:
    image: example-registry.com:4000/postgresql
```

> **Tip:** Learn how to [use your Compose file]({{ site.baseurl }}/docker-compose/launching-your-first-environment) in Runnable.

You can also use images in your services’ Dockerfiles:

```yaml
FROM example-registry.com:4000/api
```

---

## Adding Registry Credentials

1. Open the Private Registry settings for your team. Click on your team's avatar in the upper-left corner and select **Private Registry**.

    ![](images/ss-registry-navigation.png)

2. Enter the credentials for your registry and click **Verify & Save**.

    ![](images/ss-registry-credentials.png)

Now images from your registry that are referred to in your Compose files or Dockerfiles can be used successfully.

---

## What’s Next?

- [Setting Up With Compose]({{ site.baseurl }}/docker-compose/launching-your-first-environment)
- [Adding a Database for Compose]({{ site.baseurl }}/docker-compose/adding-a-database-for-compose)
