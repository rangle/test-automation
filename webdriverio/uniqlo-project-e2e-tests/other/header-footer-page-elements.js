'use strict';

module.exports = function () {
  var helpers = require('../core/helpers');
  var elements = {
    navBar: {
      logoButton: '#qa-logo-button',
      favoritesButton: '#qa-favorites-button',
      cartButton: '#qa-cart-button',
      searchButton: '#qa-search-button',
      menuButton: '#qa-menu-button',
      searchForm: '#qa-search-form',
      searchFormInput: '#qa-search-form-input'
    },
    footerMenu: {
      storeFinderButton: '#qa-uni-icon-link__store-finder',
      newsLetterButton: '#qa-uni-icon-link__newsletter',
      loginButton: '#qa-uni-icon-link__login',
      registerButton: '#qa-uni-icon-link__register',
      lifeToolsButton: '#qa-uni-icon-link__life-tools',
      helpButton: '#qa-uni-icon-link__help',
      aboutButton: '#qa-uni-icon-link__about'
    },
    footerBar: {
      copyRight: '#qa-main-page-footer .uni-footer__copyright'
    },
    recentlyViewed: {
      sectionTitle: '.uni-section-header__title',
      slideImages: '.uni-recently-viewed__slide' +
        ' .uni-recently-viewed__size-placeholder',
      leftArrow: '.uni_recently-viewed .uni-carousel-control__prev',
      rightArrow: '.uni_recently-viewed .uni-carousel-control__next',
      dots: '.uni_recently-viewed .owl-dot'
    }
  };


  elements.getFooterMenuButtons = function () {
    return helpers.getButtons(elements.footerMenu);
  };

  elements.getNavBarButtons = function () {
    return helpers.getButtons(elements.navBar);

  };

  return elements;
}();

