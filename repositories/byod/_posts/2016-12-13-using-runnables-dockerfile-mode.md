---
title: Using Runnable's Dockerfile Mode
shortTitle: Runnable Dockerfile Mode
step: 2
tags:
- dockerfile
description: How Docker helps speed up development and future proof the deployment process for your PHP applications.
---

This guide will teach you how to use Runnable's Dockerfile mode. Unlike Simple Mode, Dockerfile mode lets you store your configuration in a Dockerfile template.

## Understanding Runnable's Dockerfile Build Context

To use your Dockerfile, you need to refactor it to match the directory structure of Runnable’s build folder.  
![Build Folder](/images/runnable_build_context_file_explorer.png)

The Dockerfile is on the same level as any additional files and folders—this includes your repository.  
Make sure you format your Dockerfile to add the repository:
![Repo Path](/images/runnable_build_context_path.png)

Any other additional files/folders/repositories you need can be added by clicking [+] button in file explorer.  
![File Explorer](/images/runnable_build_context_file_explorer.png)

For example, lets say you added a new file called “testing.txt” to your build folder.  
![Add Dialog](/images/runnable_build_context_add_file.png)

To add “testing.txt” to your container, you have to format your Dockerfile to have the following lines:  
![Example](/images/runnable_build_context_example.png)

If you need help in setting up your Dockerfile, please contact support. We are here to help!
