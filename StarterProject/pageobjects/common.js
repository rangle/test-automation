import Page from "./page.js";

export default class Common extends Page {

    constructor() {
        super();    
    }

    closeWelcomeModal(){
        let close = "div.emailPopupRefresh img";

        if (this.isWelcomeModalPresent()){
            browser.element(close).click;
        }
    }

    closeWelcomeModalWhenPresent(){
        let emailModal ="#monetate_allinone_lightbox";
        browser.call(()=>{
            browser.isVisible(emailModal).then(()=>{
                this.closeWelcomeModal();
            });
        });
    }

    isWelcomeModalPresent(){

        let emailModal ="#monetate_allinone_lightbox";

        if (browser.isVisible(emailModal)){
            return true;

        }else{
            return false;
        }
    }
    
    urlCurrentPage(){
        let urlCurrentPage = browser.getUrl();  
        return urlCurrentPage;
    }

    checkProductUrl(productid){
        let urlCurrentPage = browser.getUrl();	
        this.productid = productid;
        return urlCurrentPage.includes(productid);
    }

    getShoppingBag() {
        let shoppingBag = "#shoppingBag";
        return browser.element(shoppingBag); 
    }
    
    delBegEndCharFromStr(truncatedString){
        this.truncatedString = truncatedString;
        let parsedString = truncatedString.substr(1).slice(0, -1);
        return parsedString;
    }
    
    getNumItemsInShoppingBag(){ 
        let shoppingBagQuantityUnparsed = browser.getText("span#cartItemCount");
        let parsedString = this.delBegEndCharFromStr(shoppingBagQuantityUnparsed);
        return parsedString; 
    }

    getopenShoppingBag(){
        let shoppingBagFlyout = "a#shoppingBag";
        return browser.element(shoppingBagFlyout);
    }

    searchForItem(searchterm){
        this.searchterm = searchterm;
        let searchBox = "#search-box";
        let magnifyingGlass = "#sticky-header-search-frm a";
        let montateSearchResults = "div#monetate_search_results";
        
        browser.call(()=>{
            browser.setValue(searchBox,searchterm).then(()=>{
                browser.waitForExist(montateSearchResults,2000).then(()=>{
                    browser.element(magnifyingGlass).click;
                    browser.keys("Enter");
                });
            });
        });    
    }  

}//close common