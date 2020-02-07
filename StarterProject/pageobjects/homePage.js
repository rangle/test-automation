import Page from "./page.js";

export default class HomePage extends Page {

    constructor(){
        super();
    }
    
    getAnImageTileCTA(){ 

        let first_item = "div.hpBucket.hpTile3";
        return browser.element(first_item); 
    }   

    getFeaturedProduct(){
        let featuredProductTile = "div.hpBucket hpTile3 a.hpimage";
        return browser.element(featuredProductTile);
    }     
}