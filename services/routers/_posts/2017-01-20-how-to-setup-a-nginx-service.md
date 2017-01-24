---
title: How to setup a NGINX service
shortTitle: NGINX Setup
step: 2
tags:
- services
- routers
- nginx
description: How to setup a NGINX service
---

Launching a new NGINX service is easy; 

1. Just click on the *Add a Service* button.  
  ![add-a-service](/images/nginx-add-service.png)

2. Find NGINX in the list and click select next to it.

3. Give your service a name. This will help build the URL you will use to connect this service. 
  > For example, if your service is called *nginx-datastore*, your URL will be `nginx-datatore-staging-yourGitHubOrgName.runnableapp.com`.
  ![nginx-name](/images/nginx-name.png)

4. Click *Add Service*.

5. Your nginx is now ready to configure. Just click on the *Configure Service* button to reveal additional configuration settings.
  ![nginx-configure](/images/nginx-configure.png)

6. You should be able to instantly connect another services to this container, just use the URL:  
	`http://nginx-datatore-staging-yourGitHubOrgName.runnableapp.com`.

