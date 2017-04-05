---
title: Using Docker Compose With Runnable
shortTitle: Launching your first environment with Compose
step: 3
tags:
- docker
description: Using Docker Compose With Runnable
---


Runnable makes it easy to launch containers from your compose file. 

### Configuring your first repository


We will now walkthrough configuring an example repository. The repository we will configure has the following Docker compose file:
  ![GitHub Organization People]({{ site.baseurl }}/images/compose_config_composefile.png)

From compose file, it is clear that we expect to see 2 containers launch for this repository: a web container and a db container. To configure this repository on Runnable,

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


8. Click on "Create Environment".

9. You will now see the 2 containers running for the master branch of your repository. Note the name of the containers is the same name you gave them as in the Docker compose file.
  ![GitHub Organization People]({{ site.baseurl }}/images/compose_container_list.png)

10. Each container on Runnable gets a unique URL for external HTTP/HTTPs access.
  ![GitHub Organization People]({{ site.baseurl }}/images/compose_url.png)

11. Your master environment should be up! Yuo can explore the environment using the URL, Terminal and Filebrowser.
  ![GitHub Organization People]({{ site.baseurl }}/images/compose_config_running.png)

###  Launching a Full-Stack environment for a branch

Now that you have setup your environment, you can instantly get a clone of this environment for each branch you or your teammates work with. To do this:

1. Find your repository on the sidebar.
  ![GitHub Organization People]({{ site.baseurl }}/images/compose_branch_side_bar.png)

2. Click on the "Add a branch button".

3. Ensure that the toggle on the top of the branch pop over is toggled on. This will ensure that branches are created as they appear on GitHub.
  ![GitHub Organization People]({{ site.baseurl }}/images/compose_config_automatic.png)

4. Now push a change to the repository Github.com, on an existing branch other than master.

5. You will notice that a full-stack environment for your branch is launched right away on the sidebar.
  ![GitHub Organization People]({{ site.baseurl }}/images/compose_config_new_branch.png)

6. You can now use your branch's environment to verify or debug you and your teammates changes.
