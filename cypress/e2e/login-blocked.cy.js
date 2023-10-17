describe("The Login page", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get(".login_logo").should("be.visible");
  });

  it("User blocked", () => {
    cy.login({ username: "locked_out_user", password: "secret_sauce" });
    
    cy.get("[data-test='error']").should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
