describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:5173');

    cy.document().find('input[type="submit"]').click();
  })
})
