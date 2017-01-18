# My build is failing because of "No Such Key" or "Host key verification failed". What do I do?

If you are seeing these errors, your configuration is probably trying to use other repositories that Runnable does not have access to.
```
Command failed: Host key verification failed.
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

To give containers within Runnable access to those dependency repositories, we just need to generate and add the right ssh key to the repository’s configuration.
 
## Generate SSH Key {#generateSSH}

SSH keys come in a pair, private and public. To generate a new ssh key pair, open up a terminal session on a Linux or Mac machine you trust. If you already have an SSH key that you would like to use, [skip this step](#addSSHGitHub).

1. Navigate to the ~/.ssh/ directory. (Or create it, if it doesn't exist)
  
  `$ mkdir -p ~/.ssh/ && cd ~/.ssh`

2. Generate the SSH key
  
  `$ ssh-keygen -t rsa -b 4096 -C "your@email.com**.`

3. You will be prompted to provide a location for the generated key. Press enter if you are happy with the default location. You can change the location if you want to, but make sure that you choose a safe location.

  `Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Hit Enter]`

4. You will now be prompted to enter a passphrase. You have to press enter to signal that you don’t want to add a passphrase for this key. It's important to **not** set a paraphrase for the key to work with Runnable.

  ```
  Enter passphrase (empty for no passphrase): [Hit Enter]
  Enter same passphrase again: [Hit Enter]
  ```

You have now generated an ssh key pair. In our case, the private key is called  "id_rsa" and the public key is "id_rsa.pub".

## Add Public SSH key to GitHub {#addSSHGitHub}

Now, you are ready to upload the public key to your Github.com user account. If you already have an SSH key added to GitHub that you would like to use, [skip this step](#addSSHRunnable).

1. First copy the public key (*id_rsa.pub* in our case) to your clipboard.

  `$ pbcopy < ~/.ssh/id_rsa.pub`

2. Next, log in to your account on Github.com.

3. Click on your username on the top right to reveal a tray. On the tray, click on **Settings**.  

4. Next, click on **SSH Keys** settings under **Personal Settings**.

5. Click on **New SSH Key** button on the top right. 

6. Give your new ssh-key a title with which you can easily associate Runnable with.

7. Paste the public key into the text area labeled **Key**

8. Click on **Add SSH Key**.

## Add Private SSH key to Runnable {#addSSHRunnable}

Now, we move on to adding the private key into our repository configuration in Runnable.

1. Copy the SSH private key
  > Note the lack of *.pub* file extension

  `$ pbcopy < ~/.ssh/id_rsa`

2. Navigate to the **Configure** page.
3. Locate the repository that is failing to build.
4. Click on the **Files & SSH Keys** tool.
5. Click on the **Add…** dropdown.
6. Select **SSH Key**.
7. A modal will open with a label for "Title" and a text area titled "Key".
8. Give your key a title that you can identify with.
9. Paste in the private key that you copied in step 19 into the text area.
10. Click "Save & Rebuild** and your failing build step should now complete successfully!

As always, please feel to reach out to us using the in-app chat if you are unable to resolve your build errors. 
