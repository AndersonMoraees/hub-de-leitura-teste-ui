/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no HUB de Leitura', () => {

    beforeEach(() => {
        cy.visit("register.html")
    });

    it('Deve fazer cadastro com sucesso, usando função JS', () => {
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

    it.only('Deve fazer cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let telefone = faker.phone.number('85#########')
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type(telefone)
        cy.get('#password').type("Senha@123")
        cy.get('#confirm-password').type("Senha@123")
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        //Resultado esperado
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)

    });
});