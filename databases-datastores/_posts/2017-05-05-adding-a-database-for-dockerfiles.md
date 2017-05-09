---
title: Adding a Database for Dockerfiles
short: Adding a Database for Dockerfiles
category: databases-datastores
order: 1
---

Learn how to add a database to your Dockerfile (non-Compose) based environment.

> **If you’re using Compose**, follow the [databases for Compose guide]({{ site.baseurl }}/docker-compose/adding-a-database-for-compose).

---

# Adding Your Database Service

1. From the Containers page, click the **Add Services** button and select the **Non-Repository** tab.

    ![](images/ss-databases-add.png)

2. Choose your database, give your service a name, and create it.

    ![](images/ss-databases-name.png)

> **Note:** You can set environment variables by clicking the gear icon next to its name. Environment variables can be used to define credentials, or form container connections.

---

# Seeding Your Database

## Creating a Seed File

You can clone an existing database to create a seed file. Here’s how to create one:

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

1. Open the configuration for your database by clicking the gear icon next to its name, and select the **Dockerfile** tab.

    ![](images/ss-databases-menu.png)

2. Open the file menu by clicking the **+** icon in the file browser and select **Upload File**.

    ![](images/ss-databases-configure.png)

3. Select and upload your `seed.sql`{:data-picker="MySQL" data-picker-toggle=""}`seed.dump`{:data-picker="PostgreSQL" data-picker-toggle="false"} file to your container.

4. In the file editor, uncomment the `ADD` command and replace `[src]` with the path to your dump file, relative to your Dockerfile:

<div class="grid-block align-center pre-header">
  <button class="grid-block shrink btn btn-xs active" data-picker="MySQL">MySQL</button>
  <button class="grid-block shrink btn btn-xs" data-picker="PostgreSQL">PostgreSQL</button>
</div>
<pre data-picker="MySQL" data-picker-toggle>
ADD [src] /seed.sql
</pre>
<pre data-picker="PostgreSQL" data-picker-toggle="false">
ADD [src] /seed.dump
</pre>

> **Note:** Do not modify the destination `/seed.sql`{:data-picker="MySQL" data-picker-toggle=""}`/seed.dump`{:data-picker="PostgreSQL" data-picker-toggle="false"}; it’s required to for the initialization script.

Your seeded database will now be created for all new builds.

---

## What’s Next?

- [Using Your Own Dockerfiles]({{ site.baseurl }}/repositories/byod/using-your-own-dockerfiles)
- [Adding Files and SSH Keys]({{ site.baseurl }}/repositories/adding-files-and-ssh-keys)
