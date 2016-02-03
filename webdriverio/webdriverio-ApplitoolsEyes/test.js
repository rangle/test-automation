var webdrivercss = require('webdrivercss');
var webdriverio = require('webdriverio');
var assert = require('assert');

// create a WebdriverIO instance
var client = webdriverio.remote({
    desiredCapabilities: {
        browserName: 'firefox'
    }
});

describe('my website should always look the same', function() {
	this.timeout(60000);
	before(function() {
		client.init()
		webdrivercss.init(client, {
			// key: 'm7koXQC0Pzt3Lg4gU4NgisRJsEAf9zwuLA3102IK1qIis110',
            key: 'NhBEEo1frQRbYyUGLZmeazh2s107RAkBMmt6n6ylcsw108w110',
		    // screenshotRoot: 'my-shots',
		    // failedComparisonsRoot: 'diffs',
		    // misMatchTolerance: 0.75,
		    screenWidth: [960]  //320,480,640,1024
		});
	});

    it('header should look the same', function(done) {
        client
            .url('http://gmail.com')
            .waitForExist('#next')
            .webdrivercss('gmail-01', {
            	name: 'test1-signinpage'
            })
            .setValue('#Email', 'haha.rangle@gmail.com')
            .click('#next')
            .waitForExist('#signIn')
            .webdrivercss('gmail-02', {
              name: 'test2-passwordpage'
            })
            .setValue('#Passwd', 'Knight999')
            .click('#signIn')
            .waitForExist('#:3f')
            .waitForExist('#gbqfb')
            .webdrivercss('gmail-03', {
              name: 'test3-contentpage'
            })
            .end()
            .call(done);
    });
});