Runnable URLS
=============


All containers on Runnable launch from templates. As a result, a Runnable container has 2 URLs: 

### Template URL

This is the URL of the template the container is launched from. The URL is derived from the name of the template. So for example, if your container is launched from the ```MongoDB``` template and your org name is ```AcmeCorp```, the Template URL for this container is going to be ```mongodb-staging-AcmeCorp.runnableapp.com```.

Use the Template URL when trying to connect 2 Runnable templates together. This will enable Runnable to automatically map your connections to the containers running in Isolation.

### Web URL

This is a unique URL that is generated for that instance. This is the the URL that appears on the containers page and your Github PR page.

Use the Web URL when trying to access your container's output or sharing with a teammate for review.



