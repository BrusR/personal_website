# Description
This project was developed from a minimal setup with vite, tailwind and react. It uses node 20.5.0.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

First, install all the dependencies:

```
npm install
```

To run in development mode:

```
npm run dev
```

To produce prod files ready to deploy:

```
npm run build
```

# Cdk initialization
In this tutorial, it is assumed that you have a succesfull installation of the 
CDK and the AWS CLI tool. Moreover you should have access to an AWS account and
have your credentials already set.

You create a new AWS CDK project by invoking "cdk init" in an empty directory.
```
mkdir cdk
cd cdk
cdk init app --language python
```

Activate the virtual environment if not already activated.
```
source .venv/bin/activate
```

Then install the requirements.
```
python -m pip install -r requirements.txt
```

Bootstrap the CDK project just the first time. This creates the necessary
resources to deploy an application.
```
cdk bootstrap
```

To list all available cdk stacks to deploy.
```
cdk list
```

To synthesize the application and get cloudformation output files.
```
cdk synthesize
```

To deploy to the cloud 
```
cdk deploy
```

# Cloud arquitecture
The cdk project deploys a single page application without a backend.The main AWS 
services it uses are S3 to store the files, Cloudfront to distribute the files and 
Cloudformation to build the stack. 

![alt text](https://d1nm758bma1w92.cloudfront.net/github_images/SPA_architecture.png)
