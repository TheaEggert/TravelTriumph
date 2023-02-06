describe('TravelTriumph E2E test', () => {
  it('Selects a couple of cities and verifies their shown data', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('TravelTriumph')
    
    cy.get('#selection-bar')
      .parent()
      .click()
      .get('ul > li[data-value="Paris"]')
      .click();

    cy.contains('Description')

    cy.contains('The capital and most populous city of France, and is one of the world')

    cy.contains('Current weather')

    cy.get('#selection-bar')
      .parent()
      .click({ multiple: true })
      .get('ul > li[data-value="Tokyo"]')
      .click({ multiple: true });

    cy.contains('Formerly known as Edo, Tokyo is the capital and most populous city of Japan.')
  })
})