---
title: How to seed your database from a dump file
shortTitle: Seeding from a Dump File
step: 4
tags:
- services
- databases
- postgres
- mysql
description: How to seed your database from a dump file
---

One of the greatest features of Runnable is the ability to launch isolated application stacks for
every branch that you commit. In fact, every single branch can have it's own database or set of
databases to interact with, isolated from other branches, for testing any assortment of new
features. As a result, breaking changes in your database schema or the addition of new models can
be tested on the fly without affecting your _master_ branch databases.

Our DB templates for Postgres and Mysql come with a build-in initialization script that allows you
to seed you DB during the build process. This allows you to 'bake' your seed into your master DB
container. Then every branch that you run in isolation will immediately start up with a DB
container that is pre-seeded, taking advantage of the container image cache.

#### Get Started
In order to seed your database, you will need to [obtain a backup (or dump) of your existing database](clone_database.md).
Once you have obtained the dump file, continue on the following steps:

* [MySQL](#mysql)
* [PostgreSQL](#postgresql)

# MySQL
### Upload the seed file to your template configuration
1. Bring up the template configuration modal by either clicking on the _cog_ next to your database template in the `Containers` pane, or clicking on Dockerfile in the `Templates` pane.
  ![Select Template](/images/seed-mysql-db-1.png)
2. Select the `Dockerfile` tab on the top menu within the modal.
  ![Select Dockerfile](/images/seed-mysql-db-2.png)
3. Click on the `[+]` button above the file explorer to the left of the Dockerfile editor.
  ![Add File/Folder](/images/seed-mysql-db-3.png)
4. Select 'Upload File' to bring up the file selector and choose your dump file (i.e. `seed.sql`).
  ![File Uploaded](/images/seed-mysql-db-4.png)


### Enable the database seeding functionality
1. Uncomment the `ADD seed.sql /seed/sql` line in the Dockerfile editor to the right.
  ![Uncomment Seed](/images/seed-mysql-db-5.png)
    > If you have named your seed something other than `seed.sql`, you should modify the first part of the add command.
    Make sure you leave the second `seed.sql` intact so the init script will work.
2. Now click `Save & Build` to build your container and seed your database.


# PostgreSQL
### Upload the seed file to your template configuration
1. Bring up the template configuration modal by either clicking on the _cog_ next to your database template in the `Containers` pane, or clicking on Dockerfile in the `Templates` pane.
  ![Select Template](/images/seed-postgres-db-1.png)
2. Select the `Dockerfile` tab on the top menu within the modal.
  ![Select Dockerfile](/images/seed-postgres-db-2.png)
3. Click on the `[+]` button above the file explorer to the left of the Dockerfile editor.
  ![Add File/Folder](/images/seed-postgres-db-3.png)
4. Select 'Upload File' to bring up the file selector and choose your dump file (i.e. `seed.dump`).
  ![File Uploaded](/images/seed-postgres-db-4.png)


### Enable the database seeding functionality
1. Uncomment the `ADD seed.dump /seed/dump` line in the Dockerfile editor to the right.
  ![Uncomment Seed](/images/seed-postgres-db-5.png)
    > If you have named your seed something other than `seed.dump`, you should modify the first part of the add command.
    Make sure you leave the second `seed.dump` intact so the init script will work.
2. Now click `Save & Build` to build your container and seed your database.

# Next steps

Now that your template database container has been 'baked' in with your seed file, subsequent databases that are spawned per branch will immediately start up with the seeded data. If you ever want to update your seed file, just click `Rebuild Without Cache` on the template container to pull a newer seed and cache it into the container image.
