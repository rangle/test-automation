// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//If we just want sample data and don't want to rely on the DB, we can stub out a call to return a set of data
//That data can be a reference to a fixture file, or a JSON response
Cypress.Commands.add('loadStubbedTodos', (todos = 'fixture:activeTodos') => {
  cy.server()
  cy.route('GET', '/api/todos', todos)
})

//Calls a bulkload API method to seed our DB with data via a fixture
Cypress.Commands.add('loadTodos', (todos = 'fixture:activeTodos') => {
  cy.server()
  if (typeof (todos === 'string')) {
    //If this is a string we assume it is a fixture name, and want to extract it out and call cy.fixture()
    const fixtureName = todos.split(':').pop()
    //Cypress is asynchronous, if we want to get fixture data and then do something with it, we can use .then() to access it
    cy.fixture(fixtureName).then(todos => {
      cy.request('POST', '/api/todos/bulkload', { todos })
    })
  } else {
    //We can support passing JSON objects to this method as well
    cy.request('POST', '/api/todos/bulkload', { todos })
  }
})

Cypress.Commands.add('deleteTodos', () => {
  cy.server()
  cy.request('DELETE', '/api/todos/delete')
})
