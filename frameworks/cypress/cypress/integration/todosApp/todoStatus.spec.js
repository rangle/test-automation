const todoText = 'Start Sprint'
const newTodo = '.new-todo'

describe('Marking todos complete', () => {
  //Load up the DB with a list of 4 active todo items before every test
  beforeEach(() => {
    cy.loadTodos() //Defined in ./supports/commands.js
    cy.visit('/') //Since we have a baseUrl set in cypress.json, this will navigate to http://localhost:3030
  })

  it('Complete a newly added todo item', () => {
    cy.get(newTodo).type(`${todoText}{enter}`) //{enter} simulates an enter key press in Cypress
    cy
      .get('[qa-id=todo-item]')
      .last()
      .should('have.text', todoText)
      .find('[qa-id=check-todo]') //find the checkbox associated with our newly added todo item
      .click()
      .should('be.checked')
    cy.get('li.completed').should('have.length', 1)
  })

  it('Completed state can be toggled', () => {
    cy
      .get('[qa-id=todo-item]')
      .first()
      .find('[qa-id=check-todo]')
      .as('firstCheckbox')
      .click()
      .should('be.checked')
    cy.get('li.completed').should('have.length', 1) //check that a completed style has been applied to the todo item
    cy
      .get('@firstCheckbox')
      .click()
      .should('not.be.checked')
    cy.get('li.completed').should('not.exist') //since there should be 0 completed todos, this selector should return 0 elements
  })
})

describe('Completed Todos on page load', () => {
  it('When completed todos are in the DB, they should be marked as complete on page load', () => {
    cy.loadTodos('fixture:completedTodos') //seeds ../fixtures/completedTodos.json into our DB
    cy.visit('/')
    //We can use cy.each() to loop over items that cy.get() finds
    /*cy.each() exposes the element as a jquery element.  If we want to perform cypress commands on each of these elements
      then we can use cy.wrap().  Ex. to make assertions on it*/
    cy.get('[qa-id=todo-item]').each(($todoItem, i, $todos) => {
      cy.wrap($todoItem).should('have.class', 'completed')
    })
  })
})
