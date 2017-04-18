---
title: How to setup Unit Tests for your Services
shortTitle: Running Unit Tests
step: 1
description: How to setup Unit Tests for your Services
---

Runnable makes it easy to setup testing for your services using Compose.

---

### Configuring your unit tests

Let's walkthrough configuring an example repository. The repository we will configure has the following Docker compose file:
From this Compose file, it is clear that we expect to see 2 containers launch for this repository: a web container and a db container. To configure this repository on Runnable,

1. Go to your org on the Runnable.com.

2. Click on the "Add Services" button and select the repository where the Compose file is tracked
  ![Add Repository]({{ site.baseurl }}/images/testing-add-repo.png)

3. You will now see the configuration modal with the 'Compose' tab selected. Here you can name your service, etc.
  ![Configure Service]({{ site.baseurl }}/images/testing-add-service.png)

4. To configure a testing environment, ensure that the testing is toggled on.
  ![Enable Testing]({{ site.baseurl }}/images/testing-enable-testing.png)

5. Specify the path of the Docker Compose file in the repository. The path should be relative to the root of the repo.
  ![Specify Docker-Compose Path]({{ site.baseurl }}/images/testing-type-name.png)

6. Next, select the service that you will be running tests from. Github integration will be applied to this service.
  ![Select Test Container]({{ site.baseurl }}/images/testing-select-service.png)

7. Click on "Create Environment".
  ![GitHub Organization People]({{ site.baseurl }}/images/testing-create-envs.png)

8. Your testing services will now build and deploy. You will be able to see the test results using the status icon to the left of the service name.
  ![GitHub Organization People]({{ site.baseurl }}/images/testing-services.png)

9. Check the CMD tab to see the logs from your unit tests.
  ![GitHub Organization People]({{ site.baseurl }}/images/testing-passed.png)
