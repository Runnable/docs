---
title: Ruby on Rails Quickstart Guide
shortTitle: Ruby on Rails
step: 2
tags:
- quickstarts
- rails
description: How to setup your multi-tier Ruby on Rails application.
---

This guide will help you setup Runnable templates for a simple Rails application. This guide will assume that you don’t have a Dockerfile and want Runnable to generate the Dockerfile for you using a simple setup guide.

---

## Configuring your first Rails app

1. From the *Configure* page, click on the *Create Template* button. Choose the Rails repository you want to add.<br />
![Add Template]({{ site.baseurl }}/images/create-rails-1.png)
2. Select _Start up with our setup guide_ as your configuration mode.
![Select Mode]({{ site.baseurl }}/images/create-rails-2.png)
3. Name your template.
![Name Template]({{ site.baseurl }}/images/create-rails-3.png)
4. Now you can select your *Stack Type*. This is the environment that your repository requires for runtime. In our case, it is *Rails*. Also, make sure to select a compatible *Ruby* version.
![Select Stack]({{ site.baseurl }}/images/create-rails-4.png)
5. After clicking *Next*, you will be presented with the following three options: *Packages*, *Build Commands*, and *Container CMD*.
![Build Commands and CMD]({{ site.baseurl }}/images/create-rails-5.png)

---

### Packages

This option allows you to install any tools, libraries, or frameworks you need. Add multiple packages by separating them with spaces. You can specify packages that are listed in the [Ubuntu Aptitude library](http://packages.ubuntu.com/).
![Packages]({{ site.baseurl }}/images/create-rails-5a.png)

---

### Build Commands

Use this option to specify any commands needed to build and prepare your app (supports UNIX bash format). These commands will run in the root folder of the repository after every push. This is also the perfect place to run any commands to build any assets (such as css, html and minified javascript code).

For our simple API repository, this is where we’ll specify:<br />
`bundle install`
![Build Commands]({{ site.baseurl }}/images/create-rails-5b.png)

>Build commands cannot connect to any other container during a build. It is therefore not recommended to seed databases or communicate with another container using the Build Commands.

---

### Container CMD

Here the main run command for your app is specified. Important: the container will stop running when this command exits. For our simple Rails app, we will specify:<br />
`rails server -b 0.0.0.0`
![Container CMD]({{ site.baseurl }}/images/create-rails-5c.png)

>Note that we are using 0.0.0.0 to bind to all interfaces. This will allow us to access the container from other containers and through the browser."

__Container CMD__ is where the invocation command for our app is specified. _Important:_ the container will stop running when this command exits.

>This would also be a good place to add your migration commands after connecting your database. Your container cmd would look something similar to "rake db:migrate && rails server -b 0.0.0.0"

Click __Next__. Additional configuration options are revealed to customize your container further:

---

### Environment Variables

Add any required Environtment Variables your app may need. These values will be inserted into a container's environment when it launches from the template. The the syntax for entering in Environment variables is `KEY=VAL`<br />
![Environment Variables]({{ site.baseurl }}/images/create-rails-8.png)

>For example: if you are trying to set the "RAILS_ENV" to "staging", you would input "RAILS_ENV=staging".

---

### Files & SSH Keys

Use this tool to add any addtional configuration files, other GitHub repositories, SSH Keys or assets your repository needs to build and run properly. This is also the option to use if you have to upload any override files to overwrite any hard coded values in your repository.
![Files & SSH Keys]({{ site.baseurl }}/images/create-rails-9.png)

For more details, Check Out:

1. [Adding Files to your Container](https://support.runnable.com/hc/en-us/articles/208221743)
2. [Adding SSH Keys to build private modules](https://support.runnable.com/hc/en-us/articles/208018586-My-build-is-failing-because-of-No-Such-Key-or-Host-key-verification-failed-What-do-I-do-)

---

### Exposed Ports

Open up any ports your repository may need.

Most Rails apps run on 3000 when developing, so we'll click on the *Exposed Ports* tool and expose it. 
![Exposed Ports]({{ site.baseurl }}/images/create-rails-7.png)

1. Once you are happy with Save & Build to save our changes and trigger your first build.
2. You will be automatically transitioned to the Logs tab of your configuration. Here you will be able to access:

---

### Build Logs

These logs correspond to all the output from the build process of your template. Any errors here will correspond to configuration options you have specified in your repository, Build Commands, Packages and Files & SSH keys.
![Build Logs]({{ site.baseurl }}/images/create-rails-11.png)

---

### CMD Logs

These logs correspond to all the output from the run process of a container launched from your template. Any errors here will correspond to configuration options you have specified in your CMD Command or Environment Variables.
![CMD Logs]({{ site.baseurl }}/images/create-rails-12.png)

> Your repository can crash for several reasons outside of your configuration on Runnable. There could be several factors ranging from a bug in your code or a misconfigured connection.

---

### Terminal

This is a terminal session into a container launched from your template. This is useful to verify any configuration details you may want to confirm.
![Terminal]({{ site.baseurl }}/images/create-rails-13.png)

---

### URL

This is the Environment URL corresponding to the container launched from the default branch. Check [this](https://support.runnable.com/hc/en-us/articles/212802006-Runnable-URLs) article out for more about Runnable URLs.
![URL]({{ site.baseurl }}/images/create-rails-14.png)


* *Save &amp; Build* to save our changes and trigger your first build. ![Trigger Build](https://support.runnable.com/hc/en-us/article_attachments/203162596/Screen_Shot_2016-03-16_at_9.26.49_PM.png)

* When you’re ready, click *Done* to see a summary of your new container.
![Done]({{ site.baseurl }}/images/create-rails-15.png)
* If everything went well, your build will complete successfully. Anytime you run across an error that you need help with, we have developers ready to help in real-time. Click on the chat bubble on the bottom left!

---

## Connecting to a DB template

1. Follow one of our DB Quickstarts to add and seed a database: [MySQL](https://support.runnable.com/hc/en-us/sections/202755686-Branches) / [PostgresQL](https://support.runnable.com/hc/en-us/sections/202755686-Branches) / [MongoDB](https://support.runnable.com/hc/en-us/sections/202755686-Branches).

2. In our case, we added a PostgreSQL template.
![Postgres DB]({{ site.baseurl }}/images/rails-add-db-1.png)

3. Our repository is setup to use the environment variable "DATABASE_URL" to reference the hostname for PostgreSQL. To connect our Rails repository template to the "PostgreSQL" template, open up the "Environment Variables" tool in the Rails template configuration modal.
![Open Env Vars]({{ site.baseurl }}/images/rails-add-db-5.png)

  > If you don't use Environment Variables for host discovery, you may have to modify your repository to use the Runnable template URL as your PostgreSQL hostname. You can do this by either uploading a file using "Files & SSH Keys" or by actually modifying your repository on Github.com.

4. Specify the the value for the "DATABASE_URL" environment variable. From our article [Runnable URLs](https://support.runnable.com/hc/en-us/articles/212802006-Runnable-URLs), it is clear that we need to use PostgreSQL's template URL to connect to it. As a convenience we provide all template URLs in the Environment Variables tab.
![Env Vars]({{ site.baseurl }}/images/rails-add-db-2.png) ![Insert URL]({{ site.baseurl }}/images/rails-add-db-3.png) ![Added URL]({{ site.baseurl }}/images/rails-add-db-4.png)

  > Make sure to add the PORT: 5432 as well!

5. Click *Save & Build*.

6. The Rails template is now successfully connected with the "PostgreSQL" template!

Head on over to our [Branches](https://support.runnable.com/hc/en-us/sections/202755686-Branches) section to see how to containers from your templates.
