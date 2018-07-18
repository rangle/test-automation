'use strict';
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var Promise = require('bluebird');
var R = require('ramda');


function elementHasClassChecker(client, selector, className) {
  return function () {
    return client.elementsPromise(selector)
      .then(function (element) {
        return client.elementIdAttributePromise(element.value[0].ELEMENT,
          'class');
      })
      .then(function (classNames) {
        assert.include(classNames.value, className);
      });
  };
}

function elementLacksClassChecker(client, selector, className) {
  return function () {
    return client.elementsPromise(selector)
      .then(function (element) {
        return client.elementIdAttributePromise(element.value[0].ELEMENT,
          'class');
      })
      .then(function (classNames) {
        assert.notInclude(classNames.value, className);
      });
  };
}

function elementHasFocusChecker(client, cssId) {
  return function () {
    // Checks that the requested selector refers to the focused element.
    return client.elementActivePromise()
      .then(function (response) {
        return client.elementIdAttributePromise(response.value.ELEMENT,
          'id');
      })
      .then(function (id) {
        assert.strictEqual('#' + id.value, cssId);
      });
  };
}

function elementIsHiddenChecker(client, selector) {
  return function () {
    return client.isVisiblePromise(selector)
      .then(function (results) {
        expect(results[0]).to.eql(false);
      });
  };
}

function linkButtonChecker(client, linkButton,
  waitPageElement, URL, homeButton) {
  return function () {
    return client.clickPromise(linkButton)
      .then(function () {
        return client.waitForVisible(waitPageElement, 1000);
      })
      .then(function () {
        return client.urlPromise();
      })
      .then(function (currentUrl) {
        expect(currentUrl.value).to.contain(URL);
      })
      .then(function () {
        return client.clickPromise(homeButton);
      })
      .then(null, function (err) {
        return Promise.reject(err);
      });
  };
}

function numberOfElementChecker(client, elements, num) {
  return function () {
    return client.elementsPromise(elements)
      .then(function (totalElements) {
        expect(totalElements.value.length).to.equal(num);
      });
  };
}

function secondLinkButtonChecker(client, firstLinkButton, URL, homeButton) {
  return function () {
    return client.elementsPromise(firstLinkButton)
      .then(function (buttons) {
        return client.elementIdClickPromise(buttons.value[1].ELEMENT);
      })
      .then(function () {
        return client.urlPromise();
      })
      .then(function (currentUrl) {
        expect(currentUrl.value).to.contain(URL);
      })
      .then(function () {
        return client.clickPromise(homeButton);
      });
  };
}

function lastDotClick(client, dots) {
  return function () {
    return client.elementsPromise(dots)
      .then(function (totalElements) {
        var size = totalElements.value.length - 1;
        client.elementIdClick(totalElements.value[size].ELEMENT);
      });
  };
}


function testProductsOnURL(client, productIds, productID) {
  return function () {
    return R.reduce(function (previousPromise, id) {
      return previousPromise.then(function () {
        //Promise below hangs
        return client.urlPromise(
            'http://localhost:3000/#/product/' + id)
          .then(function () {
            return client.waitForExistPromise(productID, 1000);
          });
      });
    }, new Promise(function (resolve) {
      resolve();
    }), productIds);
  };
}

function buttonClicker(client, button) {
  return function () {
    return client.clickPromise(button);
  };
}

function isVisible(client, element) {
  return function () {
    return client.isVisiblePromise(element);
  };
}

function areVisible(client, elements) {
  elements.forEach(function (element) {
    client.isVisible(element);
  });

  return client;
}


/*
 Iterates over an object returning
 values of keys that have the word 'Button'
 in an array
 */
function getButtons(obj) {
  return keyWith(obj, 'Button');
}

function keyWith(obj, word) {
  var keys = R.keys(obj);

  return keys.filter(function (key) {
    return key.indexOf(word) !== -1;
  }).map(function (key) {
    return obj[key];

  });
}


module.exports = {
  elementHasClassChecker: elementHasClassChecker,
  elementLacksClassChecker: elementLacksClassChecker,
  elementHasFocusChecker: elementHasFocusChecker,
  elementIsHiddenChecker: elementIsHiddenChecker,
  linkButtonChecker: linkButtonChecker,
  secondLinkButtonChecker: secondLinkButtonChecker,
  numberOfElementChecker: numberOfElementChecker,
  testProductsOnURL: testProductsOnURL,
  lastDotClick: lastDotClick,
  buttonClicker: buttonClicker,
  isVisible: isVisible,
  areVisible: areVisible,
  getButtons: getButtons,
  keyWith: keyWith
};

