---
layout: page
title: How It Works
permalink: /about/
---

### Overview
Runnable is a sandbox service that creates full-stack environments for every branch across all your GitHub repositories. These environments can be used to integrate and test your team's branches end-to-end, before they’re merged into your mainline branch.

#### New Branch; New Environment
When GitHub sends a webhook signaling a new branch being created, Runnable triggers a build and pulls that branch's code. After the build is complete, Runnable starts the container and attaches it to the network with your other containers. Without performing any additional work, you now have that branch's code running alongside your other services.

#### Update Branch; Update Environment
When GitHub sends a webhook signaling a push event to a branch, Runnable triggers a new build, and pulls that branch's new code. After the build is complete, Runnable swaps in the new running container and discards the previous one. Your running branch is always kept up to date.

> If you prefer to manually rebuild and update your running branches, you can by turning off Auto Deploy on any branch.

#### Delete Branch; Clean up Environment
GitHub also sends webhooks when branches are deleted. Runnable responds to this by discarding the running branch. Any services that were configured to use the deleted branch are automatically re-mapped to its default branch, which is specified during setup (usually master). Following good branch cleanup is all that's needed to maintain your environments on Runnable.

> This cleanup rule also applies to isolated branches and all their services.

#### Supported Stacks and Services

Below is a list of stacks and services that Runnable has been tested with; however, anything that runs on top of Docker will generally work with Runnable. Runnable engineers are available to help in any capacity.
 
##### Language/Stacks:
* Ruby
* Rails
* Python
* Node.js
* PHP
* Go
* Java
* C / C++

##### Services:
* MySQL
* PostgreSQL
* MongoDB
* RethinkDB
* Redis
* Memcached
* HBase
* RabbitMQ
* Cassandra
* Nginx
* ElasticSearch
* Consul-Server

Brought to you by the team at [Runnable](https://runnable.com/).
