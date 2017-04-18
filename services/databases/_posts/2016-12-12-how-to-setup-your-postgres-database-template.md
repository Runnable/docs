---
title: How to setup your PostgreSQL database template
shortTitle: PostgreSQL Setup
step: 2
tags:
- services
- databases
- postgres
description: How to setup your PostgreSQL database template
---

Our DB templates for PostgreSQL come with a build-in initialization script that allows you
to seed you DB during the build process. This allows you to 'bake' your seed into your master DB
container. Then every branch that you run in isolation will immediately start up with a DB
container that is pre-seeded, taking advantage of the container image cache.

---

### Getting Started
1. Make sure you have set up your database template first.

2. Create a _Non-Repository Template_ for PostgreSQL.
  * Click __Create Template__ in the _Templates_ tab
  * Select __Non-Repository Template__ to reveal a list of non-repository templates. Select __PostgreSQL__.
    ![Select Template]({{ site.baseurl }}/images/create-postgres-db-1.png)  

  * Name your template, if desired. Click __Create Template__
    ![Name & Create Template]({{ site.baseurl }}/images/create-postgres-db-2.png)  

  * Your template should launch and turn *green* when the container has finsihed building.
    ![Template launched]({{ site.baseurl }}/images/create-postgres-db-3.png)  

<<<<<<< Updated upstream
  * Select __Dockerfile__ to customize your database. Here you can modify the environment variables to
=======
  5. Select __Dockerfile__ to customize your database. Here you can modify the environment variables to
>>>>>>> Stashed changes
  change desired usernames, passwords, and database names. Defaults have been set for your convienence,
  but if you would like to change anything, just uncomment the line and modify as desired.
    ![Dockerfile]({{ site.baseurl }}/images/create-postgres-db-4.png)  

  * Once running, you can setup template connections with your repository applications. [Here is how.](/connections/how_to_connect_your_containers.md)


---

### Produce a dump of your development database to upload to Runnable
1. Take a dump of your PostgreSQL database. The following command will dump the contents of your database named `postgres` to a `dump` file.
  > Note the use of `-U postgres`, you will need to authorize the pg_dump command with whichever custom credentials you have set.

  ```
  $ pg_dump -U postgres -Fc postgres -f seed.dump
  ```  

2. Your dump file should end up looking similar to this, but much longer:
    ```
    $ cat seed.dump
    PGDMP                                                                                                      
    postgres9.4.89.4.8`0ENCODINENCODINGSET client_encoding = 'UTF8';                                        
    falsea00                                                                                                   
    STDSTRINGS                                                                                                 
    STDSTRINGS(SET standard_conforming_strings = 'on';                                                         
    falseb12621214postgreDATABASExCREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLA
    TE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';                                                                 
    DROP DATABASE postgres;
    ...
    ```

---

### Upload the seed file to your template configuration
1. Bring up the template configuration modal by either clicking on the _cog_ next to your database template in the `Containers` pane, or clicking on Dockerfile in the `Templates` pane.
  ![Select Template]({{ site.baseurl }}/images/seed-postgres-db-1.png)  
2. Select the `Dockerfile` tab on the top menu within the modal.
  ![Select Dockerfile]({{ site.baseurl }}/images/seed-postgres-db-2.png)  
3. Click on the `[+]` button above the file explorer to the left of the Dockerfile editor.
  ![Add File/Folder]({{ site.baseurl }}/images/seed-postgres-db-3.png)  
4. Select 'Upload File' to bring up the file selector and choose your dump file (i.e. `seed.dump`).
  ![File Uploaded]({{ site.baseurl }}/images/seed-postgres-db-4.png)  

---

### Enable the database seeding functionality
1. Uncomment the `ADD seed.dump /seed/dump` line in the Dockerfile editor to the right.
  ![Uncomment Seed]({{ site.baseurl }}/images/seed-postgres-db-5.png)  
    > If you have named your seed something other than `seed.dump`, you should modify the first part of the add command.
    Make sure you leave the second `seed.dump` intact so the init script will work.
2. Now click `Save & Build` to build your container and seed your database.

---

### Next steps
Now that your template database container has been 'baked' in with your seed file, subsequent databases that are spawned per branch will immediately start up with the seeded data. If you ever want to update your seed file, just click `Rebuild Without Cache` on the template container to pull a newer seed and cache it into the container image.

Want to seed your database from S3? [Here is how.](/docs/services/databases/how-to-seed-your-database-from-s3)
