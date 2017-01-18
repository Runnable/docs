---
title: Frequently Asked Questions
category: troubleshooting
step: 1
description: Frequently Asked Questions
---

### Do I have to already be a Docker user to use Runnable? {#docker}

No!  There is no requirement for you to use Docker if you want to use Runnable.  If you are familiar with Docker and the Dockerfile format you’ll find our configuration experience particularly familiar – but no experience or use of Docker is needed to use Runnable.

### How does Runnable integrate with CI/CD? {#cicd}

Runnable complements your existing CI/CD workflow by giving you additional environments for testing your code before a branch is merged it into master and deployed. This allows you to continue using existing tools and CI systems for pushing code to production.

If you'd like to use Runnable for CI/CD, we host a private Docker Registry with each account. You can use this registry to deploy containers straight into production. Contact support for more details.

### How do I configure external services with Callbacks (e.g. OAuth)?

For configuring external services, we recommend using the Repository URL as the callback URL for services that require one.

Using Repository URLs as your callback eliminates the need to re-configure external service applications every time a new branch is launched.

> Your Repository URL is:
`repositoryName-organizationName-staging.runnableapp.com`
