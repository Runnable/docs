---
title: How to use your own Dockerfile on Runnable
shortTitle: Import your Dockerfile
step: 1
tags:
- dockerfile
description: Import your own Dockerfile from your repository to skip service configuration.
---

One of the easiest ways to take advantage of the Runnable platform is to use your own Dockerfile. Usually, developers keep a Dockerfile within their application repository in order to maintain a build and runtime environment for their code. Since Runnable's underlying infrastructure is built on top of Docker, we can simply use the configuration from your revisioned Dockerfile to build your containers.  

### Here's how you can set up your service to use your own Dockerfiles:

When creating a service, you are prompted to select a *Setup Method*. Make sure to choose your Dockerfile under *Advanced Setup*.
  ![Select Dockerfile](/images/own_dockerfile_repo.png)

If you don't see your Dockerfile, or if your Dockerfile is in a different root folder, click the `Add Dockerfile 
  ![Select Dockerfile](/images/own_dockerfile_repo_path.png)

You will now be prompted to enter the correct path to your Dockerfile. This is the relative path within your repository. 
  ![Custom Dockerfile Path](/images/own_dockerfile_custom_path.png)

> For example, if your Dockerfile is in a folder called docker/ within your repository, your relative path would be docker/Dockerfile





