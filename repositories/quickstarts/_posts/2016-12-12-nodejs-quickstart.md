---
title: Node.js Quickstart Guide
shortTitle: Node.js
step: 1
tags:
- quickstarts
- nodejs
description: How to setup your multi-tier Node.js application.
---

This guide will help you set up Runnable templates for a 2-tier Node.js application. This guide will assume that you don't have a Dockerfile and want Runnable to generate the Dockerfile for you using a simple setup guide.

---

## Configuring the App

1. Choose your GitHub org.
2. On the **Configure** page, click on the **Create Template** button.
  ![node1]({{ site.baseurl }}/images/node1.png)
3. Find the repository you would like to configure the template for. In this case, we are starting with a simple Python repository.
  ![node2]({{ site.baseurl }}/images/node2.png)
4. Choose the first option to use our simple setup guide.
5. Give your template a name. This name will be used to generate the template URLs of all the containers that will launch from this template. Check out [this]({{site.baseurl}}/networking/runnable-urls-explained) article for more details on URLs in Runnable.
6. Next, you’ll be able to select your app’s Stack Type, Version and Branch for your template. Go ahead and choose Node.js for your stack type, and select the version you want to use. Make sure you choose the branch that corresponds to your team’s main integration branch (‘master’  or ‘develop’ for example).
  ![node3]({{ site.baseurl }}/images/node3.png)
6. On the next step, you can specify additional Packages, Build Commands, and the Container CMD.

---

### Packages

This option allows you to install any tools, libraries, or frameworks you need. Add multiple packages by separating them with spaces. You can specify packages that are listed in the Ubuntu Aptitude library.
  ![node4]({{ site.baseurl }}/images/node4.png)

---

### Build Commands

Use this option to specify any commands needed to build and prepare your app (supports UNIX bash format). These commands will run in the root folder of the repository after every push. This is also the perfect place to run any commands to build any assets (such as css, html and minified javascript code).

For our simple API repository, this is where we’ll specify `npm install`.
  ![node5]({{ site.baseurl }}/images/node5.png)

> **Note:** Build commands cannot connect to any other container during a build. It is therefore not recommended to seed databases or communicate with another container using the Build Commands.

---

### Container CMD

Here the main run command for your app is specified.

> **Important:** The container will stop running when this command exits. For our simple API repository, we will specify `npm start`.

> **Note:** Commands that run here will have network access to other Runnable containers.

> **Tip:** Use `&&` to run multiple commands; for example, to run a migration on your database and start your app, you can specify `npm run migrations && npm start`.

  ![node6]({{ site.baseurl }}/images/node6.png)

Click Next. Additional configuration options are revealed to customize your container further:

---

### Environment Variables

Add any required Environtment Variables your app may need. These values will be inserted into a container’s environment when it launches from the template. The the syntax for entering in Environment variables is `KEY=VAL` (i.e. if you are trying to set the `CONFIG` to `DEV`, you would input `CONFIG=DEV`).

---

### Files & SSH Keys

Use this tool to add any addtional configuration files, other GitHub repositories, SSH Keys or assets your repository needs to build and run properly. This is also the option to use if you have to upload any override files to overwrite any hard coded values in your repository.

For more details, Check Out:

1. [Adding Files to your Container](/repositories/2016-12-13-adding-additional-files)
2. [Adding SSH Keys to build private modules](/troubleshooting/2016-12-12-my-build-is-failing-because-of-no-such-key-or-host-key-verification-failed-what-do-i-do)

---

### Exposed Ports

Open up any ports your repository may need.

Our simple API repository only needs port `3000` to be open.
![node7]({{ site.baseurl }}/images/node7.png)

1. Once you are happy with Save & Build to save our changes and trigger your first build.
2. You will be automatically transitioned to the Logs tab of your configuration. Here you will be able to access…

---

### Build Logs

These logs correspond to all the output from the build process of your template. Any errors here will correspond to configuration options you have specified in your repository, Build Commands, Packages and Files & SSH keys.

![node8]({{ site.baseurl }}/images/node8.png)

---

### CMD Logs

These logs correspond to all the output from the run process of a container launched from your template. Any errors here will correspond to configuration options you have specified in your CMD Command or Environment Variables.

![node9]({{ site.baseurl }}/images/node9.png)

> Your repository can crash for several reasons outside of your configuration on Runnable. There could be several factors ranging from a bug in your code or a misconfigured connection.

---

### Terminal

This is a terminal session into a container launched from your template. This is useful to verify any configuration details you may want to confirm.

![node10]({{ site.baseurl }}/images/node10.png)

---

### URL

This is the Environment URL corresponding to the container launched from the default branch. [Read more]({{ site.baseurl }}/networking/runnable-urls-explained) about Runnable URLs.

![node12]({{ site.baseurl }}/images/node12.png)

If everything went well, your build will complete successfully. Anytime you run across an error that you need help with, we have developers ready to help in real-time. Click on the chat bubble on the bottom right!

---

## Connecting to a DB template

1. Follow one of our DB Quickstarts to add and seed a database: [MySQL]({{site.baseurl}}/services/databases/how-to-setup-your-mysql-database-template) / [PostgresQL]({{site.baseurl}}/services/databases/how-to-setup-your-postgres-database-template)

2. In our case, we added a MySQL template.
![node14]({{ site.baseurl }}/images/node14.png)

3. Our repository is setup to use the environment variable `MYSQL_HOST` to reference the hostname for MYSQL. To connect our "api" repository template to the "MySQL" template, open up the "Environment Variables" tool in the "api" template configuration modal.

    > If you don't use Environment Variables for host discovery, you may have to modify your repository to use the Runnable template URL as your MySQL hostname. You can do this by either uploading a file using "Files & SSH Keys" or by actually modifying your repository on Github.com.

4. Specify the the value for the `MYSQL_HOST` environment variable. From our article [Runnable URLs]({{site.baseurl}}/networking/runnable-urls-explained), it is clear that we need to use MySQL's template URL to connect to it. As a convenience we provide all template URLs in the Environment Variables tab.
![node15]({{ site.baseurl }}/images/node15.png) ![node16]({{ site.baseurl }}/images/node16.png) ![node17]({{ site.baseurl }}/images/node17.png)

5. Click Save & Build.

6. The "api" template is now successfully connected with the "MySQL" template!

Head on over to our [Branches]({{site.baseurl}}/troubleshooting/i-dont-see-my-branches-being-added-on-runnable) section to see how to launch containers from your templates.
