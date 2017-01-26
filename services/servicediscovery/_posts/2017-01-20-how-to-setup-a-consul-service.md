---
title: How to setup a Consul service
shortTitle: Consul Setup
step: 2
tags:
- services
- servicediscovery
- consul
description: How to setup a Consul service
---

To launch a Consul service:

1. On the containers page, click on the *Add a Service* button on the side bar. 
  ![add-a-service]({{ site.baseurl }}/images/consul-add-service.png)

2. Find Consul in the list and click select next to it.

3. Give your service a name. This will help build the URL you will use to connect this service. 
  > For example, if your service is called *consul-datastore*, your URL will be `consul-datatore-staging-yourGitHubOrgName.runnableapp.com`.
  ![consul-name]({{ site.baseurl }}/images/consul-name.png)

4. Click *Add Service*.

5. Your consul is now ready to configure. Just click on the *Configure Service* button to reveal additional configuration settings.
  ![consul-configure]({{ site.baseurl }}/images/consul-configure.png)

6. You should be able to instantly connect another services to this container, just use the URL:  
    `consul://consul-datatore-staging-yourGitHubOrgName.runnableapp.com`.

