describe("The Login page", () => {

  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get(".login_logo").should("be.visible");
  });
  
  it("Incorrect Credentials Error Message", () => {
    cy.login({ username: "Renato", password: "sdasd123" });
    cy.get("[data-test='error']").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
  
});
