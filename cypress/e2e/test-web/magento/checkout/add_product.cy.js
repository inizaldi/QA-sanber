describe("Login with valid user ", () => {
  it("Valid Account Login Success", () => {
    cy.visit("");
    cy.contains("Sign In").click();
    cy.get("#email").type("buattest@gmail.com");
    cy.get("#pass").type("test123*");
    cy.get(".action.login.primary").click();
    cy.url().should("include", "https://magento.softwaretestingboard.com/");
    cy.get(":nth-child(2) > .greet > .logged-in");
    cy.contains("Radiant Tee").click();
    cy.url().should(
      "include",
      "https://magento.softwaretestingboard.com/radiant-tee.html"
    );
    cy.get("#option-label-size-143-item-168").click();
    cy.get("#option-label-color-93-item-57").click();
    cy.get("#qty").clear();
    cy.get("#qty").type("2");
    cy.contains("Add to Cart").click();
    cy.get(".showcart").click();
    cy.contains("You added Radiant Tee to your shopping cart.").should(
      "be.visible"
    );
  });
});
