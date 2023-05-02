/// <reference types="cypress" />

describe('Card Component', () => {
  const product = {
    title: 'iPhone 9',
    brand: 'Apple',
    price: '549',
    rating: '4.69',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  };

  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
    cy.get('.card').first().click();
  });

  it('should display product title in modal', () => {
    cy.get('.modal .product-title').should('contain', product.title);
  });

  it('should display product brand in modal', () => {
    cy.get('.modal .info.category span:last-child').should('contain', product.brand);
  });

  it('should display product price in modal', () => {
    cy.get('.modal .info.brand span:last-child').should('contain', product.price);
  });

  it('should display product rating in modal', () => {
    cy.get('.modal .info.discount span:last-child').should('contain', product.rating);
  });

  it('should display product thumbnail in modal', () => {
    cy.get('.modal img').should('have.attr', 'src', product.thumbnail);
  });
});
