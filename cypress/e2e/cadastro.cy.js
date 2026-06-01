/// <reference types="cypress"/>

describe('Funcionalidade: Cadastro no HUB de Leitura', () => {
    
  beforeEach(() => {
     cy.visit("register.html")
  });

 it('Deve fazer cadastro com sucesso', () => {
    let email = `teste${Date.now()}@teste.com`
    cy.get('#name').type("Anderson Moraes")
    cy.get('#email').type(email)
    cy.get('#phone').type("85999999999")
    cy.get('#password').type("Senha@123")
    cy.get('#confirm-password').type("Senha@123")
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    //Resultado esperado
    cy.url().should('include', 'dashboard')
 });


});