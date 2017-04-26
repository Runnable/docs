---
title: How Do I Get the Current Container's Url from Inside the Container?
shortTitle: Access Container URL
step: 6
description: How Do I Get the Current Container's Url from Inside the Container?
---

There can be many reasons why knowing the [Web URL](networking/runnable_urls.md) of a container is required when setting up on Runnable. Here is a walk through that can explain how to generate the Web URL of a given container.

---

A `Web URL` of a container is derivied from its `Template URL` i.e. `Web URL` = `Container ID` + `-` + `Template URL`.

Let's assume that you are working with a container launched from the `Web` template, under your Github Org `AcmeOrg`.

The Template URL of this container is `Web-staging-AcmeOrg.runnableapp.com`. Now the only thing we need to generate the `Web URL` of this container is its ```Container ID``` -- this value can be read from the special environment variable `RUNNABLE_CONTAINER_ID`. This environment variable is injected into all containers on Runnable.

---

Here is an example of how you can get the URL in Node.js through string concatenation:

`var web_url=process.env.RUNNABLE_CONTAINER_ID + Web-staging-AcmeOrg.runnableapp.com`
