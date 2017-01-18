---
title: How to clone your local database for use on Runnable
category: services
step: 4
tags:
- services
- databases
- postgres
- mysql
description: How to clone your local database for use on Runnable
---

* [MySQL](#mysql)
* [PostgreSQL](#postgres)

## MySQL
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

## PostgreSQL
* Take a dump of your PostgreSQL database. The following command will dump the contents of your database named `postgres` to a `dump` file.
  > Note the use of `-U postgres`, you will need to authorize the pg_dump command with whichever custom credentials you have set.

  ```
  $ pg_dump -U postgres -Fc postgres -f seed.dump
  ```

* Your dump file should end up looking similar to this, but much longer:
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
