describe("The Login page",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/")
    })
    it("Successful Login",()=>{
        cy.get("#user-name").type("standard_user").should("have.value", "standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").should("have.value","Login").click()
        cy.get(".app_logo").should("have.text","Swag Labs")
    })

    it("Incorrect Credentials Error Message", ()=> {
        cy.get("#user-name").type("renato").should("have.value", "renato")
        cy.get("#password").type("password123")
        cy.get("#login-button").should("have.value","Login").click()
        cy.get().should("have.value","Epic sadface: Username and password do not match any user in this service")
    })
})