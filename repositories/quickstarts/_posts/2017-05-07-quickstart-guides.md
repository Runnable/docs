---
title: Quickstart Guides
short: Quickstart Guides
category: repositories
order: 1
---

A Dockerfile is a file that contains instructions for building an image that can be run on a Docker container. In Runnable, we use Dockerfiles to build and run images based on your code.

If your app doesn't use Dockerfiles, don't worry! this guide will show you how to generate them from your source code and settings you configure. Then we'll point you to the next steps for setting up your application.

> **Note:** Creating Dockerfiles is a great way to start using Runnable, but some features are reserved for apps that use Docker Compose:
>
> - Automatically creating isolated stacks for branches
> - Running automated tests

---

## 1. Adding Your Repository

<div class="tab-wrapper grid-block">
  <label class="tab grid-block">
    <input class="radio" type="radio" name="content-toggle" value="rails" checked>
    <div class="tab-shape grid-block align-center justify-center btn white btn-md">
      <img class="icon" src="images/logo-icon-nodejs.svg"/>
      Node.js
    </div>
  </label>
  <label class="tab grid-block">
    <input class="radio" type="radio" name="content-toggle" value="python">
    <div class="tab-shape grid-block align-center justify-center btn white btn-md">
      <img class="icon" src="images/logo-icon-python.svg"/>
      Python
    </div>
  </label>
  <label class="tab grid-block">
    <input class="radio" type="radio" name="content-toggle" value="python">
    <div class="tab-shape grid-block align-center justify-center btn white btn-md">
      <img class="icon" src="images/logo-icon-rails.svg"/>
      Rails
    </div>
  </label>
  <label class="tab grid-block">
    <input class="radio" type="radio" name="content-toggle" value="python">
    <div class="tab-shape grid-block align-center justify-center btn white btn-md">
      <img class="icon" src="images/logo-icon-php.svg"/>
      PHP
    </div>
  </label>
</div>

First you'll need to add the repository that you want to create a Dockerfile for. From the Containers page, click the **Add Services** button and select it from the list.

![](images/ss-add-service.png)

In the modal that appears, click the **No Compose File** tab and select **Start with our setup guide**.

![](images/ss-setup-guide.png)

---

## 2. Configuring the Basics

The next steps will walk you through the configuration of your repository.

### Repository

First you’ll set the base image for your Dockerfile. Select the **Rails**<!-- **Python** **Node.js**  **PHP** --> stack type and the versions of Ruby and Rails<!-- **version of Python** **version of Node.js** **version of PHP** --> that your repository requires for runtime.

![](images/ss-rails-repository.png)
<!-- ![](images/ss-node-repository.png) -->
<!-- ![](images/ss-python-repository.png) -->
<!-- ![](images/ss-php-repository.png) -->

---

### Commands and Packages

Use this tool to specify the commands your repository needs to build and run.

#### Packages

This section is where you can install any tools, libraries, or frameworks your repository needs from the [Ubuntu Aptitude library](http://packages.ubuntu.com/).

![](images/ss-packages.png)

#### Build Commands

You can add commands for building your application. For example, you may want to add commands for building your CSS or minifying your JavaScript. These commands will run in the root folder of the repository when its container is building.

![](images/ss-rails-build-commands.png)
<!-- ![](images/ss-node-build-commands.png) -->
<!-- ![](images/ss-python-build-commands.png) -->
<!-- ![](images/ss-php-build-commands.png) -->

<!-- For your PHP app, you'll need to add the following lines to this section: -->

<!-- Set permissions for your application directory: -->
<!--
    chgrp -R www-data /var/www/html/
    chmod -R 775 /var/www/html/storage
 -->
<!-- Copy Laravel’s .env.example to .env in your applicationproject directory: -->
<!--
    cp .env.example .env
 -->
<!-- Generate your application key: -->
<!--
    php artisan key:generate]
 -->

#### Container CMD

You’ll need to define your application’s run command, such as `rails server`<!-- `python main.py` `npm start` `apache2-foreground` -->.

> Note: The container will stop running when this command exits.

![](images/ss-rails-container-cmd.png)
<!-- ![](images/ss-node-container-cmd.png) -->
<!-- ![](images/ss-python-container-cmd.png) -->
<!-- ![](images/ss-php-container-cmd.png) -->

Here for some pointers for this section:

- It's typically a good idea to bind to all interfaces using `-b 0.0.0.0` as part of this line so the container can be accessed through the browser and by other containers. For example: `rails server -b 0.0.0.0`<!-- `python main.py -b 0.0.0.0`  `npm start -b 0.0.0.0` `apache2-foreground -b 0.0.0.0` -->
- If you've already added a database, you may need to use `&&` to run migration commands after your main run command. For example: `rails server && rake db:migrate`<!-- `python main.py && ??` `npm run migrations && npm start` `apache2-foreground && ??` -->

After configuring Commands and Packages, you're good to go. You can view the Dockerfile we've generated in the Dockerfile tab, and you can click the **Save & Build** button to start building a container from that Dockerfile.

---

## 3. Additional Configuration

Many applications will need more setup. We'll walk you through the remaining tools you may need.

### Exposed Ports

You can expose any ports your container will use to communicate with other containers. Port `3000`<!-- `3000` `8000` `3306` --> is commonly exposed for Rails<!-- Python Node.js PHP --> apps.

![](images/ss-ports.png)

---

### Environment Variables

You can add environment variables to set configuration values or secrets that you don’t want to check into your repository. These values will be added to your container's environment when it runs.

![](images/ss-environment-variables.png)

If you've added other services to Runnable (like databases or other repositories), you can also use this tool to point your repository to [their URLs]({{ site.baseurl }}/networking/runnable-urls-explained).

> For example: If your service uses MONGO_URL to set the URL for your database, you can add `MONGO_URL=mongodb-staging-myorg.runnableapp.com`.

---

### Files & SSH Keys

Add any external assets that your application needs to build and run, like configuration files, other GitHub repositories, or SSH keys.

If you have hard-coded values in your repository that need to be changed, you can also use this tool to override those values by uploading modified files to the same paths.

![](images/ss-files-and-ssh-keys.png)

For more details, read about [adding persistent files to your container]({{ site.baseurl }}/repositories/adding-files-and-ssh-keys).
<!-- For your PHP app, you’ll need to [upload your Laravel apache2 configuration file]({{ site.baseurl }}/repositories/adding-files-and-ssh-keys) (laravel.conf). -->

<!-- Add this path for its Destination: -->
<!--
    /etc/apache2/sites-available
 -->
<!-- And add these Scripts: -->
<!--
    a2ensite laravel.conf
    a2enmod rewrite]
 -->

---

## Next Steps

Once your repository is up and running, you can interact with the terminal, or you can open its URL to view its web output.

![](images/ss-terminal.png)

By default, you’ll also get new environments for branches of this repository when you push to GitHub. Pushes from other collaborators who have joined Runnable will also trigger new environments.

You can follow this guide again to add and set up any other repositories in your app.

---

## What’s next?

- [Adding a PostgreSQL Database]({{ site.baseurl }}/databases-datastores/how-to-setup-your-postgres-database-template)
- [Adding a MySQL Database]({{ site.baseurl }}/databases-datastores/how-to-setup-your-mysql-database-template)
