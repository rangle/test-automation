const todoItems = '[qa-id=todo-item]'

describe('Filtering todos', () => {
  before(() => {
    cy.loadTodos('fixture:mixedTodos') //load a fixture that has 1 completed and 3 active todos
    cy.visit('/')
  })

  it('Filter by active todos and then back to all', () => {
    cy.get('[qa-id=filter-active]').click()
    cy.get(todoItems).should('have.length', 3)
    cy.get('[qa-id=filter-all]').click()
    cy.get(todoItems).should('have.length', 4)
  })

  it('Filter by completed todos and then back to all', () => {
    cy.get('[qa-id=filter-completed]').click()
    cy.get(todoItems).should('have.length', 1)
    cy.get('[qa-id=filter-all]').click()
    cy.get(todoItems).should('have.length', 4)
  })
})
