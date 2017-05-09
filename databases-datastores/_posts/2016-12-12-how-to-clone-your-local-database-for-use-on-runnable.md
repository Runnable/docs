---
title: Cloning & Seeding Databases
short: Cloning & Seeding Databases
category: databases-datastores
order: 5
---

## Cloning Your Database

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

---

## Seeding Your Database

> **If you’re using Compose**, follow the [databases for Compose guide]({{ site.baseurl }}/docker-compose/adding-a-database-for-compose#seeding-your-database) to seed your database.

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

- [Adding a Database for Compose]({{ site.baseurl }}/docker-compose/adding-a-database-for-compose)
- [Adding a Database for Dockerfiles]({{ site.baseurl }}/databases-datastores/adding-a-database-for-dockerfiles)
