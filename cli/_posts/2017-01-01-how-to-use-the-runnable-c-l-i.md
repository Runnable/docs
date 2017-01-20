---
title: How to use the Runnable CLI
shortTitle: Basic Usage
step: 1
description: How to use the Runnable CLI
---

## Requirements

To use the CLI, you need:

* nodejs `v4.2.x` or above
* npm `v2.7` or above

## Installation

To install the CLI, run `npm install -g @runnable/cli`.

## Authentication
1. Before you can start running commands, you must authenticate your session by running:
`runnable login`

2. Follow the prompt to input your username and password (and OTP if you have two factor authentication enabled).

3. Select the Github organization you would like to work with.

## Commands

#### `runnable login`

Use this command to authenticate your CLI session in your terminal. You will also be prompted to choose a Github organization. You can change the Github organization at any time using `runnable org`.

#### `runnable org`

Use this command to change the active Github organization in your session.

#### `runnable logs [repository] [--build|--cmd]`

Use this command to view the logs of a container. You can specify the name of the container you are trying to reach in the following format: `<reponame>/<branchname>`.

If you don't provide a name, the cli will automatically map the command you are trying to run to the repo/branch your local directory is on.

You can choose to view the build logs by adding the `-b` argument to the command. Conversely, you can view the CMD logs by adding the `-c` argument to the command. If you don't specify the aforementioned commands, the command will just follow the real time logs of the Container.

#### `runnable list [repository]`

Use this command to get an overview of all the different containers you have under the active Github organization.

You can drill down and list all the branches of a repository by specifying a repository name.

#### [`runnable auto-isolation [repository]`](./enable_auto_isolation.md)
#### [`runnable ssh [repository]`](./ssh_into_container.md)
#### [`runnable upload <file>`](./syncing_files.md)
#### [`runnable pull [repository]`](./pulling_docker_images.md)
