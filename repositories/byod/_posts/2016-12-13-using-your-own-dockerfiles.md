---
title: Using Your Own Dockerfiles
short: Using Your Own Dockerfiles
category: repositories
order: 6
---

Dockerfiles are often used for managing configuration and automating the build process for a service. If your repositories have Dockerfiles, it’s easy to get them set up in Runnable. At the end of this guide, you'll have a running container for a repository, built from its Dockerfile.

*Note: Using your own Dockerfiles is a great way to start using Runnable, but some features are reserved for apps that use Docker Compose:*

- *Automatically creating isolated stacks for branches*
- *Running automated tests*

---

## Adding Your Repository

From the Containers page, click the **Add Services** button and select a repository that uses a Dockerfile. We'll be using the Dockerfile in the default branch (set on GitHub) to build and run a container. Later, you'll be able to launch containers for additional branches of this repository.

![Add Service]({{ site.baseurl }}/images/dockerfiles_add_service.png)

In the modal that appears, click the **No Compose File** tab. Then select **Use a Dockerfile in your repo** and type in the path for your Dockerfile, relative to the root of your repository. You'll see a green check when we find a matching file.

![Dockerfile Path]({{ site.baseurl }}/images/dockerfiles_path.png)

Then click the **Create Environment** button to continue.

---

## Using Your Containers

Runnable will create a container for the default branch of the repository, using the Dockerfile you specified. If your Dockerfile uses a private image, you’ll need to [set up Runnable to access your registry]({{ site.baseurl }}/repositories/byod/using-private-docker-images) so the container can build successfully.

Once the container is running, you can interact with the terminal or open its URL to view its web output.

![Terminal]({{ site.baseurl }}/images/dockerfiles_terminal.png)
