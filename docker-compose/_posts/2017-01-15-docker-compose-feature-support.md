---
title: Docker Compose Feature Support
short: Supported Features
category: docker-compose
order: 4
---

While Runnable currently supports the Docker Compose v2 file format, there are some Compose features that we don’t support…yet.

---

## Operating Systems

We recommend installing Ubuntu or CentOS on your containers. Other operating systems may work, but Ubuntu and CentOS are our most popular and well tested.

---

## Features with Limited Support

If a feature is not supported, we may ignore the option if it’s present in your Compose file so your container may run without it.

{:.grid-block.shrink.ul.ul-monospace}
* `build: *args*`{:.orange}
* `cap_add`{:.orange}
* `cap_drop`{:.orange}
* `cgroup_parent`{:.orange}
* `container_name`{:.orange}
* `cpu_*`{:.orange}
* `cpuset`{:.orange}
* `depends_on`{:.orange}
* `devices`{:.orange}
* `dns`{:.orange}
* `dns_search`{:.orange}
* `domainname`{:.orange}
* `driver`{:.orange}
* `driver_opts`{:.orange}
* `enable_ipv6`{:.orange}
* `entrypoint:`{:.orange}
* `external`{:.orange}
* `external_links`{:.orange}
* `extra_hosts`{:.orange}
* `group_add`{:.orange}
* `hostname`{:.orange}
* `internal`{:.orange}
* `ipam`{:.orange}
* `ipc`{:.orange}
* `ipv4_address`{:.orange}
* `ipv6_address`{:.orange}
* `isolation`{:.orange}
* `labels`{:.orange}
* `link_local_ips`{:.orange}
* `log_*`{:.orange}
* `logging`{:.orange}
* `mac_address,`{:.orange}
* `mem_limit`{:.orange}
* `memswap_limit,`{:.orange}
* `net`{:.orange}
* `network_*`{:.orange}
* `networks`{:.orange}
* `oom_score_adj`{:.orange}
* `pid`{:.orange}
* `privileged`{:.orange}
* `read_only`{:.orange}
* `restart`{:.orange}
* `shm_size`{:.orange}
* `stdin_open`{:.orange}
* `tmpfs:`{:.orange}
* `tty`{:.orange}
* `user`{:.orange}
* `volumes:`{:.orange}
* `volumes_*`{:.orange}
* `working_dir`{:.orange}

We’re happy to help you with a solution or hear your feature requests. The best way to reach us is by <a class="link js-intercom-open">chat</a> or [email](mailto:support@runnable.com).

---

## Known Workarounds

### entrypoint

If you use Docker’s [MySQL](https://github.com/docker-library/mysql/blob/master/5.6/Dockerfile#L66) or [PostgreSQL](https://github.com/docker-library/postgres/blob/master/9.6/Dockerfile#L66) Dockerfiles, you may run into issues because `entrypoint` is used to execute a script:

<pre>
<strong>ENTRYPOINT</strong> ["docker-entrypoint.sh"]
</pre>

You can execute the script without `entrypoint` by using `run`:

<pre>
<strong>RUN</strong> docker-entrypoint.sh
</pre>

---

## What’s Next?

- [Setting Up with Compose]({{ site.baseurl }}/docker-compose/launching-your-first-environment)
- [Adding a Database]({{ site.baseurl }}/docker-compose/adding-a-database-for-compose)
