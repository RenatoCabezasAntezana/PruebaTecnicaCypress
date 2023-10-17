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