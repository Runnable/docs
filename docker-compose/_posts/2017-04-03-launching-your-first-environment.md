---
title: Setting Up With a Compose File
short: Setting Up With Compose
category: docker-compose
order: 1
---

Docker Compose files contain all the necessary information for Runnable to build and run your multi-service environments. If you’re using Docker Compose, this guide is for you! We’ll walk through the setup for creating staging and testing environments using the existing Compose YAML file in your repository.

---

## Review Your Compose File

By using the `build` feature to reference your repository’s Dockerfile, your builds will reflect changes to your code on every commit and branch you make. The build path is relative to your Compose file:

```yaml
build: ./dir
```

If you want to reference a Dockerfile in a different repository, use `context`:

```yaml
build:
  context: git@github.com/your-org/your-project.git
```

If you’re running into build problems, it’s a good idea to check which Compose features and operating systems we [currently support]({{ site.baseurl }}/docker-compose/docker-compose-feature-support).

---

## Adding Your Repository

From the Containers page, click the **Add Services** button and select the repository that you keep your Compose file in. We'll be using the Compose file in the default branch (set on GitHub) to build and run your environments. Later, you'll be able to launch environments for additional branches of this repository.

![](images/ss-compose-add.png)

In the modal that appears, click the **Use a Compose File** tab if it’s not already selected. Type in the path of your Compose file in the **Compose for Staging** section, relative to the root of your repository. You’ll see a green check when we find a matching file.

![](images/ss-compose-staging.png)

If you have a Compose file for testing, enable the toggle for **Compose for Testing** and type in the path of your testing Compose file. We’ll parse your file so you can select the service that runs your tests. This container’s status will be reported as a test result to the [GitHub]({{ site.baseurl }}/integrations/notifications/github-pull-request-notifications) and [JIRA]({{ site.baseurl }}/integrations/notifications/jira) integrations.

![](images/ss-compose-testing.png)

Then click the **Create Environment** button to continue.

---

## Using Your Containers

Runnable will create environments for the specified Compose files in your default branch. Once the containers are running, you can interact with the terminals or open their URLs to view the web output.

![](images/ss-compose-instance.png)

By default, you’ll also get new environments for branches of this repository when you push to GitHub. Pushes from other collaborators who have joined Runnable will also trigger new environments.

---

## What’s Next?

- [Adding a Database]({{ site.baseurl }}/docker-compose/adding-a-database-for-compose)
- [Supported Compose Features]({{ site.baseurl }}/docker-compose/docker-compose-feature-support)
