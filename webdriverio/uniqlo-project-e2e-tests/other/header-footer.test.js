'use strict';

var helpers = require('../core/helpers');
var chai = require('chai');
var expect = chai.expect;


function runHeaderTests(client, buttons, searchButton, menuButton, cartButton,
  searchFormInput, searchForm) {
  return function () {
    var className = 'ng-hide';
    var prepareClient = client.waitForExist(cartButton, 1000);
    return helpers.areVisible(prepareClient, buttons)
      .click(searchButton)
      .waitForVisiblePromise(searchFormInput, 1000)
      .then(helpers.elementHasFocusChecker(
        client, searchFormInput))
      .then(function () {
        return client.clickPromise(menuButton);
      })
      .then(helpers.elementHasClassChecker(
        client,
        searchForm,
        className));
  };
}

function runFooterMenuTests(client, buttons) {
  return function () {
    return helpers.areVisible(client, buttons);
  };
}

function textChecker(client, elementID, expected) {
  return function () {
    return client
      .getTextPromise(elementID)
      .then(function (textContent) {
        expect(textContent[0]).to.equal(expected);
      });
  };
}

module.exports = {
  // These functions return promise handlers.
  runHeaderTests: runHeaderTests,
  runFooterMenuTests: runFooterMenuTests,
  textChecker: textChecker
};

