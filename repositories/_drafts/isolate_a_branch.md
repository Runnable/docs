How to Isolate a Branch
=======================

```
Isolation gives a branch a separate copy of all other containers, including databases
and other service containers. This is useful for testing changes such as database 
schemas, language versions, and various configs without disrupting your team.
```

1. On the **Containers** page, find the branch you want to isolate and click on the `...` button to the right.

  ![web/reset-pwd-flow branch container]({{ site.baseurl }}/images/isolation-select-branch.png)

2. Click **Enter Isolation**.

  ![Enter isolation...]({{ site.baseurl }}/images/isolation-enter.png)

3. Choose the containers (and the branches for each repository container) you want to isolate, and click **Enter Isolation**. 

  ![Isolation Setup]({{ site.baseurl }}/images/isolation-setup.png)

  Runnable will begin starting the containers and configure the appropriate Connections to communicate with your isolated stack.

4. Select the isolated branch to view its isolated stack.

  ![Isolation stack]({{ site.baseurl }}/images/isolation-pod.png)
