---
title: Using Runnable’s Dockerfile Mode
short: Runnable Dockerfile Mode
category: repositories
order: 5
---

If you need to perform more custom build commands or specific configuration, Runnable offers a Dockerfile mode for more Docker-mature users. This allows you to create and modify your configuration in a Dockerfile specific for your Runnable service. This guide will teach you how to use Runnable's Dockerfile mode. Unlike Simple Mode, Dockerfile mode lets you store your configuration in a Dockerfile template.

---

## Understanding Runnable's Dockerfile Build Context

To use your Dockerfile, you need to refactor it to match the directory structure of Runnable’s build folder.
![Build Folder]({{ site.baseurl }}/images/runnable_build_context_file_explorer.png)

The Dockerfile is on the same level as any additional files and folders—this includes your repository.
Make sure you format your Dockerfile to add the repository:
![Repo Path]({{ site.baseurl }}/images/runnable_build_context_path.png)

Any other additional files/folders/repositories you need can be added by clicking [+] button in file explorer.
![File Explorer]({{ site.baseurl }}/images/runnable_build_context_file_explorer.png)

For example, lets say you added a new file called “testing.txt” to your build folder.
![Add Dialog]({{ site.baseurl }}/images/runnable_build_context_add_file.png)

To add “testing.txt” to your container, you have to format your Dockerfile to have the following lines:
![Example]({{ site.baseurl }}/images/runnable_build_context_example.png)

If you need help in setting up your Dockerfile, please contact support. We are here to help!
