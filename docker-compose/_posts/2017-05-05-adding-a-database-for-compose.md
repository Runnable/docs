---
title: Adding a Database for Compose
short: Adding a Database
category: docker-compose
order: 3
---

Learn how to add a database to your Compose based environment.

> If you’re setting up without Compose, follow the [databases for Dockerfiles guide](https://runnable.com/docs/databases-datastores/how-to-setup-your-postgres-database-template).

---

Start by creating a Dockerfile to build your service and adding it to your repository:

Dockerfile-db:
[mysql][postgresql]

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

---

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

Then add your database service to your Compose file:

Compose File:

    Database: ./Dockerfile-db

Once you push your changes to your repository, should see a new database service launch on the Container page.

> **Note:** If you’re using Docker Hub’s [MySQL || PostgreSQL] image, your output may differ due to their use of `entrypoint` and `volumes`, which are [unsupported features](docker-compose/docker-compose-feature-support).

---

# Seeding Your Database

## Creating a Seed File

You can seed your database from a seed file. If you don’t have one, here’s how to create one:

[mysql][postgresql]

    $ mysqldump --all-databases -u mysql -p > seed.sql

    $ pg_dump -U postgres -Fc postgres -f seed.dump

[mysql]

> Note: The default password is `mysql`.

You are now the proud owner of a [seed.sql || seed.dump] file.

Using the Seed File
Your database’s Dockerfile will need access to your seed file. Check the file into your repository and add this line to the Dockerfile before the `RUN` command:

[mysql][postgresql]

    ADD [src] /seed.sql

    ADD [src] /seed.dump

Replace [src] with the path to your dump file, relative to your Dockerfile:

> **Note:** Do not modify the destination [/seed.sql || /seed.dump]; it’s required to for the initialization script.

Your seeded database will now be created for all new builds.

---

## What’s Next?

- [Setting Up with Compose]({{ site.baseurl }}/docker-compose/launching-your-first-environment)
- [Adding a Database (Non-Compose)]()
- [How to Seed Your Database from S3]()

