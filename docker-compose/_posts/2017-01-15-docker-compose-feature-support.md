---
title: Docker Compose Feature Support
shortTitle: Supported Features
step: 2
tags:
- docker
description: Docker Compose features that Runnable supports out of the box.
---

Docker Compose features that Runnable supports out of the box.

---

### Supported Versions

Runnable currently supports the Docker Compose version 2 file format. Unsupported options are listed below.

---

### Unsupported Options

The current service configuration options are unsupported at this time, and will simply be ignored by Runnable if they are present in your Compose YAML file.

> If these unsupported options prevent your environment from building and running on Runnable, please let us know. You can reach out via our in-app chat (Intercom) or via email at [support@runnable.com](mailto:support@runnable.com?subject=Docker%20Compose%20-%20Unsupported%20Options).

- build: *args*
- cap_add
- cap_drop
- cgroup_parent
- container_name
- cpu_*
- cpuset
- depends_on
- devices
- dns
- dns_search
- domainname
- driver
- driver_opts
- enable_ipv6
- entrypoint:
- env_file
- extends
- external
- external_links
- extra_hosts
- group_add
- hostname
- internal
- ipam
- ipc
- ipv4_address
- ipv6_address
- isolation
- labels
- link_local_ips
- log_*
- logging
- mac_address,
- mem_limit
- memswap_limit,
- net
- network_*
- networks
- oom_score_adj
- pid
- privileged
- read_only
- restart
- shm_size
- stdin_open
- tmpfs:
- tty
- user
- volumes:
- volumes_*
- working_dir
