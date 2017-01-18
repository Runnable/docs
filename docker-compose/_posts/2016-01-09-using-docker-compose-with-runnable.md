---
title: Using Docker Compose With Runnable
category: docker-compose
step: 1
tags:
- docker
description: Using Docker Compose With Runnable
---

### Introduction

Docker Compose enables Docker users to specify definitions across all their services in a YAML file. This is useful for describing how a multi-service application, composed with multiple containers, should build and run on Docker.

Teams that use Docker Compose can use their existing YAML file to instruct Runnable on how to build and run their application, without any additional configuration.

### How To Use

The Docker Compose file contains all the necessary information for Runnable to build and run multi-service environments. This makes getting started with Runnable very simple. 

Our team is working on adding front-end support for selecting Compose files. To use Compose on Runnable, reach out to our Support team and provide them with your YAML file, and they'll manually add it to your account. The process takes between 3 - 5 minutes on average.

1. Sign up for an account at [runnable.com](https://runnable.com/signup).
  1. After authorization, select your GitHub organization.
  2. Wait while Runnable provisions the infrastructure for your account. This shouldn't take more than 5 minutes. (If it takes longer, try refreshing the page.)
  3. When complete, select the green button to proceed with your trial.
2. Click on the in-app chat, located on the bottom right of the page to reach our Support team.
3. An engineer will ask to provide them with the following:
  1. Compose YAML file
  2. Code repository containing the Compose YAML file
4. Your environment will start building shortly after the engineer adds the Compose YAML file.

For those who update the Docker Compose YAML file, Support team's involvement is required to incorporate the changes in Runnable. Our Support team will define an SLA based on your team's needs, and will respect the agreement until the front-end experience is ready for use.

### Supported Versions

Runnable currently supports the Docker Compose version 2 file format. Unsupported options are listed below.

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
