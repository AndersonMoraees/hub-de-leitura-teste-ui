/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import CadastroPage from '../support/pages/cadastro-page';

describe('Funcionalidade: Cadastro no HUB de Leitura', () => {

    beforeEach(() => {
        CadastroPage.visitarPaginaCadastro()
    });

    afterEach(() => {
        cy.screenshot()
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
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('85999999978')
        cy.get('#password').type("Senha@123")
        cy.get('#confirm-password').type("Senha@123")
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });

    it('Deve preencher cadastro com sucesso - Usando comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`
        let nome = faker.person.fullName()
        cy.preencherCadastro(nome, email, '85999999978', 'Teste@123', 'Teste@123')
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer cadastro com sucesso - Usando Page Objects', () => {
        let email = `teste${Date.now()}@teste.com`
        CadastroPage.preencherCadastro('ANderson Moraes', email, '85999999978', 'senha123', 'senha123')
        cy.url().should('include', 'dashboard')
    });

    it('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {
        CadastroPage.preencherCadastro('','anderson@teste.com', '85999999978', 'senha123', 'senha123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
    })

});