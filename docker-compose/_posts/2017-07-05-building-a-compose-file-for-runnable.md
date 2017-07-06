---
title: Building a Compose File
short: Building a Compose File
category: docker-compose
order: 4
---

We can accept most Docker Compose files, but some modifications may be necessary to run as expected on Runnable.

---

## Using `build` to Create Environments for Your Branches

Environments are made up of containers for each `service` in your Compose file. Though services can be based on images or built from a Dockerfile, building from a Dockerfile allows you to launch environments for the service.

```yaml
...
services:
  api:
    build:
      context: git@github.com:org-name/repo-name.git
      dockerfile: config/Dockerfile
  db:
    image: example-registry.com/db:latest
...
```

Normally, your `context` would build with the specified Dockerfile in the default branch, but when you launch environments for your branches in Runnable, we’ll use the Dockerfile in that branch.

> **Note:** The `context` for your Dockerfile can be a git URL to a separate repository (as in the example above), or a relative path to a file in the same repository.

---

## Unsupported Compose Features

There are some features of Compose that we don’t support yet, including `entrypoint`, `volumes`, and `build args`. To see if your file is compatible, check out [our full list of supported features]() (and known workarounds for unsupported ones).

---

## What’s Next?

- [Setting Up with Compose]({{ site.baseurl }}/docker-compose/launching-your-first-environment)
- [Using Private Docker Images]({{ site.baseurl }}/docker-compose/using-private-docker-images)
- [Supported Compose Features]({{ site.baseurl }}/docker-compose/docker-compose-feature-support)
