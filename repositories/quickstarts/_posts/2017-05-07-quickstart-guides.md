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

Select a language to customize this guide for your repository. If none apply, you can still follow along.

<div class="btn-group btn-group-quickstart">
  <button class="grid-block align-center justify-center btn white btn-md active" data-picker="Node.js">
    <img class="icon" src="images/logo-icon-nodejs.svg">
    Node.js
  </button>
  <button class="grid-block align-center justify-center btn white btn-md" data-picker="Python">
    <img class="icon" src="images/logo-icon-python.svg">
    Python
  </button>
  <button class="grid-block align-center justify-center btn white btn-md" data-picker="Rails">
    <img class="icon" src="images/logo-icon-rails.svg">
    Rails
  </button>
  <button class="grid-block align-center justify-center btn white btn-md" data-picker="PHP">
    <img class="icon" src="images/logo-icon-php.svg">
    PHP
  </button>
</div>

First you'll need to add the <span data-picker-text>Node.js</span> repository that you want to create a Dockerfile for. From the Containers page, click the **Add Services** button and select it from the list.

![](images/ss-add-service.png)

In the modal that appears, click the **No Compose File** tab and select **Start with our setup guide**.

![](images/ss-setup-guide.png)

---

## 2. Configuring the Basics

The next steps will walk you through the configuration of your repository.

### Repository

First you’ll set the base image for your Dockerfile. Select the <span class="strong" data-picker-text>Node.js</span> stack type and the versions of <span data-picker="Node.js" data-picker-toggle>version of Node.js</span><span data-picker="Python" data-picker-toggle="false">version of Python</span><span data-picker="Rails" data-picker-toggle="false">versions of Ruby and Rails</span><span data-picker="PHP" data-picker-toggle="false">version of PHP</span> that your repository requires for runtime.

<img src="images/ss-node-repository.png" data-picker="Node.js" data-picker-toggle>
<img src="images/ss-python-repository.png" data-picker="Python" data-picker-toggle="false">
<img src="images/ss-rails-repository.png" data-picker="Rails" data-picker-toggle="false">
<img src="images/ss-php-repository.png" data-picker="PHP" data-picker-toggle="false">

---

### Commands and Packages

Use this tool to specify the commands your repository needs to build and run.

#### Packages

This section is where you can install any tools, libraries, or frameworks your repository needs from the [Ubuntu Aptitude library](http://packages.ubuntu.com/).

![](images/ss-packages.png)

#### Build Commands

You can add commands for building your application. For example, you may want to add commands for building your CSS or minifying your JavaScript. These commands will run in the root folder of the repository when its container is building.

<img src="images/ss-node-build-commands.png" data-picker="Node.js" data-picker-toggle>
<img src="images/ss-python-build-commands.png" data-picker="Python" data-picker-toggle="false">
<img src="images/ss-rails-build-commands.png" data-picker="Rails" data-picker-toggle="false">
<img src="images/ss-php-build-commands.png" data-picker="PHP" data-picker-toggle="false">

{:data-picker="PHP" data-picker-toggle="false"}
For your PHP app, you'll need to add the following lines to this section:

{:data-picker="PHP" data-picker-toggle="false"}
Set permissions for your application directory:

{:data-picker="PHP" data-picker-toggle="false"}
    chgrp -R www-data /var/www/html/
    chmod -R 775 /var/www/html/storage

{:data-picker="PHP" data-picker-toggle="false"}
Copy Laravel’s `.env.example` to `.env` in your application directory:

{:data-picker="PHP" data-picker-toggle="false"}
    cp .env.example .env

{:data-picker="PHP" data-picker-toggle="false"}
Generate your application key:

{:data-picker="PHP" data-picker-toggle="false"}
    php artisan key:generate

#### Container CMD

You’ll need to define your application’s run command, such as <code data-picker="Node.js" data-picker-toggle>npm start</code><code data-picker="Python" data-picker-toggle="false">python main.py</code><code data-picker="Rails" data-picker-toggle="false">rails server</code><code data-picker="PHP" data-picker-toggle="false">apache2-foreground</code>.

> Note: The container will stop running when this command exits.

<img src="images/ss-node-container-cmd.png" data-picker="Node.js" data-picker-toggle>
<img src="images/ss-python-container-cmd.png" data-picker="Python" data-picker-toggle="false">
<img src="images/ss-rails-container-cmd.png" data-picker="Rails" data-picker-toggle="false">
<img src="images/ss-php-container-cmd.png" data-picker="PHP" data-picker-toggle="false">

Here are some pointers for this section:

- It's typically a good idea to bind to all interfaces using `-b 0.0.0.0` as part of this line so the container can be accessed through the browser and by other containers. For example: <code data-picker="Node.js" data-picker-toggle>npm start -b 0.0.0.0</code><code data-picker="Python" data-picker-toggle="false">python main.py -b 0.0.0.0</code><code data-picker="Rails" data-picker-toggle="false">rails server -b 0.0.0.0</code><code data-picker="PHP" data-picker-toggle="false">apache2-foreground -b 0.0.0.0</code>
- If you've already added a database, you may need to use `&&` to run migration commands after your main run command. For example: <code data-picker="Node.js" data-picker-toggle>npm run migrations && npm start</code><code data-picker="Python" data-picker-toggle="false">python main.py && ??</code><code data-picker="Rails" data-picker-toggle="false">rails server && rake db:migrate</code><code data-picker="PHP" data-picker-toggle="false">apache2-foreground && ??</code>

After configuring Commands and Packages, you're good to go. You can view the Dockerfile we've generated in the Dockerfile tab, and you can click the **Save & Build** button to start building a container from that Dockerfile.

---

## 3. Additional Configuration

Many applications will need more setup. We'll walk you through the remaining tools you may need.

### Exposed Ports

You can expose any ports your container will use to communicate with other containers. Port <span data-picker="Node.js" data-picker-toggle>3000</span><span data-picker="Python" data-picker-toggle="false">3000</span><span data-picker="Rails" data-picker-toggle="false">8000</span><span data-picker="PHP" data-picker-toggle="false">3306</span> is commonly exposed for <span data-picker-text>Node.js</span> apps.

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

{:data-picker="Node.js" data-picker-toggle="false"}
For more details, read about [adding persistent files to your container]({{ site.baseurl }}/repositories/adding-files-and-ssh-keys).

{:data-picker="Python" data-picker-toggle="false"}
For more details, read about [adding persistent files to your container]({{ site.baseurl }}/repositories/adding-files-and-ssh-keys).

{:data-picker="Rails" data-picker-toggle="false"}
For more details, read about [adding persistent files to your container]({{ site.baseurl }}/repositories/adding-files-and-ssh-keys).

{:data-picker="PHP" data-picker-toggle="false"}
For your PHP app, you’ll need to [upload your Laravel apache2 configuration file]({{ site.baseurl }}/repositories/adding-files-and-ssh-keys) (laravel.conf).

{:data-picker="PHP" data-picker-toggle="false"}
Add this path for its Destination:

{:data-picker="PHP" data-picker-toggle="false"}
    /etc/apache2/sites-available

{:data-picker="PHP" data-picker-toggle="false"}
And add these Scripts:

{:data-picker="PHP" data-picker-toggle="false"}
    a2ensite laravel.conf
    a2enmod rewrite]

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
