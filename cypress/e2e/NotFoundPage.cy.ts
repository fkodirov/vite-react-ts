/// <reference types="cypress" />
describe('NotFound page', () => {
  it('displays a 404 error message', () => {
    cy.visit('/nonexistent-page');
    cy.contains('Страница 404');
    cy.contains('h1');
  });
});
