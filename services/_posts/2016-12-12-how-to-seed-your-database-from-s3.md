---
title: How to seed your database from S3
category: services
step: 6
tags:
- services
- databases
- postgres
excerpt: How to seed your database from S3
description: How to seed your database from S3
---

Instead of uploading a seed directly through the Runnable UI, we can add a script to pull your seed 
from an external location. In this case, we will pull the seed from an S3 bucket.

1. Create a script using the language of your choice to pull the seed from your S3 bucket. Or, just 
use the Bash script we have provided below (remember to replace your aws key/secret/region/bucket). 
This script will get the latest dump from an S3 bucket, as it sorts by the timestamp given by S3.

    ```bash
    #!/bin/bash]
    # getS3Dump.sh

    export AWS_ACCESS_KEY_ID=<your_aws_access_key_here>
    export AWS_SECRET_ACCESS_KEY=<your_aws_secret_key_here>
    export AWS_DEFAULT_REGION=<your_aws_region_here>
    export AWS_BUCKET_NAME=<your_aws_bucket_name_here>

    function installAWS {
      apt-get update && apt-get install -y unzip
      curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
      unzip awscli-bundle.zip
      ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
    }

    function getLatestDump {
      aws s3 ls s3://$AWS_BUCKET_NAME/ | sort -k 1 | tail -n 1 | awk '{print $4}'
    }

    function getDumpFromS3 {
      aws s3 cp s3://$AWS_BUCKET_NAME/`getLatestDump` /seed.dump
    }

    installAWS
    getDumpFromS3
    ``` 

2. Add the script to your Runnable documentation using the `[+]` button under the Dockerfile mode.
3. Add the following lines to your Dockerfile:

    ```
    ADD getS3Dump.sh /getS3Dump.sh
    RUN chmod +x /getS3Dump.sh
    RUN ./getS3Dump.sh
    ```  

4. Your Dockerfile should look something like this:

    ```
    # Change version to desired: (i.e. 9.3, 9.4, 9.5)
    FROM runnable/postgres:9.4

    # Set recommended environment variables
    # ENV POSTGRES_USER postgres
    # ENV POSTGRES_DB postgres

    # Uncomment the following ADD line to enable seeding the PostgreSQL DB
    # Make sure to upload a pg_dump file (i.e. pg_dump -Fc db_name -f seed.dump)
    # ADD seed.dump /seed.dump

    ADD getS3Dump.sh /getS3Dump.sh
    RUN chmod +x /getS3Dump.sh
    RUN ./getS3Dump.sh

    # Run the initialization script
    RUN gosu postgres /init.sh \
      # Uncomment the following line for a custom pg_restore command. Edit, as needed
      # "pg_restore --no-acl --no-owner -c -v -d $POSTGRES_DB /seed.dump"
    ```  

5.  Now you can click `Save & Build` to see your container build, pull your seed from S3, and apply the restore command.
