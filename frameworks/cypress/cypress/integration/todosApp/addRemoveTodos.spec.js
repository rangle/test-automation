const newTodo = '.new-todo'
const todoText = 'Start sprint'

describe('Adding/Removing Todos', () => {
  let todoLength
  //Load up the DB with a list of 4 active todo items before every test
  beforeEach(() => {
    cy.loadTodos('fixture:activeTodos') //Defined in ./supports/commands.js

    /*In order to make this test suite resilient to data changes, we'll grab the length of the todos object
      to make assertions on in the below tests
      */
    cy.fixture('activeTodos')
      .its('length')
      .then(length => {
        todoLength = length
      })
    cy.visit('/') //Since we have a baseUrl set in cypress.json, this will navigate to http://localhost:3030
  })

  it('Add a new todo item to the end of the list', () => {
    cy.get('[qa-id=todo-item]').should('have.length', todoLength)
    cy.get(newTodo).type(`${todoText}{enter}`)
    cy.get('[qa-id=todo-item]')
      .should('have.length', todoLength + 1) //verify that we've actually added a todo item
      .last()
      .should('have.text', todoText) //verify that the item has the correct text we entered
  })

  it('Remove a newly added todo item', () => {
    cy.get(newTodo).type(`${todoText}{enter}`)
    cy.get('[qa-id=todo-item]')
      .should('have.length', todoLength + 1)
      .last()
      .should('have.text', todoText)
      .find('[qa-id=destroy-todo]')
      .click({ force: true }) //Cypress can interact with hidden buttons by passing a force option to click()
    cy.get('[qa-id=todo-item]').should('have.length', todoLength) //verify that element has been deleted
  })
})
