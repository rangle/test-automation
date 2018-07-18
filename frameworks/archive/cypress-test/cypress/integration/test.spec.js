import { mockAvailabilityCall } from '../support/utils'

describe('route mocking', () => {
  beforeEach('start up cypress server for mocking', () => {
    cy.server()
  })

  it('mocking rollback pricing', () => {
    cy.route(mockAvailabilityCall('availability-pip'))
    cy.visit('/en/ip/127191')
    cy.get('#product-purchase-cartridge .price-was').contains('1,200')
  })

  it('mocking preorder', () => {
    cy.route(mockAvailabilityCall('availability-pip-preorder'))
    cy.visit('/en/ip/127191')
    cy.get('#favourite-a2c-container button.preorder').should('exist')
    cy.get('#favourite-a2c-container .preorder span.date').should('exist')
  })

  it('mocking not sold', () => {
    cy.route(mockAvailabilityCall('availability-pip-notsold'))
    cy.visit('/en/ip/127191')
    cy.get('#favourite-a2c-container button.not-eligible').should('exist')
  })
})
