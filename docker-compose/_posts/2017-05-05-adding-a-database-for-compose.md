---
title: Adding a Database for Compose
short: Adding a Database for Compose
category: docker-compose
order: 2
---

Learn how to add a database to your Compose based environment.

> If you’re **not using Compose**, follow the [databases for Dockerfiles guide]({{ site.baseurl }}/databases-datastores/adding-a-database-for-dockerfiles).

---

Start by creating a Dockerfile to build your service and adding it to your repository:

<div class="grid-block align-center pre-header">
  <button class="grid-block shrink btn btn-xs active" data-picker="MySQL">MySQL</button>
  <button class="grid-block shrink btn btn-xs" data-picker="PostgreSQL" data-picker-default="false">PostgreSQL</button>
  <div class="monospace">Dockerfile-db</div>
</div>
<pre data-picker="MySQL" data-picker-toggle>
# Change version number to desired (i.e. 5.5, 5.6, 5.7)
FROM runnable/mysql:5.6

# Set desired environment variables
ENV MYSQL_USER mysql
ENV MYSQL_PASSWORD mysql
ENV MYSQL_DATABASE app
# to set a root password, uncomment the next line
# ENV MYSQL_ROOT_PASSWORD test

# Uncomment the following ADD line to enable seeding the PostgreSQL DB
# Make sure to check in a mysql dump file (i.e. mysqldump [options] > seed.sql)
# ADD seed.sql /seed.sql

# Run the initialization script (leave this alone)
RUN gosu mysql /init.sh
</pre>
<pre data-picker="PostgreSQL" data-picker-toggle="false">
# Change desired version below (Available: 9.3, 9.4, 9.5)
FROM runnable/postgres:9.4

ENV POSTGRES_USER postgres
ENV POSTGRES_DB postgres

# Uncomment the following ADD line to enable seeding the PostgreSQL DB
# Make sure to check in a pg_dump file (i.e. pg_dump -Fc db_name -f seed.dump)
# ADD seed.dump /seed.dump

# Run the initialization script (leave this alone)
RUN gosu postgres /init.sh \
  # Uncomment the following line for a custom pg_restore command. Edit as needed
  # "pg_restore --no-acl --no-owner -c -v -d $POSTGRES_DB /seed.dump"


</pre>

Then add your database service to your Compose file:


<div class="grid-block align-center pre-header">
  <div class="monospace">Dockerfile-db</div>
</div>
    Database: ./Dockerfile-db

Once you push your changes to your repository, you should see a new database service launch on the Containers page.

> **Note:** If you’re using Docker Hub’s <span data-picker-text>MySQL</span> image, your output may differ due to their use of `entrypoint` and `volumes`, which are [unsupported features](docker-compose/docker-compose-feature-support).

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
Your database’s Dockerfile will need access to your seed file. Check the file into your repository and add this line to the Dockerfile before the `RUN` command:

<div class="grid-block align-center pre-header">
  <button class="grid-block shrink btn btn-xs active" data-picker="MySQL">MySQL</button>
  <button class="grid-block shrink btn btn-xs" data-picker="PostgreSQL">PostgreSQL</button>
  <div class="monospace">Dockerfile-db</div>
</div>
<pre data-picker="MySQL" data-picker-toggle>
ADD [src] /seed.sql
</pre>
<pre data-picker="PostgreSQL" data-picker-toggle="false">
ADD [src] /seed.dump
</pre>

Replace `[src]` with the path to your dump file, relative to your Dockerfile:

> **Note:** Do not modify the destination `/seed.sql`{:data-picker="MySQL" data-picker-toggle=""}`/seed.dump`{:data-picker="PostgreSQL" data-picker-toggle="false"}; it’s required to for the initialization script.

Your seeded database will now be created for all new builds.

---

## What’s Next?

- [Setting Up with Compose]({{ site.baseurl }}/docker-compose/launching-your-first-environment)
