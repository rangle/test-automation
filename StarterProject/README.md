
****************************************************************************************************************

STARTER PROJECT


This starter project is used to give you the user a short introduction into webdriver.io and to help you to get up and running as soon as possible.

This starter project contains a suite of tests that accomplishes the following actions:
 - Navigate to http://www.clubmonaco.ca/
 - Check if the email modal exists
 - Close the email modal
 - Search for a prouct with the search
 - Ensure that related product flyout is present
 - Navigate to a product page
 - View the assets in the product page

****************************************************************************************************************

PREREQUISITES


 Encountered a problem with reinstallig webdriver.io with npm install so this workaround of installing global packages instead.
 Install all prerequisites with ./install-global-npm.sh 

 
This project depends on the user having installed npm version 5.7.1 go to https://www.npmjs.com/ if you need to more information 

and just in case you dont have node v9.3.0 installed, please walk over to https://nodejs.org/en/ and install it first


In addition to the other prerequisites, this project also depends on ChromeDriver and on FirefoxDriver.
Please head over to https://sites.google.com/a/chromium.org/chromedriver/ to install the ChromeDriver on your system

The FirefoxDriver can be found on https://github.com/SeleniumHQ/selenium/wiki/FirefoxDriver

Please add the two drivers to the path variable on the machine.
Head over to https://stackoverflow.com/questions/7703041/editing-path-variable-on-mac in case you need some assistance on completing this task.

****************************************************************************************************************

INSTALLING 

Run npm install from the start of the root folder of this project 
npm install


****************************************************************************************************************
RUNNING TESTS
Start the Selenoum Server in a new tab from the root of this project directory with the command  : 

selenium-standalone start


Navigate to the root of the current project and type : 

wdio


****************************************************************************************************************

TROUBLE SHOOTING


If you start the tests and see :  connect ECONNREFUSED 127.0.0.1:4444 it means that selenium server is not running.


















