#!/bin/sh
echo "Installing babel core globally"
npm install -g babel-core
echo "Installing babel register globally"
npm install -g babel-register
echo "Installing gulp globally"
npm install -g gulp-cli
echo "Installing webdriverio"
npm install -g webdriverio
echo "Installing wdio-mocha-allure reporter"
npm install -g wdio-allure-reporter
echo "Installing wdio-mocha-framework"
npm install wdio-mocha-framework
echo "Installing wdio-spec-reporter"
npm install wdio-spec-reporter
#!chmod a+x install-global-npm.sh


