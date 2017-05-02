---
title: How to Set Up a RabbitMQ Service
short: RabbitMQ Setup
category: services
order: 2
---

---

1. Just click on the **Add a Service** button.
  ![add-a-service]({{ site.baseurl }}/images/rabbitmq-add-service.png)

2. Find **RabbitMQ** in the list and click select next to it.

3. Give your service a name. This will help build the URL you will use to connect this service.
  > For example, if your service is called **rabbitmq-datastore**, your URL will be `rabbitmq-datatore-staging-yourGitHubOrgName.runnableapp.com`.
  ![rabbitmq-name]({{ site.baseurl }}/images/rabbitmq-name.png)

4. Click **Add Service**.

5. Rabbitmq is now ready to configure. Just click on the **Configure Service** button to reveal additional configuration settings.
  ![rabbitmq-configure]({{ site.baseurl }}/images/rabbitmq-configure.png)

6. You should be able to instantly connect another services to this container, just use the URL:
  `rabbitmq://rabbitmq-datatore-staging-yourGitHubOrgName.runnableapp.com`.
