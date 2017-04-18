---
title: Python Quickstart Guide
shortTitle: Python
step: 4
tags:
- quickstarts
- python
description: How to setup your multi-tier Python application.
---

This guide will help you setup Runnable templates for a simple Pyhton application. This guide will assume that you don't have a Dockerfile and want Runnable to generate the Dockerfile for you using a simple setup guide.

---

## Configuring the App

* From the *Configure* page, click on the *Create Template* button. Choose the Pyhton repository you want to add.<br />
![Add Template]({{ site.baseurl }}/images/python-select-repo.png)
* Select _Start up with our setup guide_ as your configuration mode.<br />
![Select Mode]({{ site.baseurl }}/images/python-setup-guide.png)
* Name your template.<br />
![Name Template]({{ site.baseurl }}/images/python-name-template.png)
* Now you can select your *Stack Type*. This is the environment that your repository requires for runtime. In our case, it is *Python*.<br />
![Select Stack]({{ site.baseurl }}/images/python-select-stack.png)
* After clicking *Next*, you will be presented with the following three options: *Packages*, *Build Commands*, and *Container CMD*.<br />
![Build Commands and CMD]({{ site.baseurl }}/images/python-choose-cmd.png)

---

### Packages

This option allows you to install any tools, libraries, or frameworks you need. Add multiple packages by separating them with spaces. You can specify packages that are listed in the [Ubuntu Aptitude library](http://packages.ubuntu.com/).

---

### Build Commands

Use this option to specify any commands needed to build and prepare your app (supports UNIX bash format). These commands will run in the root folder of the repository after every push. This is also the perfect place to run any commands to build any assets (such as css, html and minified javascript code).

For our simple API repository, this is where we’ll specify `pip install -r 'requirements.txt'`

>Build commands cannot connect to any other container during a build. It is therefore not recommended to seed databases or communicate with another container using the Build Commands.

---

### Container CMD

Here the main run command for your app is specified. Important: the container will stop running when this command exits. For our simple Pyhton app, we will specify `python main.py`.

>Note that we are using 0.0.0.0 to bind to all interfaces in our `main.py`. This will allow us to access the container from other containers and through the browser."

__Container CMD__ is where the invocation command for our app is specified. _Important:_ the container will stop running when this command exits.

Click __Next__. Additional configuration options are revealed to customize your container further:

---

### Environment Variables

Add any required Environtment Variables your app may need. These values will be inserted into a container's environment when it launches from the template. The the syntax for entering in Environment variables is `KEY=VAL`<br />
>For example: if you are trying to set the "DEBUG" to "True", you would input "DEBUG=True".

### Files & SSH Keys

Use this tool to add any addtional configuration files, other GitHub repositories, SSH Keys or assets your repository needs to build and run properly. This is also the option to use if you have to upload any override files to overwrite any hard coded values in your repository.

For more details, Check Out:

1. [Adding Files to your Container]({{site.baseurl}}/repositories/adding-additional-files)
2. [Adding SSH Keys to build private modules]({{site.baseurl}}/troubleshooting/my-build-is-failing-because-of-no-such-key-or-host-key-verification-failed-what-do-i-do}})

---

### Exposed Ports

Open up any ports your repository may need.

Since your app runs on port 8000, we'll click on the *Exposed Ports* tool and expose it.
![Expose Ports](https://support.runnable.com/hc/en-us/article_attachments/203243523/Screen_Shot_2016-03-10_at_1.41.02_PM.png)

1. Once you are happy with Save & Build to save our changes and trigger your first build.
2. You will be automatically transitioned to the Logs tab of your configuration. Here you will be able to access:

---

### Build Logs

These logs correspond to all the output from the build process of your template. Any errors here will correspond to configuration options you have specified in your repository, Build Commands, Packages and Files & SSH keys.

![Build Logs](https://support.runnable.com/hc/en-us/article_attachments/203094436/Screen_Shot_2016-03-10_at_3.06.10_PM.png)

---

### CMD Logs

These logs correspond to all the output from the run process of a container launched from your template. Any errors here will correspond to configuration options you have specified in your CMD Command or Environment Variables.

![CMD Logs]({{ site.baseurl }}/images/python-cmd-logs.png)

> Your repository can crash for several reasons outside of your configuration on Runnable. There could be several factors ranging from a bug in your code or a misconfigured connection.

---

### Terminal

This is a terminal session into a container launched from your template. This is useful to verify any configuration details you may want to confirm.

![Terminal]({{ site.baseurl }}/images/python-terminal.png)

---

### URL

This is the Environment URL corresponding to the container launched from the default branch. Check [this]({{site.baseurl}}/networking/runnable-urls-explained) article out for more about Runnable URLs.

![Runnable URL]({{ site.baseurl }}/images/python-url.png)

* *Save &amp; Build* to save our changes and trigger your first build. ![Trigger Build](https://support.runnable.com/hc/en-us/article_attachments/203162596/Screen_Shot_2016-03-16_at_9.26.49_PM.png)

* When you’re ready, click *Done* to see a summary of your new container.
![Done](https://support.runnable.com/hc/en-us/article_attachments/203162656/Screen_Shot_2016-03-16_at_9.43.16_PM.png)
* If everything went well, your build will complete successfully. Anytime you run across an error that you need help with, we have developers ready to help in real-time. Click on the chat bubble on the bottom left!

---

## Connecting to a DB template

1. Follow one of our DB Quickstarts to add and seed a database: [MySQL]({{site.baseurl}}/services/databases/how-to-setup-your-mysql-database-template) / [PostgresQL]({{site.baseurl}}/services/databases/how-to-setup-your-postgres-database-template)

2. In our case, we added a MySQL template.
![MySQL 1]({{ site.baseurl }}/images/python-mysql1.png)

3. Our repository is setup to use the environment variable "MYSQL_HOST" to reference the hostname for MYSQL. To connect our Pyhton repository template to the "MySQL" template, open up the "Environment Variables" tool in the Pyhton template configuration modal.

> If you don't use Environment Variables for host discovery, you may have to modify your repository to use the Runnable template URL as your MySQL hostname. You can do this by either uploading a file using "Files & SSH Keys" or by actually modifying your repository on Github.com.

4. Specify the the value for the "MYSQL_HOST" environment variable. From our article [Runnable URLs]({{site.baseurl}}/networking/runnable-urls-explained), it is clear that we need to use MySQL's template URL to connect to it. As a convenience we provide all template URLs in the Environment Variables tab.
![MySQL 2]({{ site.baseurl }}/images/python-mysql2.png) ![MySQL 3]({{ site.baseurl }}/images/python-mysql3.png) ![MySQL 4]({{ site.baseurl }}/images/python-mysql4.png)

5. Click *Save & Build*.

6. The Pyhton template is now successfully connected with the "MySQL" template!

Head on over to our [Branches]({{site.baseurl}}/troubleshooting/i-dont-see-my-branches-being-added-on-runnable) section to see how to containers from your templates.
