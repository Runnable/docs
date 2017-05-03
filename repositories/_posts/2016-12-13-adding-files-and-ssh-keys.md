---
title: Adding Files and SSH Keys
short: Adding Files and SSH Keys
category: repositories
order: 8
---

Many repositories depend on external resources like SSH keys, configuration files, or other repositories. This guide will show you how to add these assets to Runnable so your environments can build successfully.

If your repository has files with hard-coded values, we'll also show you how to add replacement files with modified values for use in your environments.

---

## Adding a File

First, open the configuration for your repository by clicking the gear icon next to its name in the Containers view.

![Configure Service]({{ site.baseurl }}/images/dockerfiles_configure.png)

Go to the **Files & SSH Keys** tool. Click on the **Add…** button and select whether you want to add a file, a repository, or an SSH Key. In this guide, we'll show examples for adding files. Adding repositories and SSH keys works in a similar way.

![Add File]({{ site.baseurl }}/images/dockerfiles_file_add.png)

Select a file to upload from your local system and enter its destination path, relative to the root directory of the repository. If you’re replacing a file in your repository, make sure you give your new file the same name and path.

![File Details]({{ site.baseurl }}/images/dockerfiles_file_details.png)

You can also add scripts to run immediately after a file is added during the build. For example, you may want to modify a file's permissions, or [seed a database]({{ site.baseurl }}/databases-datastores/databases/database-datastore/how-to-seed-your-database-from-a-dump-file) after adding a seed file.

When you're done, click the **Add File** button to continue.

---

## File Ordering

Files are listed in the order they're added during the build. If your files need to be added in a particular sequence, you can change the order by dragging the ☰ symbol next to a file's name.

![File Ordering]({{ site.baseurl }}/images/dockerfiles_file_ordering.png)

---

## Saving Your Changes

Click **Save & Build** when you're done adding files. Now whenever a container builds for this repository, your files will be added at their destination paths, and any scripts you added will be run.
