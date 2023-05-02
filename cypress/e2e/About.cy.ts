/// <reference types="cypress" />
describe('AboutPage', () => {
  it('renders correctly', () => {
    cy.visit('/about');
    cy.contains('Страница about');
    cy.contains(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quis labore mollitia quas debitis eum necessitatibus eius at itaque perferendis, quam dolor nemo corrupti quibusdam id quisquam, blanditiis quidem tempora.'
    );
  });
});
