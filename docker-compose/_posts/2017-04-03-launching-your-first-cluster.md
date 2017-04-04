---
title: Using Docker Compose With Runnable
shortTitle: Launching your First Staging Cluster
step: 3
tags:
- docker
description: Using Docker Compose With Runnable
---


Runnable makes it easy to launch containers from your compose file. 

### Configuring your first repository


We will now walkthrough configuring an example repository. The repository we will configure has the following Docker compose file: https://raw.githubusercontent.com/RunnableDemo/node-starter/master/docker-compose.yml. From compose file, it is clear that we expect to see 2 containers launch for this repository: a web container and a db container. To configure this repository on Runnable,

1. Go to your org on the Runnable.com

2. Click on the "Add services" button.
  ![GitHub Organization People]({{ site.baseurl }}/images/compose_add_service.png)

3. Find the repository where the compose file lives, and select it.
  ![GitHub Organization People]({{ site.baseurl }}/images/compose_add_service_find.png)

4. You will now see the configuration modal with the 'Compose' tab selected.
  ![GitHub Organization People]({{ site.baseurl }}/images/compose_config_1.png)

5. You can give your environment a name. This name will be used to identify the group of the containers in your Compose file going forward.
  ![GitHub Organization People]({{ site.baseurl }}/images/compose_config_name.png)

6. To configure a staging environment, ensure that the staging toggled is clicked open.
  ![GitHub Organization People]({{ site.baseurl }}/images/compose_staging_toggle.png)

7. Specify the path of the Docker Compose file in the repository. The path should be relative to the root of the repo.
  ![GitHub Organization People]({{ site.baseurl }}/images/compose_config_composefile_name.png)
  

