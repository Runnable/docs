---
title: Adding SSH Keys
short: Adding SSH Keys
category: docker-compose
order: 4
---

Adding your SSH key allows services in your project to access any private repositories they depend on when building.

> **Note:** One way to know that your project needs a user key is if any of your services fail to build with “no such key” or “host key verification failed” errors.

---

## Adding Your User Key

Open the SSH Keys settings for your team by clicking your avatar in the upper-left corner and selecting **SSH Keys**.

![](images/ss-ssh-navigation.png)

If any of your teammates have already added their keys to Runnable, you’ll see them here. Click the **Authorize** button to open the GitHub authorization page in a new window.

![](images/ss-ssh-authorize.png)

Click the green **Authorize Runnable** button to give Runnable permission to create a user key on your behalf.

![](images/ss-ssh-github.png)

> **Note:** We’ll create a user key, which has the same level of repository access that your user account has on GitHub.

---

## Your New Key

Once you’ve granted access, you’ll see a confirmation message to confirm that we’ve created your key. In Runnable, your key will appear in your team’s list of SSH keys.

![](images/ss-ssh-new-key.png)

Now that your key has been created, it will be added to the `.ssh` directory on every container before it builds. This will give them access to any private dependencies that you can access on GitHub.

---

## Deleting Your User Key

If you no longer need to use your key, you can delete it from [your SSH key settings on GitHub](//github.com/settings/keys).

---

## What’s Next?

- [Setting Up with Compose]({{ site.baseurl }}/docker-compose/launching-your-first-environment)
- [Adding a Database]({{ site.baseurl }}/docker-compose/adding-a-database-for-compose)
