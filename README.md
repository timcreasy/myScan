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
###Project Configuration
myScan utilizes Firebase for realtime data storage, and Amazon's Product Advertising API for product information.  For your project to run properly, you will need to sign up for both of these services to configure your application.
#####Firebase
Login to [Firebase](https://www.firebase.com/login/ "Firebase") and create a new Firebase application.  Navigate to the Firebase App Dashboard, and select Login & Auth.  Ensure that "Enable Email & Password Authentication" is selected (this is where you will create users for you application).
