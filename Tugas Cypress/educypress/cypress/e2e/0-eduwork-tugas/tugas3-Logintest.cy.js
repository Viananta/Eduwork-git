/// <reference types="cypress" />

describe ('Browser actions', () => {
    it('Visit the Website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout: 10000})
        cy.url().should('include', 'login.html')
    });
    
    it('Should fill Username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('Should fill Password', () => {
        cy.get('#user_password').clear()
        cy.get('#user_password').type('your_password');
    });

    it('Should fill checkbox', () => {
        cy.get('#user_remember_me').uncheck();
        cy.get('#user_remember_me').check();
    });
});