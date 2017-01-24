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

1) Just click on the *Add a service* button.
![add-a-service](/images/memcached-add-service.png)

2) Find the memcached template and click select.

3) Give your service a name. This will help build the URL you will use to connect this service. For example, if your service is called *memcached-datastore*, your URL will be `memcached-datatore-staging-yourGitHubOrgName.runnableapp.com`.
![memcached-name](/images/memcached-name.png)

4) Click "Add service".

5) Your memcached is now ready to configure. Just click on the *Configure Service* button to reveal additional configuration settings.
![memcached-configure](/images/memcached-configure.png)

6) You should be able to instantly connect another services to this container, just use the URL: `memcached://memcached-datatore-staging-yourGitHubOrgName.runnableapp.com`.

