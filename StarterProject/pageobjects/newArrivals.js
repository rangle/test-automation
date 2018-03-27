import Page from "./page.js";

export class NewArrivals extends Page {

    constructor(){
        super();
    }

    getFreaturedProduct(){

        let featuredProduct = "div.cm_family_mood_1";
        return browser.element(featuredProduct);
    }

    getSelectedProductBySku(sku){

        if (sku.isInteger) {
            let composeSkuCode = `product-${sku}`;
            return browser.element(composeSkuCode);
        }
        else {
            let composeSkuCode = "product-142725266";
            return browser.element(composeSkuCode);
        }
    }

}