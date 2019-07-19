import { getGreeting } from '../support/app.po';

describe('eth-token-gallery', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to eth-token-gallery!');
  });
});
