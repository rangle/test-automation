import Page from '../pageobjects/page.js';
import HomePage from '../pageobjects/homePage.js';
import NewArrivals from '../pageobjects/page.js';
import Common from '../pageobjects/common.js';
import FeaturedProductPage from '../pageobjects/featuredProductPage.js';


const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

const mainPage = new Page();
const common = new Common();
const home = new HomePage();
const featuredProductPage = new FeaturedProductPage();


describe('Viewing Home Page',() => {

     before(() => {
        mainPage.open("http://www.clubmonaco.ca/home/index.jsp");
       
    });

    it('should have an email modal',() => { 
        expect(common.isWelcomeModalPresent()).to.be.true;
    });


    it('should be able to close the email modal when it is present',() => {
        common.closeWelcomeModalWhenPresent(); 
    });

    it('should be able to search for a product from the home page',() => {
       common.closeWelcomeModalWhenPresent();
       common.searchForItem("Anderson Shirt");       
    });

 });// describe for homepage

describe('Welcome Modal Open On All Pages',() => {

     before(()=>{
        mainPage.open("http://www.clubmonaco.ca/home/index.jsp");
        common.closeWelcomeModalWhenPresent();  
     });

    it('should have a welcome modal',() => {
        common.open("http://www.clubmonaco.ca/family/index.jsp?categoryId=29336746&size=99&cp=12266410.12280881.29336746&ab=ln_men_accessories_jewelry");
        expect(common.isWelcomeModalPresent()).to.be.false;
    });


    it('should be able to close the welcome modal',() => {

        common.open("http://www.clubmonaco.ca/category/index.jsp?categoryId=12266412&ab=global_sale");
        common.closeWelcomeModalWhenPresent(); 
        expect(common.isWelcomeModalPresent()).to.be.false;
            
    });

 });//describe for welcome modal open


