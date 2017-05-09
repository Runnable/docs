---
title: Adding a Database for Dockerfiles
short: Adding a Database for Dockerfiles
category: databases-datastores
order: 2
---

Learn how to add a database to your Dockerfile (non-Compose) based environment.

> **If you’re using Compose**, follow the [databases for Compose guide]({{ site.baseurl }}/docker-compose/adding-a-database-for-compose).

---

1. From the Containers page, click the **Add Services** button and select the **Non-Repository** tab.

    ![](images/ss-databases-add.png)

2. Choose your database, give your service a name, and create it.

    ![](images/ss-databases-name.png)

> **Note:** You can set environment variables by clicking the gear icon next to its name. Environment variables can be used to define credentials, or form container connections.

---

# Seeding Your Database

## Creating a Seed File

You can seed your database from a seed file. If you don’t have one, here’s how to create one:

<div class="grid-block align-center pre-header">
  <button class="grid-block shrink btn btn-xs active" data-picker="MySQL">MySQL</button>
  <button class="grid-block shrink btn btn-xs" data-picker="PostgreSQL">PostgreSQL</button>
</div>
<pre data-picker="MySQL" data-picker-toggle>
$ mysqldump --all-databases -u mysql -p > seed.sql
</pre>
<pre data-picker="PostgreSQL" data-picker-toggle="false">
$ pg_dump -U postgres -Fc postgres -f seed.dump
</pre>

{:data-picker="MySQL" data-picker-toggle=""}
> Note: The default password is `mysql`.

You are now the proud owner of a `seed.sql`{:data-picker="MySQL" data-picker-toggle=""}`seed.dump`{:data-picker="PostgreSQL" data-picker-toggle="false"} file.

## Using the Seed File
Your database’s Dockerfile will need access to your seed file. Check the file into your repository and add this line to the Dockerfile before the `RUN` command:

<div class="grid-block align-center pre-header">
  <button class="grid-block shrink btn btn-xs active" data-picker="MySQL">MySQL</button>
  <button class="grid-block shrink btn btn-xs" data-picker="PostgreSQL">PostgreSQL</button>
  <div class="grid-block monospace justify-right">Dockerfile-db</div>
</div>
<pre data-picker="MySQL" data-picker-toggle>
ADD [src] /seed.sql
</pre>
<pre data-picker="PostgreSQL" data-picker-toggle="false">
ADD [src] /seed.dump
</pre>

Replace `[src]` with the path to your dump file, relative to your Dockerfile:

> **Note:** Do not modify the destination `/seed.sql`{:data-picker="MySQL" data-picker-toggle=""}`/seed.dump`{:data-picker="PostgreSQL" data-picker-toggle="false"} it’s required to for the initialization script.

Your seeded database will now be created for all new builds.

---

## What’s Next?

- [Using Your Own Dockerfiles]({{ site.baseurl }}/repositories/byod/using-your-own-dockerfiles)
- [Adding Files and SSH Keys]({{ site.baseurl }}repositories/adding-files-and-ssh-keys)
