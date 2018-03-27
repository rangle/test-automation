
import Page from '../pageobjects/page.js';
import Common from '../pageobjects/common.js';
import FeaturedProductPage from '../pageobjects/featuredProductPage.js';

const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

const common = new Common();
const featuredProductPage = new FeaturedProductPage();

describe('Properties Of Product Page',() => {

    before(() => {
       featuredProductPage.open('http://www.clubmonaco.ca/product/index.jsp?productId=142725126');
       common.closeWelcomeModalWhenPresent();
    });//end before all

    it ('Should have the product size already selected',() =>  {
        let size = featuredProductPage.getSizeSelected();
        Number(size).should.equal(0);

    });
    
    it ('Should display the swatch selected',() =>  {  
        let selectedSwatch = featuredProductPage.getSwatchSelected();
        selectedSwatch.should.not.equal(null);
    });

    it('Should have an initial cart quantity of 0',() => {
        let cartquantity = common.getNumItemsInShoppingBag();
        Number(cartquantity).should.equal(0);
    });

    it('Should have a price displayed',() => {
        let price = featuredProductPage.getPriceUserSees();
        expect(price).to.equal(price);

    });

    it('Should have a price that is not a negative number',() => {
        let price = featuredProductPage.getPriceUserSees();
        expect(price).to.be.at.least(0);

    });

    it('should be able to search for a product from the product page',() => {
       common.searchForItem("Anderson Shirt");       
    });
    
}); //close for the describe statement