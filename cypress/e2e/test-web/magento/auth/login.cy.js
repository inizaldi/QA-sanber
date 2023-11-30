describe("Login with valid user ", () => {
  it.only("Valid Account Login Success", () => {
    cy.visit("");
    cy.contains("Sign In").click();
    cy.get("#email").type(Cypress.env("Valid_email"));
    cy.get("#pass").type(Cypress.env("Valid_password"));
    cy.get(".action.login.primary").click();
    cy.url().should("include", "https://magento.softwaretestingboard.com/");
    cy.get(":nth-child(2) > .greet > .logged-in");
  });
  it("Invalid Account Login Success", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.contains("Sign In").click();
    cy.get("#email").type("buatest@gmail.com");
    cy.get("#pass").type("test23*");
    cy.get(".action.login.primary").click();
    cy.url().should("include", "https://magento.softwaretestingboard.com/");
    // cy.contains("Invalid Form Key. Please refresh the page").should(
    //   "be.visible"
    // );
  });
});
