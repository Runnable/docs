---
title: How to setup a HBase service
shortTitle: HBase Setup
step: 2
tags:
- services
- kvstores
- hbase
description: How to setup a HBase service
---

Launching a new HBase service is easy; 

1. Just click on the *Add a Service* button.  
  ![add-a-service](/images/hbase-add-service.png)

2. Find HBase in the list and click select next to it.

3. Give your service a name. This will help build the URL you will use to connect this service. 
  > For example, if your service is called *hbase-datastore*, your URL will be `hbase-datatore-staging-yourGitHubOrgName.runnableapp.com`.
  ![hbase-name](/images/hbase-name.png)

4. Click *Add Service*.

5. Your hbase is now ready to configure. Just click on the *Configure Service* button to reveal additional configuration settings.
  ![hbase-configure](/images/hbase-configure.png)

6. You should be able to instantly connect another services to this container, just use the URL:  
	`hbase://hbase-datatore-staging-yourGitHubOrgName.runnableapp.com`.

