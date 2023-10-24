/// <reference types="cypress" />

describe ('My First Test', () => {
    it('visit the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')
    });
});
