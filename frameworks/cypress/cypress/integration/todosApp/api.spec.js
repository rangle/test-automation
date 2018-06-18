describe('API calls', () => {
  it('Should call /api/todos on page load', () => {
    cy.server()
    cy.route('GET', '/api/todos').as('getTodos') //alias our GET API call, so that we can wait for it to occur
    cy.visit('/')
    cy.wait('@getTodos') //wait for the previously defined alias to occur
  })

  it('/api/todos/delete should remove all todos', () => {
    cy.loadTodos()
    cy.visit('/')
    cy.deleteTodos()
    cy.reload()
    cy.get('[qa-id=todo-item]').should('not.exist')
  })

  it('Shows an error message for a failed form submission', () => {
    const todoText = 'Test'

    cy.server()
    //Stub our POST route so that when we try to submit a new todo, the API call returns a 500
    cy
      .route({
        method: 'POST',
        url: '/api/todos',
        status: 500,
        response: {},
      })
      .as('saveTodo')

    cy.loadTodos()
    cy.visit('/')
    cy
      .get('.new-todo')
      .type(todoText)
      .type('{enter}')

    cy.wait('@saveTodo')
    cy.get('[qa-id=todo-item]').should('have.length', 4)
    cy.get('.error').should('be.visible')
  })
})
