---
title: How to Set up a Redis Service
shortTitle: Redis Setup
step: 1
tags:
- services
- kvstores
- redis
description: How to Set up a Redis service
---

---

1. On the **Containers** page, click on the **Add a Service** button on the side bar.
  ![add-a-service]({{ site.baseurl }}/images/redis-add-service.png)

2. Find **Redis** in the list and click select next to it.

3. Give your service a name. This will help build the URL you will use to connect this service.
  > For example, if your service is called **redis-datastore**, your URL will be `redis-datatore-staging-yourGitHubOrgName.runnableapp.com`.
  ![redis-name]({{ site.baseurl }}/images/redis-name.png)

4. Click **Add Service**.

5. Your Redis is now ready to configure. Just click on the **Configure Service** button to reveal additional configuration settings.
  ![redis-configure]({{ site.baseurl }}/images/redis-configure.png)

6. You should be able to instantly connect another services to this container, just use the URL:  
    `redis://redis-datatore-staging-yourGitHubOrgName.runnableapp.com`.
