describe("create an Account", () => {
  it("Create an account success", () => {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.contains("Create an Account").click();
    cy.get("#firstname").type("Buatngetest");
    cy.get("#lastname").type("aja");
    cy.get("#email_address").type("buattest@gmail.com");
    cy.get("#password").type("test123*");
    cy.get("#password-confirmation").type("test123*");
    cy.get(".action.submit.primary").click();
    cy.url().should("include", "/customer/account/");
    cy.contains("Thank you for registering with Main Website Store.").should(
      "be.visible"
    );
  });
});
