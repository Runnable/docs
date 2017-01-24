---
title: How to setup a Memcached service
shortTitle: Memcached Setup
step: 2
tags:
- services
- kvstores
- memcached
description: How to setup a Memcached service
---

Launching a new Memcached container is easy; 

1) Just click on the "Add a service" button.
![/images/memcached-add-service.png]

2) Find the memcached template and click select.

3) Give your service a name. This will help build the URL you will use to connect this service. For example, if your service is called "memcached-datastore", your URL will be "memcached-datatore-staging-yourGitHubOrgName.runnableapp.com".
![/images/memcached-name.png]

4) Click "Add service".

5) Your memcached is now ready to configure. Just click on the "Configure Service" button to reveal additional configuration settings.
![/images/memcached-configure.png]

6) You should be able to instantly connect another service to this container, just use the URL (memcached-datatore-staging-yourGitHubOrgName.runnableapp.com).

