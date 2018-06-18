'use strict';

var webdriverio = require('webdriverio');
var Promise = require('bluebird');
var config = require('../config.js');
var l1PageElements = require('./l1-page-elements');
var l2PageElements = require('../L2/l2-page-elements');
var helpers = require('../core/helpers');
var commonTests = require('../other/header-footer.test');
var commonElements = require('../other/header-footer-page-elements');

Promise.longStackTraces();
var URL = 'http://localhost:3000';

xdescribe('E2E: L1 Page', function () {
  var client = {};

  before(function () {
    client = webdriverio.remote(config.getConfig());

    Promise.promisifyAll(client, {
      suffix: 'Promise'
    });
    return client
      .initPromise()
      .then(function () {
        client.context(config.getContext());
      });
  });

  after(function () {
    return client.endPromise();
  });

  describe('Header', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    it('should have a visible logo', function () {
      return client
        .isVisiblePromise(commonElements.navBar.logoButton);
    });

    it('should pass headerTests', function () {
      return client
        .isVisiblePromise(commonElements.navBar.logoButton)
        .then(commonTests.runHeaderTests(
          client,
          commonElements.getNavBarButtons(),
          commonElements.navBar.searchButton,
          commonElements.navBar.menuButton,
          commonElements.navBar.cartButton,
          commonElements.navBar.searchFormInput,
          commonElements.navBar.searchForm
        ));
    });

    after(function () {
      return client.refreshPromise();
    });
  });

  describe('Footer', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    it('FooterMenu should have buttons ', function () {
      return client
        .isVisiblePromise(commonElements.navBar.logoButton)
        .then(commonTests.runFooterMenuTests(
          client,
          commonElements.getFooterMenuButtons()));
    });

    it('should have copyright text', function () {
      var expectedCopyright =
        'COPYRIGHT (C) UNIQLO CO., LTD. ALL RIGHTS RESERVED.';
      return client
        .isVisiblePromise(commonElements.navBar.logoButton)
        .then(commonTests.textChecker(
          client,
          commonElements.footerBar.copyRight,
          expectedCopyright));
    });

    after(function () {
      return client.refreshPromise();
    });
  });


  describe('multi link Image modal', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    it('should have multi link image modal', function () {
      return client
        .waitForVisible(l1PageElements.multilinkImage.image,
          1000)
        .isVisible(l1PageElements.multilinkImage.image);
    });

    it('should have pop-up window', function () {
      return client
        .waitForVisible(l1PageElements.multilinkImage.image,
          1000)
        .click(l1PageElements.multilinkImage.image)
        .waitForVisible(l1PageElements.multilinkImage.modalTitle,
          1000)
        .isVisible(l1PageElements.multilinkImage.modalTitle);
    });

    it('should check pop-up window title', function () {
      return client
        .isVisiblePromise(l1PageElements.multilinkImage.modalTitle)
        .then(commonTests.textChecker(
          client,
          l1PageElements.multilinkImage.modalTitle,
          'Now on Sale'));
    });

    it('should have 3 option links on pop-up window', function () {
      return client
        .isVisiblePromise(l1PageElements.multilinkImage.modalLinks)
        .then(helpers.numberOfElementChecker(
          client,
          l1PageElements.multilinkImage.modalLinks,
          3));
    });

    it('should close the modal and hidden the window', function () {
      return client
        .isVisible(l1PageElements.multilinkImage.modalLinks)
        .clickPromise(l1PageElements.multilinkImage.modalCloseButton)
        .then(helpers.elementIsHiddenChecker(
          client,
          l1PageElements.multilinkImage.modalTitle));
    });

    after(function () {
      return client.refreshPromise();
    });
  });

  describe('carousel', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    var expectedClass = 'disabled';

    it('should have dots', function () {
      return client
        .waitForVisible(l1PageElements.mainCarousel.dots, 1000)
        .isVisible(l1PageElements.mainCarousel.dots);
    });

    it('should have disabled left arrow button', function () {
      return client
        .waitForVisiblePromise(l1PageElements.mainCarousel.rightArrow,
          1000)
        .then(helpers.elementHasClassChecker(
          client,
          l1PageElements.mainCarousel.leftArrow,
          expectedClass));
    });

    it('should not have disabled right arrow button', function () {
      return client
        .waitForVisiblePromise(l1PageElements.mainCarousel.rightArrow,
          1000)
        .then(helpers.elementLacksClassChecker(
          client,
          l1PageElements.mainCarousel.rightArrow,
          expectedClass));
    });
    // TODO: test swipe, active dots, etc.
    after(function () {
      return client.refreshPromise();
    });
  });

  describe('gender department bar', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    var sections = ['women', 'men', 'kids-and-baby'];

    it('should have women button and a valid URL', function () {
      return client
        .waitForVisiblePromise(l1PageElements.genderBar.womenButton,
          1000)
        .then(helpers.linkButtonChecker(
          client,
          l1PageElements.genderBar.womenButton,
          l2PageElements.productTitle.departmentTitle,
          sections[0],
          commonElements.navBar.logoButton));
    });

    it('should have men button and a valid URL', function () {
      return client
        .waitForVisiblePromise(l1PageElements.genderBar.menButton,
          1000)
        .then(helpers.linkButtonChecker(
          client,
          l1PageElements.genderBar.menButton,
          l2PageElements.productTitle.departmentTitle,
          sections[1],
          commonElements.navBar.logoButton));
    });

    xit('should have Kids & Baby button and a valid URL', function () {
      return client
        .waitForVisiblePromise(l1PageElements.genderBar.kidsAndBabyButton,
          1000)
        .then(helpers.linkButtonChecker(
          client,
          l1PageElements.genderBar.kidsAndBabyButton,
          l2PageElements.productTitle.departmentTitle,
          sections[2],
          commonElements.navBar.logoButton));
    });

    after(function () {
      return client.refreshPromise();
    });
  });

  describe('regular offer links', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    it('should have 6 regular offer buttons', function () {
      return client
        .waitForVisiblePromise(
          l1PageElements.regularOffers.regularOffersButtons,
          1000)
        .then(helpers.numberOfElementChecker(
          client,
          l1PageElements.regularOffers.regularOffersButtons,
          6));
    });

    it('should have a valid URL for second button', function () {
      return client
        .waitForVisiblePromise(
          l1PageElements.regularOffers.regularOffersButtons,
          1000)
        .then(helpers.secondLinkButtonChecker(
          client,
          l1PageElements.regularOffers.regularOffersButtons,
          '/store/feature_mb/uq/list_s/limited-offer',
          commonElements.navBar.logoButton));
    });

    after(function () {
      return client.refreshPromise();
    });
  });

  xdescribe('special offer links', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    it('should have a Large size products button and a valid URL',
      function () {
        return client
          .waitForVisiblePromise(l1PageElements.specialOffers.largeStoreButton,
            10000)
          .then(helpers.linkButtonChecker(
            client,
            l1PageElements.specialOffers.largeStoreButton,
            commonElements.navBar.logoButton,
            '/store/feature_mb/uq/fe_list/largestore',
            commonElements.navBar.logoButton));
      });

    it('should have extra size button and a valid URL',
      function () {
        return client
          .waitForVisiblePromise(l1PageElements.specialOffers.extraSizeButton,
            10000)
          .then(helpers.linkButtonChecker(
            client,
            l1PageElements.specialOffers.extraSizeButton,
            commonElements.navBar.logoButton,
            '/store/feature_mb/uq/fe_list/extra-size',
            commonElements.navBar.logoButton));
      });

    it('should have a style dictionary button', function () {
      return client
        .waitForVisible(l1PageElements.specialOffers.styleBookButton,
          1000)
        .isVisible(l1PageElements.specialOffers.styleBookButton);
    });

    after(function () {
      return client.refreshPromise();
    });
  });
});

