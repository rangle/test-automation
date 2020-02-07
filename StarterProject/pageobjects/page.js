export default class Page {
    constructor() {
        
    }
    open(path) {
        this.path = path ;
        this.browser=browser;
        browser.url(path);
    }
}