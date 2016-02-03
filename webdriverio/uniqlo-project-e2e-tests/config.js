'use strict';

var config = {
  desiredCapabilities: {
    ios: {
      'browserName': 'safari',
      'appiumVersion': '1.3.7',
      'deviceName': 'iPhone 6 Plus',
      'device-orientation': 'portrait',
      'platformVersion': process.env.SAUCE_USERNAME ? '8.1' : '8.4',
      'platformName': 'iOS'
    },
    android: {
      'browserName': 'Browser',
      'appium-version': '1.3.7',
      'platformName': 'Android',
      'platformVersion': process.env.SAUCE_USERNAME ? '5.0' : '5.0.1',
      'deviceName': process.env.SAUCE_USERNAME ?
        'Android 5.0 Emulator' : 'Nexus 5 API 21 x86'
    }
  }
};

// For running the e2e tests in CircleCI using Sauce Lab's emulators.
var sauceLabsConfig = {
  desiredCapabilities: config.desiredCapabilities[process.env.mobile],
  port: 80,
  host: 'ondemand.saucelabs.com',
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY
};

// For running the e2e tests locally using emulators from Android Studio and
// XCode.
var localConfig = {
  desiredCapabilities: config.desiredCapabilities[process.env.mobile],
  port: 4723
};

exports.getConfig = function () {
  if (process.env.SAUCE_USERNAME) {
    return sauceLabsConfig;
  }

  return localConfig;
};

exports.getContext = function () {
  if (process.env.mobile) {
    return 'WEBVIEW_1';
  }
};

