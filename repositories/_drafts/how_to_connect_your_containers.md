How can containers in my Runnable Sandbox communicate with each other?
======================================================================

Containers in your Runnable Sandbox are connected to the same virtual network, and there is no specific action you need to take to enable inter-container communication. All you need to do is configure your application to use the correct URLs for the different containers in your Sandbox.

There are two different approaches you can take here, depending on your application’s approach to using hostnames for dependent services:

If your application uses **environment variables** to refer to hostnames for dependent services, you can easily configure environment variables in your container to use URLs for your containers in Runnable. From the Configuration page in Runnable:

1. Click on the **Environment Variables** tool for the relevant container
2. Enter the relevant environment variable (e.g. `DB_HOST_NAME=`)
3. Click the **Insert URL** button
4. Select the relevant protocol, URL, and port, and click **Insert URL**
5. Your application will now be able to connect to the relevant other containers in your Runnable Sandbox

If your application uses **hard-coded hostnames**, you can use the Find and Replace tool:

1. Toggle to the Configure section on Runnable
2. Click on the Find and Replace tool for the respective container
3. Click on New string rule to create a rule to find and replace strings in your repository.<br>
  `Use the URLs button to easily fill the replace textbox with the correct URL`

Don’t worry – this tool won’t commit any changes to your GitHub repository.
