---
title: Building a Compose File
short: Building a Compose File
category: docker-compose
order: 4
---

Runnable can deploy full-stack environments for branches of any repository that contains a Dockerfile. Let’s go over some practices you should follow in your Compose files to make this work for your team.

---

## Compose File Organization Patterns

There are two patterns that teams tend to follow for organizing their Compose files:

1. A centralized approach, with a single Compose file in a central repository that defines the whole stack.
2. A decentralized approach, in which each service’s repository has its own Compose file that defines the environment it needs.

Runnable works with either pattern because of how it makes use of the `build` feature in Compose.

---

## Using `build` to Create Environments for Your Branches

Environments include a container for each service in your Compose file. Services can be based on images or built from a Dockerfile. A service that specifies a build enables us to launch environments for its branches.

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

> **Note:** The `context` for your Dockerfile can be a git URL to a separate repository (as in the example above), or a relative path to a file in the same repository.

---

## Unsupported Compose Features

There are some features of Compose that we don’t support yet, including `entrypoint`, `volumes`, and `build args`. To see if your file is compatible, check out [our full list of supported features]() (and known workarounds for unsupported ones).

---

## What’s Next?

- [Setting Up with Compose]({{ site.baseurl }}/docker-compose/launching-your-first-environment)
- [Using Private Docker Images]({{ site.baseurl }}/docker-compose/using-private-docker-images)
- [Supported Compose Features]({{ site.baseurl }}/docker-compose/docker-compose-feature-support)
