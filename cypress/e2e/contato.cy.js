describe('Funcionalidade: Contato', () => {

   beforeEach(() => {
    cy.visit("index.html")
   });

   it('Deve preencher formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type("Anderson Moraes")
    cy.get('[name="email"]').type("anderson@teste.com")
    cy.get('[name="subject"]').select("Sugestões")
    cy.get('[name="message"]').type("Sugestão de melhoria")
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.contains("Contato enviado com sucesso!").should("exist")
  });

   it('Deve validar mensagem de erro ao enviar sem preencher nome', () => {
    cy.get('[name="email"]').type("anderson@teste.com")
    cy.get('[name="subject"]').select("Sugestões")
    cy.get('[name="message"]').type("Sugestão de melhoria")
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should("contain", "Por favor, preencha o campo Nome.")
  });

   it('Deve validar mensagem de erro ao enviar sem preencher email', () => {
    cy.get('[name="name"]').type("Anderson Moraes")
    cy.get('[name="subject"]').select("Sugestões")
    cy.get('[name="message"]').type("Sugestão de melhoria")
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should("contain", "Por favor, preencha o campo E-mail.")
  });

   it('Deve validar mensagem de erro ao enviar sem selecionar assunto', () => {
    cy.get('[name="name"]').type("Anderson Moraes")
    cy.get('[name="email"]').type("anderson@teste.com")
    cy.get('[name="message"]').type("Sugestão de melhoria")
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should("contain", "Por favor, selecione o Assunto.")
  });

   it('Deve validar mensagem de erro ao enviar sem preencher a mensagem', () => {
    cy.get('[name="name"]').type("Anderson Moraes")
    cy.get('[name="email"]').type("anderson@teste.com")
    cy.get('[name="subject"]').select("Sugestões")
    cy.get('#btn-submit').click()
    //Resultado esperado
    cy.get('#alert-container').should("contain", "Por favor, escreva sua Mensagem.")

  });
});