As we work on our ideas in our branches on Github, it is natural to want to run them in isolated environments. This is especially useful if your branch container needs its own database, datastore, back-end container, front-end container, etc.

Runnable makes launching branches in Isolated environments easy:

1. Find the branch on the sidebar on Runnable. ou can scroll or use the search filter on top to help you.

2. Click on the configuration gear on the right of the branch's name.

3. Click on "Isolate Branch..." to reveal the Isolation modal.
	![isolate1]({{ site.baseurl }}/images/isolate1.png)

4. Select the templates you'd like to launch containers from. These containers will launch in an isolated environment for your branch. For repository tempalates, you can choose a sepcific branch as well. In this case we are deciding to Isolate our API branch with a container from web-server's master branch, a container from the MySQL template and one from the Redis template.
	![isolate2]({{ site.baseurl }}/images/isolate2.png)

5. Click on "Isolate Branch" to confirm the setup.

6. You should now see your branch running with its own isolated environment on the sidebar. 
	![isolate3]({{ site.baseurl }}/images/isolate3.png)

Runnable's DNS system will automatically map your connections to the Isolated containers. For this to work, ensure that you have connected to the containers using the Template URL.