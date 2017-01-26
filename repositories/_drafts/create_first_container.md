# How to create your first container

This tutorial will guide you through the steps to create your first container on Runnable. Before starting, we will make a few assumtions.
Any text that is **bold** will represent a button on screen and any text in **_italics_** will correspond to important UI labels. Let's begin!

1. From the **Configure** page, click on the **Add Container** button.

  ![Configuration -> Add Container]({{ site.baseurl }}/images/create-container-add.png)

2. Let’s start with a repository. These will stay in sync with your repository on Github. 
  Choose the repository you want to run.

  ![Select Repository]({{ site.baseurl }}/images/create-container-select-repo.png)
  > You can use the search field to filter your results. 

3. Now you must _choose your configuration_. Our assumption in this step is that we do not have an existing Dockerfile to build from.

  ![Choose Container Configuration]({{ site.baseurl }}/images/create-container-choose-config.png)

4. Enter a name for your container, if desired.

  ![Name Container]({{ site.baseurl }}/images/create-container-name.png)

5. Next, you’ll be able to select your app’s **_Stack Type_**, **_Version_** and **_Branch_**. 

  Go ahead and choose your **_Stack Type_**. 
  ![Stack Type]({{ site.baseurl }}/images/create-container-select-version.png)
  > Make sure you choose the branch that corresponds to your team’s main integration branch (**_master_** or **_develop_** for example). 
  
  And _select the version_ you want to use.
  ![Select Version]({{ site.baseurl }}/images/create-container-select-version-detail.png)

6. On the next step, you can specify additional **_Packages_**, **_Build Commands_**, and the **_Container CMD_**. 

  **_Packages_** allows you to install any tools, libraries, or frameworks you need. Add multiple packages by separating them with spaces. You can specify packages that are listed in the Ubuntu Aptitude library.

  **_Build Commands_** are commands that are needed to build and prepare our app (Bash scripts are supported!). These commands are run to create a new container on every push to the branch. For Node.js, this is where we’ll specify `npm install`.

  ![Commands & Packages]({{ site.baseurl }}/images/create-container-cmd-and-pkg.png)

  **_Container CMD_** is where the invocation command for our app is specified. There can only be one CMD instruction in a Dockerfile, so you may need to chain tasks if multiple processes are necessary. Many Node.js apps, use simply `npm start` as their Container CMD.

  ![Container CMD]({{ site.baseurl }}/images/create-container-cmd.png)
  > Important: the container will stop running when this command exits. Make sure the process you choose will stay alive.

7. Click **Next** to see that your container is ready for its first build! 🎉 

  ![Ready to Build]({{ site.baseurl }}/images/create-container-ready-to-build.png)

#### Additional configuration options are revealed to customize your container further.
The following panes allow optional configuration for your application. [Skip]()

* Security
  This pane allows you to control external access to your Runnable containers' dynamic URLs.
  ![Security]({{ site.baseurl }}/images/create-container-security.png)

* Exposed Ports
  Since your app runs on port 3000, we'll click on the Exposed Ports tool and expose it.
  ![Exposed Ports]({{ site.baseurl }}/images/create-container-ports.png)

* Environment Variables
  This pane allows you to add custom environment variables that may be need by your application.
  ![Environment Variables]({{ site.baseurl }}/images/create-container-env-vars.png)

* Files & SSH Keys
  This pane allows you to add additional files, repositories, and SSH keys to your container.
  Please click [here]() to find out more.
  ![Files & SSH Keys]({{ site.baseurl }}/images/create-container-files-and-ssh.png)

* Find & Replace
  This pane allows you to use our _Find & Replace_ feature to make slight modifications to your code when running on Runnable.
  Please click [here]() to find out more.
  ![Find & Replace]({{ site.baseurl }}/images/create-container-find-and-replace.png)

* Dockerfile
  This pane will allow you to go into _Dockerfile_ mode. This is for advanced users, to find out more, [click here]().
  ![Dockerfile]({{ site.baseurl }}/images/create-container-dockerfile.png)

Save & Build to save our changes and trigger your first build. 

If everything went well, your build will complete successfully. If it didn't, look at the error in the Build Logs for more details, and make the necessary configuration adjustments (It's common to make changes to the Build Commands). Anytime you run across an error that you need help with, we have developers ready to help in real-time. Click on the chat bubble on the bottom-left!  
