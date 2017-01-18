---
title: Adding Additional Files
category: repositories
step: 5
description: How Docker helps speed up development and future proof the deployment process for your PHP applications.
---

Every time a container is rebuilt, all dirty files and changes are reverted to the cached state before the Dockerfile CMD.
If you have files that you want to persist for every build of a container, you can use the **Files & SSH Keys** tool to add them.

#### Here's how:

1. Go to the _Configure_ page and find the desired template configuration.
* Click on the **Files & SSH Keys** tool.
  ![Files & SSH Keys](/images/add_files_start.png)
* Click on the **Add..** dropdown and then select **File**.
* Click on **Choose** to locate the file you want to add. Then specify the desired **Destination** path for the file you will be adding.
    > You can also add a script that will be executed after adding the file during the container build process.
   _For example:_ **chmod +x file.sh**
* Click on **Add File** to complete the process of adding the file to your template configuration.
* Click **Save & Build** to build the template with the file you have just uploaded.

Files that you upload in the template configuration will be available to all branches that inherit the template configuration.

> It is important to note that all the files are listed in the order they are added and executed on the build container. You can change this order using the *hamburger* (3 horizontal lines) symbol next to the file name.
  ![File Order 1](/images/add_files_order_1.png)
  ![File Order 2](/images/add_files_order_2.png)
  ![File Order 3](/images/add_files_order_3.png)
