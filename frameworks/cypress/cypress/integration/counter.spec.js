describe('"Todos Left" counter', () => {
  it('should display singular form of todo if 1 todo is active', () => {
    cy.server()

    //We can mock our API to return 1 item when called by passing a response variable with cy.route()
    cy.route('GET', 'api/todos', [
      {
        id: 1,
        name: 'Refinement',
        isComplete: true,
      },
      {
        id: 2,
        name: 'Planning',
        isComplete: false,
      },
    ])
    cy.visit('/')
    cy.get('.todo-count').should('have.text', '1 todo left')
  })

  it('should display plural form of todo if 2 todos are active', () => {
    cy.server()

    //We can mock our API to return 1 item when called by passing a response variable with cy.route()
    cy.route('GET', 'api/todos', [
      {
        id: 1,
        name: 'Refinement',
        isComplete: true,
      },
      {
        id: 2,
        name: 'Planning',
        isComplete: false,
      },
      {
        id: 3,
        name: 'Demo',
        isComplete: false,
      },
    ])
    cy.visit('/')
    cy.get('.todo-count').should('have.text', '2 todos left')
  })
})
