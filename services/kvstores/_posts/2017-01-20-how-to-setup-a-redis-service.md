---
title: How to setup a Redis service
shortTitle: Redis Setup
step: 1
tags:
- services
- kvstores
- redis
description: How to setup a Redis service
---

Launching a new Redis service is easy; 

1. Just click on the *Add a Service* button.  
  ![add-a-service](/images/redis-add-service.png)

2. Find Redis in the list and click select next to it.

3. Give your service a name. This will help build the URL you will use to connect this service. 
  > For example, if your service is called *redis-datastore*, your URL will be `redis-datatore-staging-yourGitHubOrgName.runnableapp.com`.
  ![redis-name](/images/redis-name.png)

4. Click *Add Service*.

5. Your redis is now ready to configure. Just click on the *Configure Service* button to reveal additional configuration settings.
  ![redis-configure](/images/redis-configure.png)

6. You should be able to instantly connect another services to this container, just use the URL:  
	`redis://redis-datatore-staging-yourGitHubOrgName.runnableapp.com`.

