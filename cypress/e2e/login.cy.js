
describe("The Login page", () => {
  beforeEach(() => {

    cy.visit("https://www.saucedemo.com/");
    cy.get(".login_logo").should("be.visible");
  
  });

  it("Login Successfull", () => {
    cy.loginCredentials();
  });
});
