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
        key: '<applitools API key>',
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
            .setValue('#Passwd', '<password>')
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