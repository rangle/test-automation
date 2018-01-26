This is a small proof of concept for how we might be able to utilize Cypress.io

There exists one spec file that has 3 tests, each are mocking a product information page from Walmart.ca to show one of the main features that I think separates Cypress from other test automation tools -- the ability to intercept XHR calls and send back mocked data.

## Installation & Execution

Ensure that you're within the `cypress-test` directory

Step 1 - `npm install`

Step 2 - `npm test`

Step 3 - click on the `test.spec.js` file on the cypress window that opens up

----

## Details

In `test.spec.js` we're using the [same product information page that is live on Walmart.ca](https://walmart.ca/en/ip/127191) for all tests, but using `fixtures` to set up mocked routes that control how the page is displayed.  This allows us to test the UI without needing to set up any data, or even be in control of the backend system. The three tests use mocks to alter the item from in-stock and on sale, to available for preorder, to not sold online.

There's also an `example_spec.js` spec file, which more exaustively shows what functions Cypress is capable of.  

Also viewable is the cypress runner itself.  Once tests have been executed, you can go back to any command that was run in any test by clicking on the appropriate test in the left hand pane.  As you hover over the commands that were executed for each test, you can time travel the browser to the state it was in directly before (and after if there is a visual change) that command was executed.  You can also interact with the application while doing this.  

Cypress has some powerful features, and also has [great documentation](https://docs.cypress.io/) that I'd recommend reading if you're interested. 

From a tool adoption point of view, the main downside of Cypress is that it is currently a Chrome only tool (which is why deep integration and the features above are even possible), though there is a dedicated developer community that is looking to build out support for other browsers in the future.  



