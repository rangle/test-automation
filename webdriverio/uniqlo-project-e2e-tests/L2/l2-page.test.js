'use strict';

var webdriverio = require('webdriverio');
var Promise = require('bluebird');
var config = require('../config.js');
var commonTests = require('../other/header-footer.test');
var commonElements = require('../other/header-footer-page-elements');

var URL = 'http://localhost:3000/#/women';

xdescribe('E2E: L2 Page', function () {
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
  });

  describe('Footer', function () {
    before(function () {
      return client.urlPromise(URL);
    });
    it('FooterMenu should have buttons ', function () {
      return client
        .isVisiblePromise(commonElements.navBar.logoButton)
        .then(commonTests.runFooterMenuTests(
          client, commonElements.getFooterMenuButtons()));
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
  });
});

