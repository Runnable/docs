---
title: What Permissions Does Runnable Need?
short: GitHub Permissions
category: privacy
order: 2
---

Based on GitHub’s current permission model, we have to ask for more permissions than we would ideally like to (we **do not** modify your code). The permissions we need are:

---

1. Get a user's basic info.
2. Get a list of a user's organizations.
3. Get a list of branches and commits from private repos from a particular organization.
4. Add webhooks to repos.
5. Add deploy keys to repos.

Items #4 and #5 require write access to a GitHub repo.  For the other items, we only need read-only access.  In the future, if GitHub offers a way to request read only access that allows us to add webhooks and deploy keys we will no longer need to request write access only.
