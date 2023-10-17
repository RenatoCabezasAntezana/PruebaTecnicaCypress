Cypress.Commands.add('login',({username,password})=>{
       cy.get("#user-name")
      .should("have.attr", "placeholder", "Username")
      .type(username)
      .should("have.value", username);
    cy.get("#password")
      .should("have.attr", "placeholder", "Password")
      .type(password);
      cy.get("#login-button").should("have.value", "Login").click();
})

Cypress.Commands.add('loginData',()=>{
    cy.fixture("loginData").then((data) => {
        const { usernameSuccessfull, passwordSuccessfull } = data;
        cy.get("#user-name").type(`${usernameSuccessfull}`); 
        cy.get("#password").type(`${passwordSuccessfull}`); 
        cy.get("#login-button").click();
      });
})