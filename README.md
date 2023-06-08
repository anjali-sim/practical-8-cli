# Practical-8 using AWS CLI

- In this, I have deployed my React Practical-2 using AWS CLI.

### What is AWS CLI?
The AWS Command Line Interface (AWS CLI) is a unified tool to manage your AWS services. With just one tool to download and configure, you can control multiple AWS services from the command line and automate them through scripts. AWS CLI is a tool that pulls all the AWS services together in one central console, giving you easy control of multiple AWS services with a single tool.

## :sparkles: Steps to deploy react application using AWS CLI
1. First of all, Install AWS CLI from your terminal using the command:
```
sudo apt update
```
```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" unzip awscliv2.zip
```

 2. Then to check whether the AWS CLI is installed or not check it with the following command:
 ```
 aws --version
 ```
 ![Screenshot from 2023-06-08 12-25-29](https://github.com/anjali-sim/practical-8-cli/assets/122269010/3aea825c-1e3f-45c0-8d6f-da219ce2a401)

 
 3. Then we need to configure AWS CLI with our AWS account credentials, so for it use the command:
 ```
 aws configure
 ```
And provide all the details like Access KeyID, Secret Access Key, Default Region Name and Default output format as shown below:
 ![Screenshot from 2023-06-08 12-09-13](https://github.com/anjali-sim/practical-8-cli/assets/122269010/d8b0492d-3416-4a08-877e-5d8009637d45)

4. To get the list of all the S3 buckets present in our AWS account use the command specified below:
```
aws s3 ls
```
![Screenshot from 2023-06-08 12-11-27](https://github.com/anjali-sim/practical-8-cli/assets/122269010/650bc893-6c99-45ee-92f4-42c8a283d9a0)

5. Create a bucket in S3 and enable static website hosting.
6. Then upload the files from your React app's build directory to the S3 bucket using the following command:
```
aws s3 sync /path-to-your-build-folder s3://your-bucket-name
```
![Screenshot from 2023-06-08 12-15-24](https://github.com/anjali-sim/practical-8-cli/assets/122269010/1c778bd0-b1d3-4854-9584-91237a6b6380)

7. By default, the uploaded files in the S3 bucket are private. To make them accessible to the public, run the following command:
```
aws s3 cp s3://your-bucket-name s3://your-bucket-name --recursive --acl public-read
```
![Screenshot from 2023-06-08 12-16-32](https://github.com/anjali-sim/practical-8-cli/assets/122269010/e2a78c09-19d8-4fc3-82ad-f8cd88853c91)

8. Then we need to configure the bucket policies, so create a policy.json file in the root directory of your project and include the following configurations.

![Screenshot from 2023-06-08 12-20-03](https://github.com/anjali-sim/practical-8-cli/assets/122269010/cd26846e-10fa-4f49-8a8a-323d12648495)
 
9. To add the bucket policies to our specific bucket, use the following command:
```
aws s3api put-bucket-policy --bucket your-bucket-name --policy file://policy.json
```
 ![Screenshot from 2023-06-08 12-19-38](https://github.com/anjali-sim/practical-8-cli/assets/122269010/f86982fa-88cf-46ea-8207-12dab3452894)

10. Then go to S3 bucket in AWS, and the files are uploaded, the bucket policy is added in the permissions, etc. And in the Properties at the bottom, you will find the link of the deployed app.
![Screenshot from 2023-06-08 12-29-48](https://github.com/anjali-sim/practical-8-cli/assets/122269010/8618debd-1874-44b8-b939-305e69ffa550)

![Screenshot from 2023-06-08 13-27-27](https://github.com/anjali-sim/practical-8-cli/assets/122269010/adb2bb29-2ee5-4aa4-b2d4-1c0203ed4588)
![Screenshot from 2023-06-08 13-25-59](https://github.com/anjali-sim/practical-8-cli/assets/122269010/ecabbcfc-e39f-49b9-a527-4cf49904035a)

## :rocket: Deployed Link
http://practical-8-cli.s3-website.ap-south-1.amazonaws.com/
