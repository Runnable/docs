---
title: Starting an SSH Session
category: cli
step: 2 
description: Starting an SSH Session
---

    Usage:
      runnable ssh [repository]

    Use this command to spawn a shell session into the container.
    [repository] format: <repo-name>/<branch-name>.
    Without [repository], the current directory will be used to determine <repo-name>/<branch-name>.

1. In your terminal, navigate to the local directory of a repository whose container is running in Runnable.

2. Start an ssh session
  `runnable ssh`.

  > To ssh into another container on runnable, add the name of the repository as the last argument

  For example, if you'd like to ssh into the runnable container called *api/feature-1*, the command would be:

  `runnable ssh api/feature-1`.

3. You will now be in an ssh session with a container on Runnable that maps to the branch you have checked out locally.
