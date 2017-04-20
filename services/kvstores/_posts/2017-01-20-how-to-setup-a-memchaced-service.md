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

---

1. On the **Containers** page, click on the **Add a Service** button on the side bar.
  ![add-a-service]({{ site.baseurl }}/images/memcached-add-service.png)

2. Find **Memcached** in the list and click select next to it.

3. Give your service a name. This will help build the URL you will use to connect this service.
  > For example, if your service is called **memcached-datastore**, your URL will be `memcached-datatore-staging-yourGitHubOrgName.runnableapp.com`.
  ![memcached-name]({{ site.baseurl }}/images/memcached-name.png)

4. Click **Add Service**.

5. Your Memcached is now ready to configure. Just click on the **Configure Service** button to reveal additional configuration settings.
  ![memcached-configure]({{ site.baseurl }}/images/memcached-configure.png)

6. You should be able to instantly connect another services to this container, just use the URL:  
	`memcached://memcached-datatore-staging-yourGitHubOrgName.runnableapp.com`.
