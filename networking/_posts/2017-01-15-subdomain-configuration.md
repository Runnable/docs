---
title: Subdomain Configuration
category: networking
step: 1
description: Subdomain Configuration
---

Runnable supports routing subdomain requests to your containers.
Our routing logic does a wildcard match on ```*.containerID-repo-org-staging.runnableapp.com``` and will route any queries to the URL pattern directly to the destination container.

## My subdomains still don’t work! What do I do?

Let’s assume that when you app runs on outside of Runnable, like on server.com, it handle’s all requests to abc.server.com successfully.

When you run the same app in Runnable, to get to ```abc.*``` you would use the following  URL: ```http://abc.containerID-repo-org-staging.runnableapp.com```.

If subdomain routing still does not seem to be working for your app, your routing logic may need to be adjusted to account for the extra subdomain level you get on Runnable. 

Note domain levels for the URL in Runnable:


| Level        | 4           | 3  | 2 | 1 |
| ------------- |:-------------:| :-----:| :---: | :----: |  :-----: |
| segment      | abc | containerID-repo-org-staging | runnableapp |  com |


If you are still unable to figure out why requests to a subdomain are failing on Runnable, please contact us through the in-app chat messenger. 
