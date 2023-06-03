describe('Cypress test', () => {
  it('should find my name', () => {
    cy.visit('/');
    cy.contains('Hello');
  });
});
