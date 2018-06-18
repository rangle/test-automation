/**
 * Created by jacky on 2015-01-24.
 */

describe('E2E: L1 main Page Tests:', function () {
    var chai = require('chai'),
        assert = chai.assert,
        webdriverio = require('webdriverio');
    this.timeout(99999999);
    var client = {};
    // var config = require('./config.js');
    // var uuid = require('node-uuid');

    beforeEach(function (done) {
        client = webdriverio.remote({
            desiredCapabilities: {
                'browserName': 'Browser',
                'appium-version': '1.3.7',
                'platformName': 'Android',
                'platformVersion': '5.0.1',
                'deviceName': 'Nexus 5 API 21 x86'
                // 'app': '/build/onist.2.0.8.ipa',    //'/build/onist.app',
                // 'appPackage': 'com.onist.app',
                // 'appActivity': 'com.onist.app.Main',
            },
            port: 4723
        });
        client.init().url('http://uniqlo-ionic.herokuapp.com/#/').pause(500).call(done);
        client = client.context('WEBVIEW');
    });

    afterEach(function (done) {
        client.pause(500).end(done);
    });

    it('#1 test search button', function (done) {
        client
            //.context('WEBVIEW')
            .pause(1000)
            .click('#qa-search-button')
            .waitForExist('#qa-menu-button', 1000)
            .click('#qa-menu-button')
            .call(done);
    });

    xit('#2 test gender button', function (done) {
        client
            //.context('WEBVIEW')
            .pause(1000)
            .touchScroll('button[class="uni-department-link--women button"]')
            .click('button[class="uni-department-link--women button"]')
            .pause(500)
            .click('#qa-logo-button')
            .call(done);
    });

    xit('#3 test uni-icon button', function (done) {
        client
            //.context('WEBVIEW')
            .pause(1000)
            .touchScroll('#qa-uni-icon-link__extra-size')
            .click('#qa-uni-icon-link__extra-size')
            .pause(500)
            .click('#qa-logo-button')
            .call(done);
    });

});
