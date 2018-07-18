/**
 * Created by jacky on 2015-01-24.
 */
'use strict';
var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect,
    webdriverio = require('webdriverio');
var client = {};
var l1PageElements = require('./L1PageElements');

describe('E2E: Sign Up Page Test:', function () {

    this.timeout(99999999);
    beforeEach(function (done) {
        client = webdriverio.remote({
            desiredCapabilities: {
                'browserName': 'safari',
                'appiumVersion': '1.3.7',
                'deviceName': 'iPhone 6 Plus',
                'device-orientation': 'portrait',
                'platformVersion': '8.3',
                'platformName': 'iOS'
            },
            port: 4723
        });
        client.init().url('http://uniqlo-ionic.herokuapp.com/#/').pause(500).call(done);
        //if (process.env.MOBILE) {
        //    client = client.context('WEBVIEW_1');
        //}
    });

    afterEach(function (done) {
        client.pause(500).end(done);
    });

    it('#1 test navigation header bar', function () {
        return client
            .context('WEBVIEW_1')
            .waitForVisible(l1PageElements.navBar.cartButton, 1000)
            .waitForVisible(l1PageElements.navBar.favoritesButton, 1000)
            .waitForVisible(l1PageElements.navBar.logoButton, 1000)
            .waitForVisible(l1PageElements.navBar.menuButton, 1000)
            .waitForVisible(l1PageElements.navBar.searchButton, 1000)
            .click(l1PageElements.navBar.searchButton)
            .waitForVisible(l1PageElements.navBar.searchFormInput)
            .elementActive(function (error, response) {
                client.elementIdAttribute(response.value.ELEMENT, 'id', function (error, response) {
                    console.log('the active element name is: ', response.value);
                });
            })
            .click(l1PageElements.navBar.menuButton)
            .getAttribute(l1PageElements.navBar.searchForm, 'class', function (err, attr) {
                expect(attr).to.contain('ng-hide');
            });
    });


    it('#2 test mutli-link image', function () {
        return client
            .context('WEBVIEW_1')
            .click(l1PageElements.slideShow.multiLinkImage)
            .waitForText(l1PageElements.slideShow.multiLinkTableTitle, 'now on sale', 1000)
            .getText(l1PageElements.slideShow.multiLinkOptions, function (err, options) {
                expect(options).to.have.length.above(1);
            })
            .click(l1PageElements.slideShow.multiLinkCloseButton)
            .click(l1PageElements.slideShow.multiLinkImage)
            .elements(l1PageElements.slideShow.multiLinkOptions, function (err, options) {
                client.elementIdClick(options.value[0].ELEMENT);
            })
            .waitForVisible(l1PageElements.navBar.logoButton, 1000)
            .click(l1PageElements.navBar.logoButton);
    });

    it('#3 test slide show', function () {
        return client
            .context('WEBVIEW_1')
            .isVisible(l1PageElements.slideShow.leftArrow, function (err, leftArrowButton) {
                assert(leftArrowButton === false);
            })
            .isVisible(l1PageElements.slideShow.rightArrow, function (err, rightArrowButton) {
                expect(rightArrowButton).to.be.true;
            })
            .elements(l1PageElements.slideShow.dots, function (err, dots) {
                var num = dots.value.length - 1;
                client.elementIdClick(dots.value[num].ELEMENT)
                    .pause(1000)
                    .elementIdAttribute(dots.value[num].ELEMENT, 'class', function (err, className) {
                        assert.include(className.value, 'uni-carousel-indicator__dot--active');
                    });
            })
            .isVisible(l1PageElements.slideShow.leftArrow, function (err, leftArrowButton) {
                assert(leftArrowButton === true);
            })
            .isVisible(l1PageElements.slideShow.rightArrow, function (err, rightArrowButton) {
                expect(rightArrowButton).to.be.false;
            });
        //need swipe function
    });

    it('#4 test gender bar', function () {
        return client
            .context('WEBVIEW_1')
            .isVisible(l1PageElements.genderBar.womenButton)
            .isVisible(l1PageElements.genderBar.menButton)
            .isVisible(l1PageElements.genderBar.kidsButton)
            .isVisible(l1PageElements.genderBar.babyButton)
            .click(l1PageElements.genderBar.womenButton)
            .url(function(err, url){
                expect(url.value).to.contain('/store/feature_mb/uq/list_s/women');
            })
            .click(l1PageElements.navBar.logoButton)
            .waitForVisible(l1PageElements.genderBar.menButton, 1000)
            .click(l1PageElements.genderBar.menButton)
            .url(function(err, url){
                expect(url.value).to.contain('/store/feature_mb/uq/list_s/men');
            })
            .click(l1PageElements.navBar.logoButton)
            .waitForVisible(l1PageElements.genderBar.kidsButton, 1000)
            .click(l1PageElements.genderBar.kidsButton)
            .url(function(err, url){
                expect(url.value).to.contain('/store/feature_mb/uq/list_s/kids');
            })
            .click(l1PageElements.navBar.logoButton)
            .waitForVisible(l1PageElements.genderBar.babyButton, 1000)
            .click(l1PageElements.genderBar.babyButton)
            .url(function(err, url){
                expect(url.value).to.contain('/store/feature_mb/uq/list_s/baby');
            })
            .click(l1PageElements.navBar.logoButton);
    });

    it('#5 test special offer links', function () {
        return client
            .context('WEBVIEW_1')
            //.waitForVisible(l1PageElements.genderBar.kidsButton, 1000)
            //.execute(function(){document.getElementById('qa-uni-icon-link__stylebook').scrollIntoView();})
            //.waitForVisible(l1PageElements.specialOffers.largeStoreButton, 1000)
            //.elements(l1PageElements.specialOffers.promotions, function(err, eles){
            //    console.log(eles);
            //    client.elementIdClick(eles.value[0].ELEMENT);
            //})
            //.click(l1PageElements.navBar.logoButton)
            .waitForVisible(l1PageElements.genderBar.kidsButton, 1000)
            .execute(function(){document.getElementById('qa-uni-icon-link__stylebook').scrollIntoView();})
            .waitForVisible(l1PageElements.specialOffers.largeStoreButton, 1000)
            .isVisible(l1PageElements.specialOffers.largeStoreButton)
            .isVisible(l1PageElements.specialOffers.extraSizeButton)
            .isVisible(l1PageElements.specialOffers.styleBookButton)
            .click(l1PageElements.specialOffers.extraSizeButton)
            .url(function(err, url){
                expect(url.value).to.contain('/store/feature_mb/uq/fe_list/extra-size/%23page=1');
            })
            .click(l1PageElements.navBar.logoButton)
            .waitForVisible(l1PageElements.genderBar.kidsButton, 1000)
            .execute(function(){document.getElementById('qa-uni-icon-link__stylebook').scrollIntoView();})
            .waitForVisible(l1PageElements.specialOffers.largeStoreButton, 1000)
            .click(l1PageElements.specialOffers.largeStoreButton)
            .url(function(err, url){
                expect(url.value).to.contain('/store/feature_mb/uq/fe_list/largestore/');
            })
            .click(l1PageElements.navBar.logoButton);

    });


});
