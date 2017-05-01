---
title: How To Set Up Your MySQL Database Template
short: MySQL Setup
category: database-datastore
order: 2
---

Our Database templates for MySQL come with a build-in initialization script that allows you
to seed you DB during the build process.

This allows you to 'bake' your seed into your master Database
container. Every branch that you run in isolation will immediately start up with a Database container that is pre-seeded, taking advantage of the container image cache.

---

### Getting Started
1. Make sure you have set up your database template first.

2. Create a **Non-Repository Template** for MySQL.
  * Click **Create Template** in the **Templates** tab
  * Select **Non-Repository Template** to reveal a list of non-repository templates. Select **MySQL**.
    ![Select Template]({{ site.baseurl }}/images/create-mysql-db-1.png)

  * Name your template, if desired. Click **Create Template**
    ![Name & Create Template]({{ site.baseurl }}/images/create-mysql-db-2.png)

  * Your template should launch and turn **green** when the container has finsihed building.
    ![Template launched]({{ site.baseurl }}/images/create-mysql-db-3.png)

  * Select **Dockerfile** to customize your database. Here you can modify the environment variables to
  change desired usernames, passwords, and database names. Defaults have been set for your convienence.
    ![Dockerfile]({{ site.baseurl }}/images/create-mysql-db-4.png)

  * Once running, you can setup template connections with your repository applications. [Here is how.](/connections/how_to_connect_your_containers.md)

---

### Produce a dump of your development database to upload to Runnable
* Take a dump of your MySQL database. The following command will dump the contents of your database to a `sql` file.
  > Note the use of `-u mysql` and `-p`. This will prompt you for your password, the default being `mysql`.
  You will have to authorize the mysqldump command with whichever custom credentials you have set.

  ```
  $ mysqldump --all-databases -u mysql -p > seed.sql
  ```

* Your seed file should end up looking similar to this, but much longer:
    ```
    $ cat seed.sql
    -- MySQL dump 10.13  Distrib 5.6.30, for Linux (x86_64)
    --
    -- Host: localhost    Database:
    -- ------------------------------------------------------
    -- Server version       5.6.30

    /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
    /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
    /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
    /*!40101 SET NAMES utf8 */;
    /*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
    /*!40103 SET TIME_ZONE='+00:00' */;
    /*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
    /*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
    /*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
    /*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

    --
    -- Current Database: `app`
    --

    CREATE DATABASE /*!32312 IF NOT EXISTS*/ `app` /*!40100 DEFAULT CHARACTER SET latin1 */;

    USE `app`;
    /*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

    /*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
    /*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
    /*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
    /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
    /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
    /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
    /*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

    -- Dump completed on 2016-09-19 23:38:51
    ```

---

### Upload the seed file to your template configuration
1. Bring up the template configuration modal by either clicking on the **cog** next to your database template in the `Containers` pane, or clicking on Dockerfile in the `Templates` pane.
  ![Select Template]({{ site.baseurl }}/images/seed-mysql-db-1.png)
2. Select the `Dockerfile` tab on the top menu within the modal.
  ![Select Dockerfile]({{ site.baseurl }}/images/seed-mysql-db-2.png)
3. Click on the `[+]` button above the file explorer to the left of the Dockerfile editor.
  ![Add File/Folder]({{ site.baseurl }}/images/seed-mysql-db-3.png)
4. Select 'Upload File' to bring up the file selector and choose your dump file (i.e. `seed.sql`).
  ![File Uploaded]({{ site.baseurl }}/images/seed-mysql-db-4.png)


---

### Enable the database seeding functionality
1. Uncomment the `ADD seed.sql /seed/sql` line in the Dockerfile editor to the right.
  ![Uncomment Seed]({{ site.baseurl }}/images/seed-mysql-db-5.png)
    > If you have named your seed something other than `seed.sql`, you should modify the first part of the add command.
    Make sure you leave the second `seed.sql` intact so the init script will work.
2. Now click `Save & Build` to build your container and seed your database.

---

### Next steps
Now that your Template Database container has been 'baked' in with your seed file, subsequent databases that are spawned per branch will immediately start up with the seeded data. If you ever want to update your seed file, just click `Rebuild Without Cache` on the template container to pull a newer seed and cache it into the container image.

Want to seed your database from S3? [Here is how.](/reference/upload_seed_from_s3.md)
