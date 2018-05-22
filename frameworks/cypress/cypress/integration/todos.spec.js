describe('Adding/Removing Todos', () => {
  beforeEach(() => {
    //cy.loadTodos() //Defined in ./supports/commands.js
    cy.visit('/') //Since we have baseUrl set in cypress.json, this will navigate to http://localhost:3030
  })

  it('should be able to add a new todo items', () => {
    cy.get('.new-todo').type('Todo 1{enter}')
    cy.get('[qa-id=todo-item]').should('have.length', 1)
  })

  afterEach(() => {
    cy.request('DELETE', '/api/todos/all')
  })
})
