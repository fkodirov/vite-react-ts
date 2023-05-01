/// <reference types="cypress" />

describe('Main Page', () => {
  it('should display products when page is loaded', () => {
    cy.visit('/');
    cy.get('.cards').children().should('have.length.above', 0);
  });

  it('should display search results when searching for a product', () => {
    cy.visit('/');
    cy.get('input[type=search]').type('iphone');
    cy.get('.cards').children().should('have.length.above', 0);
  });

  it('should open a modal when a product is clicked', () => {
    cy.visit('/');
    cy.get('.card').first().click();
    cy.get('.modal').should('exist');
  });

  it('should close the modal when clicking the close button', () => {
    cy.visit('/');
    cy.get('.card').first().click();
    cy.get('.modal').should('exist');
    cy.get('.modal-close').click();
    cy.get('.modal').should('not.exist');
  });
});
