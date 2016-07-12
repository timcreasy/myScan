myScan
=====================

A mobile book scanning utility created using the Ionic framework and ngCordova, with Firebase as a data backend.

###Inital Setup
myScan requires several different dependencies.  To setup myScan on your machine, begin by cloning this repository into your desired location.  To setup all dependencies:  
```bash
$ cd path/to/myScan
$ bower install
$ npm install
```

myScan utilizes Firebase for realtime data storage, and Amazon's Product Advertising API for product information.  For your project to run properly, you will need to sign up for both of these services to configure your application.
####Firebase
Login to [Firebase](https://www.firebase.com/login/ "Firebase") and create a new Firebase application.  Navigate to the Firebase App Dashboard, and select Login & Auth.  Ensure that "Enable Email & Password Authentication" is selected (this is where you will create users for you application).
####Amazon
######AWS
[Sign up](https://aws.amazon.com/free/ "AWS") for an AWS account.  An AWS account is needed for any calls to Amazon.  Follow the steps listed [here](http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSGettingStartedGuide/AWSCredentials.html) for information on how to obtain your public and secret access keys.  Take note of these keys, and store in a safe location, these should never be distributed.
######Amazon Associates
Along with your AWS account, it is necessary to register as an Amazon Associate, for any calls to the Amazon Product Advertising API.  You can register as an Amazon Associate [here](https://affiliate-program.amazon.com/).  After registering and login, take note of your Affiliate ID, which follows the format of xxxx-20.

###Project Configuration
After signing up for all necessary services, you must include this information in your project as follows:
#####myScan/www/services/firebaseReference.js
On line 3, replace "YOUR_FIREBASE_REFERENCE" with the URL to your Firebase application:
```javascript
var firebaseReference = new Firebase("YOUR_FIREBASE_REFERENCE");
```
#####myScan/www/services/amazonService.js
On lines 28-30, replace each of the placeholders with your relevant key/Associate ID:
```javascript
var PrivateKey = "YOUR_PRIVATE_KEY";
var PublicKey = "YOUR_PUBLIC_KEY";
var AssociateTag = "YOUR_ASSOCIATE_TAG";
```
