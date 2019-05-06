describe('The Home Page', function() {
    it('successfully loads', function() {
        cy.visit('/');
        cy.get('h1').should('contain', 'Getting to know Cypress with Vuejs!');
        cy.get('input.hello-world').type('I Like to Move It, Move It');
        cy.get('button').click();
    });
});
