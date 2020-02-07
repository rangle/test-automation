
import Page from "./page.js";

export default class FeaturedProductPage extends Page {

    constructor() {
        super();     
    }
    
    getAddToBag() { 
        let addToBag = "div#add-to-cart-container button#add-to-cart";
        return browser.element(addToBag); 
    }

    getSelectedQuantity(){
        let amountSelectedAlready = "#prodCounter";
        let value = browser.getValue(amountSelectedAlready);
        return value;
    }

    getSizeSelected(){
        let sizeSelected="fieldset#sizeContainer ul.size-buttons li.label";
        let value = browser.getValue(sizeSelected);
        return value;
    }

    getPriceUserSees(){
        let priceUserSees = "div#product-information div.money span";
        let value = browser.getText(priceUserSees);

        if(value.charAt(0)=="$"){
            value=value.substr(1);
            return parseInt(value);
        }
        else{
            return parseInt(value);
        }
    }

    getSwatchSelected(){
        let swatchSelected = "li.swatch.selected";
        let value = browser.getValue(swatchSelected);
        return value;
    }

    quantityNotInStock(){
        let quantityNotInStock = "quantity-error";

        if (browser.isVisible(quantityNotInStock)===true){
            return true;
        }
        else{
            return false;
        }
    }

    getAddToWishList() { 
        let addToWishlist = "#wishlist-button";
        return browser.element(addToWishlist);
    }

}//end featuredProductPage

