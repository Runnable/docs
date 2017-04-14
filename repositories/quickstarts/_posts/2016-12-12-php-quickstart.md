---
title: PHP Quickstart Guide
shortTitle: PHP
step: 3
tags:
- quickstarts
- php
description: How to setup your multi-tier PHP application.
---

In order to get a Laravel app running, here are the following steps you need to make sure you do:

---

#### Setup basic configuration
1. Add your repository
2. Select PHP stack and choose the suggested version.
3. Follow the suggested recommendations for build and start commands. See below for slight modifications.

---

#### Set proper permissions for your application directory
  1. Add the following lines to the **Build Commands** section under *Commands & Packages*
  `$ chgrp -R www-data /var/www/html/`
  `$ chmod -R 775 /var/www/html/storage`

  ---

#### Add your *laravel.conf* apache2 configuration to */etc/apache2/sites-available*.
1. You can do this by clicking on *Files & SSH Keys* and clicking the *Add* dropdown then *File*. This will bring up the **Upload File** modal.

2. Select your configuration file (*laravel.conf*). It would look something like this:

```xml
<VirtualHost *:80>
  ServerName localhost

  ServerAdmin webmaster@localhost
  DocumentRoot /var/www/html/public

  <Directory /var/www/html/>
      AllowOverride All
  </Directory>

  ErrorLog /var/log/apache2/error.log
  CustomLog /var/log/apache2/access.log combined
</VirtualHost>
```

3. Enter `/etc/apache2/sites-available` under Destination

4. Add the following scripts to Scripts
  ```
  $ a2ensite laravel.conf
  $ a2enmod rewrite
  ```

  ---

#### Set up your Laravel environment
Add the following lines to the **Build Commands** section under *Commands & Packages*

1. Copy your *.env.sample* to *.env* in your project directory.
```$ cp .env.example .env```

2. Generate your application key.
```$ php artisan key:generate```

After your container builds, you should be able to click the button to the right of the URL to see your app. Then, you can start creating MySQL and Redis containers in Runnable and link them in the Environment Variables section.

> You may need to remove the overrides in the .env file in your application directory.
