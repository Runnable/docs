---
title: Enabling Auto-Isolation for a Branch
category: cli
step: 4
description: Enabling Auto-Isolation for a Branch
---

#### What is Auto-Isolation?
  Auto-isolation is

    Usage:
      runnable auto-isolation [repository] <enable/disable>

    Use this command to spawn a shell session into the container.
    [repository] format: <repo-name>/<branch-name>.
    Without [repository], the current directory will be used to determine <repo-name>/<branch-name>.

1. In your terminal, navigate to the local directory of a repository whose container is running in Runnable.
  `$ cd <path-to-repository>`

2. Enable auto-isolation on your template
  `$ runnable auto-isolation enable`.

  This will start a dialog prompt that will guide you through enabling auto-isolation for your branch.
