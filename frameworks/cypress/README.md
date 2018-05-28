# Overview

[Cypress.io](https://www.cypress.io/) is a flexible integration/e2e test execution environment that runs on Chromium browsers.  

This project will demonstrate a few of its key features, and give you an overview of how you can structure a test framework, and interact with tests as you write them.

The [Cypress documentation](https://docs.cypress.io/guides/overview/why-cypress.html) is wonderful, and it's recommended that you take [Core Concepts](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html) section before you begin writing your own tests. 

# Usage

This test framework relies on the Todos application co-located in this repo being set up locally on your machine. See the [root README]('../../README.md) for instructions.  Once the app dev server has been started, you can proceed with the below steps

```
yarn install (or npm install)
yarn test (or npm test)
```

After running `yarn test` a Cypress application window should be launched, with a list of test spec files.  Any of these can be clicked, which will then open that specific spec file in the Cypress test runner, which is a modified Chrome instance  

# Project structure
### `cypress/fixtures`

Fixtures are where you can save any sort of data that you want to access in your tests, and can be used in a variety of ways.  

This project contains a few sets of todo lists in various states that are used to seed the Todo app database.  There are also a couple json objects used with the included kitchen sink test suite.

Full details in the [Cypress documentation](https://docs.cypress.io/api/commands/fixture.html#JSON)

### `cypress/integration`

This is where tests are located in Cypress.  You can add additional folders underneath this directory, and they will be respected in the Cypress spec launcher. 

This project contains a few spec files, as well as an `example_spec.js` file that is a kitchen sink example of things you can do within Cypress.  It is fully commented out, but can easily be commented back in and executed, if you are curious to see an exhaustive list of Cypress features not included in this small project.

### `cypress/plugins`
No plugins are included in this project, but Cypress supports a number of different types of plugins, as well as writing your own. [Current available plugins](https://docs.cypress.io/plugins/)

### `cypress/support`
This folder contains an `index.js` file which is imported before every spec file.  You can use this to import common functionality that you might want available in every test as well as set global test hooks (Ex. "I want to clear the DB before I run every test").  Common convention is to add specific modules as seperate JS files, and then import them via `index.js`.  
`support/commands.js` is an example of this.  This is an example of a support file that creates custom methods which can then be used in your tests.  In this project, we define custom methods to load and delete todos conveniently.    

### `cypress.json`
This is the config file for Cypress.  There are a number of different options available. This project just defines a `baseUrl` here, which informs all `cy.visit()` commands that are passed a relative link to append the `baseUrl`.  

A full list of configuration options are available in the [Cypress documentation](https://docs.cypress.io/guides/references/configuration.html)


# Running Headlessly
Cypress comes built in with a headless test execution mode, which can be run with the following command:

`yarn test:headless (or npm run test:headless)`

This will run all tests that are found under the `integration` folder.  Cypress will create a `videos` folder and save a recording of this headless execution, to aid debugging if there are any issues.





