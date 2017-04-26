---
title: How To Set Up a HBase Service
shortTitle: HBase Setup
step: 2
tags:
- services
- kvstores
- hbase
description: How To Set Up a HBase Service
---

---

1. Click on the **Add a Service** button.  
  ![add-a-service]({{ site.baseurl }}/images/hbase-add-service.png)

2. Find **HBase** in the list and click select next to it.

3. Give your service a name. This will help build the URL you will use to connect this service.
  > For example, if your service is called **hbase-datastore**, your URL will be `hbase-datatore-staging-yourGitHubOrgName.runnableapp.com`.
  ![hbase-name]({{ site.baseurl }}/images/hbase-name.png)

4. Click **Add Service**.

5. HBase is now ready to configure. Just click on the **Configure Service** button to reveal additional configuration settings.
  ![hbase-configure]({{ site.baseurl }}/images/hbase-configure.png)

6. You should be able to instantly connect another services to this container, just use the URL:  
    `hbase://hbase-datatore-staging-yourGitHubOrgName.runnableapp.com`.
