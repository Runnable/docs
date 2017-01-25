Adding Your Branches
==========

Once you have setup your repository template, proceed to the containers page to access the containers running your repository's branches.

NOTE: Runnable automatically stops and removes containers from stale branches. A branch becomes stale if it has had no commit for over a week. Contact support if this is becoming an issue for your team.

## To launch a branch container:

1. Find the template name in the sidebar on Runnable. You can scroll or use the search filter on top to help you.

2. Click on "Add Branch" to reveal a tray. 
	![branches2]({{ site.baseurl }}/images/branches2.png)

3. Click on the branch you'd like to add. Shortly after that, you should see your branch running in your container list.
	![branches3]({{ site.baseurl }}/images/branches3.png)

## Automatically launch containers for new Branches

Runnnable based repository templates are tightly integrated with Github. Runnable listens to all pushes to a repository and can automatically launch containers from branches.

To enable this behavior:

1. Find the template name in the side bar.

2. Click on "Add Branch" to reveal a tray. 
	![branches2]({{ site.baseurl }}/images/branches2.png)

3. Ensure that the the toggle on this view is enabled.
	![branches7]({{ site.baseurl }}/images/branches7.png)

4. Now any commits made by a member of your Github org will launch in Runnable. 

Note: Runnable will only launch a container for your commit only if the commit-author is also a member of your team on Runnable. Check out this artcile for more details.

## To remove a branch container:

1. Find the branch on the sidebar on Runnable.

2. Click on the configuration gear on the right of the branch's name.
	![branches4]({{ site.baseurl }}/images/branches4.png)

3. Click on "Remove Branch" twice to confirm that you'd like to remove the branch.

4. Your branch should now be removed from the sidebar.


