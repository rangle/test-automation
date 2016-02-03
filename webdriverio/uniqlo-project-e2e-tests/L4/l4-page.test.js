'use strict';

var webdriverio = require('webdriverio');
var Promise = require('bluebird');
var config = require('../config.js');
var l4PageElements = require('./l4-page-elements');
var helpers = require('../core/helpers');
var commonTests = require('../other/header-footer.test');
var commonElements = require('../other/header-footer-page-elements');

var URL = 'http://localhost:3000/#/product/133513';

xdescribe('E2E: L4 Page', function () {
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

  xdescribe('about this item link', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    it('should have section title', function () {
      return client
        .waitForVisiblePromise(l4PageElements.aboutItem.itemLink,
          1000)
        .then(commonTests.textChecker(
          client,
          l4PageElements.aboutItem.itemLink,
          '商品說明'));
    });

    it('should expand the section', function () {
      return client
        .waitForExistPromise(l4PageElements.aboutItem.itemLink,
          1000)
        .then(function () {
          return client.clickPromise(l4PageElements.aboutItem.itemLink);
        })
        .then(helpers.elementHasClassChecker(
          client,
          l4PageElements.aboutItem.itemDetail,
          'open'));
    });

    it('should close the section', function () {
      return client
        .waitForExistPromise(l4PageElements.aboutItem.itemLink,
          1000)
        .then(function () {
          return client.clickPromise(l4PageElements.aboutItem.itemLink);
        })
        .then(helpers.elementHasClassChecker(
          client,
          l4PageElements.aboutItem.itemDetail,
          'closed'));
    });

    after(function () {
      return client.refreshPromise();
    });
  });

  describe('FAQ/HELP link', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    it('should have section title', function () {
      return client
        .waitForVisiblePromise(l4PageElements.FAQ.FAQLink, 1000)
        .then(commonTests.textChecker(
          client,
          l4PageElements.FAQ.FAQLink,
          '需要幫忙'));
    });

    after(function () {
      return client.refreshPromise();
    });
  });

  describe('deliver link', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    it('should have section title', function () {
      return client
        .waitForVisiblePromise(l4PageElements.deliver.deliverLink,
          1000)
        .then(commonTests.textChecker(
          client,
          l4PageElements.deliver.deliverLink,
          '關於配送'));
    });

    it('should have pop-up window', function () {
      return client
        .click(l4PageElements.deliver.deliverLink)
        .waitForVisible(l4PageElements.deliver.popWindow, 1000)
        .isVisible(l4PageElements.deliver.popWindow);
    });

    it('should have pop-up window\'s title', function () {
      return client
        .waitForVisiblePromise(l4PageElements.deliver.popWindowTitle,
          1000)
        .then(commonTests.textChecker(
          client,
          l4PageElements.deliver.popWindowTitle,
          '關於配送'));
    });

    it('should have pop-up window\'s content', function () {
      return client
        .waitForVisiblePromise(l4PageElements.deliver.popWindowContent,
          1000)
        .then(helpers.isVisible(
          client,
          l4PageElements.deliver.popWindowContent));
    });

    it('should close pop-up window', function () {
      return client
        .waitForVisible(l4PageElements.deliver.popWindowCloseButton,
          1000)
        .clickPromise(l4PageElements.deliver.popWindowCloseButton)
        .then(helpers.elementHasClassChecker(
          client,
          l4PageElements.deliver.popWindow,
          'ng-leave-active'));
    });

    after(function () {
      return client.refreshPromise();
    });
  });

  describe('share link', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    it('should have section title', function () {
      return client
        .waitForVisiblePromise(l4PageElements.share.shareTitle,
          1000)
        .then(commonTests.textChecker(
          client,
          l4PageElements.share.shareTitle,
          '分享'));
    });

    it('should have 3 icons', function () {
      return client
        .waitForVisiblePromise(l4PageElements.share.shareIcons,
          1000)
        .then(helpers.numberOfElementChecker(
          client,
          l4PageElements.share.shareIcons,
          3));
    });

    after(function () {
      return client.refreshPromise();
    });
  });

  describe('recently viewed section', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    it('should have section title', function () {
      return client
        .waitForVisiblePromise(l4PageElements.recentlyViewed.sectionTitle,
          1000)
        .then(commonTests.textChecker(
          client,
          l4PageElements.recentlyViewed.sectionTitle,
          '最近瀏覽的商品'));
    });

    it('should have dot', function () {
      return client
        .waitForVisible(l4PageElements.recentlyViewed.dots, 1000)
        .isVisible(l4PageElements.recentlyViewed.dots);
    });

    after(function () {
      return client.refreshPromise();
    });
  });


  describe('product detail', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    it('should have product title', function () {
      return client
        .waitForVisiblePromise(l4PageElements.productDetail.productTitle,
          1000)
        .then(commonTests.textChecker(
          client,
          l4PageElements.productDetail.productTitle,
          '男裝棉麻襯衫 (短袖)'));
    });

    it('should have product price', function () {
      return client
        .waitForVisiblePromise(l4PageElements.productDetail.productPrice,
          1000);
    });

    it('should have product color', function () {
      return client
        .waitForVisiblePromise(l4PageElements.productDetail.productColor,
          1000)
        .then(commonTests.textChecker(
          client,
          l4PageElements.productDetail.productColor,
          '00 WHITE'));
    });

    it('should have product ID', function () {
      return client
        .waitForVisiblePromise(l4PageElements.productDetail.productID,
          1000)
        .then(commonTests.textChecker(
          client,
          l4PageElements.productDetail.productID,
          '133513'));
    });

    after(function () {
      return client.refreshPromise();
    });
  });

  describe('product color grid', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    it('should have 8 colors of product', function () {
      return client
        .waitForVisible(l4PageElements.productDetail.productColorGrid,
          1000)
        .clickPromise(l4PageElements.productDetail.productColorGrid)
        .then(helpers.numberOfElementChecker(
          client,
          l4PageElements.productDetail.colorOption,
          8));
    });

    it(
      'should select color #09 black product and should reopen the color grid',
      function () {
        return client
          .waitForExistPromise(l4PageElements.productDetail.colorOption,
            1000)
          .then(helpers.secondLinkButtonChecker(
            client,
            l4PageElements.productDetail.colorOption,
            '/product/133513#09',
            l4PageElements.productDetail.productColorGrid));
      });

    it('should close the color grid', function () {
      return client
        .waitForExistPromise(l4PageElements.productDetail.colorOption,
          1000)
        .then(helpers.buttonClicker(
          client,
          l4PageElements.productDetail.colorCloseButton));
    });

    it('should have product color with black', function () {
      return client
        .waitForExistPromise(l4PageElements.productDetail.productColorGrid,
          1000)
        .then(commonTests.textChecker(
          client,
          l4PageElements.productDetail.productColor,
          '09 BLACK'));
    });

    after(function () {
      return client.refreshPromise();
    });
  });

  xdescribe('product size', function () {

    before(function () {
      return client.urlPromise(
        'http://localhost:3000/#/product/137875#61');
    });

    it('should have product size section title', function () {
      return client
        .waitForVisiblePromise(l4PageElements.productSize.productSizeTitle,
          1000)
        .then(commonTests.textChecker(
          client,
          l4PageElements.productSize.productSizeTitle,
          '尺寸: 尺寸表'));
    });

    it('should have product size chart', function () {
      return client
        .waitForVisiblePromise(l4PageElements.productSize.productSizeChart,
          1000)
        .then(helpers.isVisible(
          client,
          l4PageElements.productSize.productSizeChart));
    });

    it('should have 4 product size buttons (S, M, L, XL)', function () {
      return client
        .waitForVisible(l4PageElements.productSize.productSizeS,
          1000)
        .isVisible(l4PageElements.productSize.productSizeS)
        .isVisible(l4PageElements.productSize.productSizeM)
        .isVisible(l4PageElements.productSize.productSizeL)
        .isVisible(l4PageElements.productSize.productSizeXL);
    });

    it('should have 2 product size button gray off (S, M)', function () {
      return client
        .waitForVisiblePromise(l4PageElements.productSize.productSizeS,
          1000)
        .then(helpers.elementHasClassChecker(
          client,
          l4PageElements.productSize.productSizeS,
          'unavailable'))
        .then(helpers.elementHasClassChecker(
          client,
          l4PageElements.productSize.productSizeM,
          'unavailable'));
    });

    after(function () {
      return client.refreshPromise();
    });
  });

  describe('FAQ/HELP link', function () {

    before(function () {
      return client.urlPromise(URL);
    });

    it('should have section title', function () {
      return client
        .waitForVisiblePromise(l4PageElements.FAQ.FAQLink, 1000)
        .then(commonTests.textChecker(
          client,
          l4PageElements.FAQ.FAQLink,
          '需要幫忙'));
    });

    after(function () {
      return client.refreshPromise();
    });
  });

  xdescribe('product quantity', function () {

    before(function () {
      return client.urlPromise(
        'http://localhost:3000/#/product/137875#25');
    });

    it('should have section title', function () {
      return client
        .waitForVisiblePromise(l4PageElements.productQuantity.quantityTitle,
          1000)
        .then(commonTests.textChecker(
          client,
          l4PageElements.productQuantity.quantityTitle,
          '數量:'));
    });

    xit('should have no stock warning message', function () {
      return client
        .waitForVisiblePromise(l4PageElements.productSize.productSizeL,
          1000)
        .then(helpers.buttonClicker(
          client,
          l4PageElements.productSize.productSizeL
        ))
        .then(helpers.isVisible(
          client,
          l4PageElements.productWarningMessage.noStockWarning));
    });

    xit('should have low stock warning message', function () {
      return client
        .waitForVisiblePromise(l4PageElements.productSize.productSizeS,
          1000)
        .then(helpers.buttonClicker(
          client,
          l4PageElements.productSize.productSizeS
        ))
        .then(helpers.isVisible(
          client,
          l4PageElements.productWarningMessage.lowStock));
    });

    xit('should have over stock warning message', function () {
      return client
        .waitForVisiblePromise(
          l4PageElements.productQuantity.quantityIncreaseButton,
          1000)
        .then(helpers.buttonClicker(
          client,
          l4PageElements.productQuantity.quantityIncreaseButton
        ))
        .then(helpers.buttonClicker(
          client,
          l4PageElements.productQuantity.quantityIncreaseButton
        ))
        .then(helpers.buttonClicker(
          client,
          l4PageElements.productQuantity.quantityIncreaseButton
        ))
        .then(helpers.buttonClicker(
          client,
          l4PageElements.productQuantity.quantityIncreaseButton
        ))
        .then(helpers.isVisible(
          client,
          l4PageElements.productWarningMessage.overStockWarning));
    });

    after(function () {
      return client.refreshPromise();
    });
  });

  xdescribe('product flag for low stock and out of stock', function () {

    before(function () {
      return client.urlPromise(
        'http://localhost:3000/#/product/145440#01');
    });

    it('should have LOW STOCK flag display', function () {
      return client
        .waitForVisiblePromise(l4PageElements.productFlag.lowStock,
          1000)
        .then(helpers.isVisible(
          client,
          l4PageElements.productFlag.lowStock));
    });

    it('should have OUT OF STOCK flag display', function () {
      return client
        .waitForVisiblePromise(l4PageElements.productFlag.outOfStock,
          1000)
        .then(helpers.isVisible(
          client,
          l4PageElements.productFlag.outOfStock));
    });

    after(function () {
      return client.refreshPromise();
    });
  });

  xdescribe('Rest of tests', function () {


    //TODO: This test needs to be refactored to go to each product manually
    //Instead of using testProductsOnUrl since calling client.urlPromise
    // several times leads to promises that just hang and don't get resolved

    xit('#2 test recently viewed section', function () {
      return client
        .waitForExistPromise(l4PageElements.productDetail.productID,
          1000)
        .then(helpers.testProductsOnURL(
          client,
          l4PageElements.productURL.productID,
          l4PageElements.productDetail.productID))
        .then(helpers.numberOfElementChecker(
          client,
          commonElements.recentlyViewed.dots,
          2))
        .then(helpers.numberOfElementChecker(
          client,
          commonElements.recentlyViewed.slideImages,
          8))
        .then(helpers.elementHasClassChecker(
          client,
          commonElements.recentlyViewed.leftArrow,
          'disabled'))
        .then(helpers.elementLacksClassChecker(
          client,
          commonElements.recentlyViewed.rightArrow,
          'disabled'))
        .then(helpers.lastDotClick(
          client,
          commonElements.recentlyViewed.dots));
    });

  });
});

