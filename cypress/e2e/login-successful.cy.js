describe("The Login page", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get(".login_logo").should("be.visible");
  });

  it("Successful Login", () => {
    cy.login({ username: "standard_user", password: "secret_sauce" });
    cy.get(".app_logo").should("have.text", "Swag Labs");
  });
});
