describe("Fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals"); //před každým blokem projede tenhle cyklus
    it("Contains correct header text", () => {});
    cy.getDataTest("fundamentals-header").should(
      "contain.text",
      "Testing Fundamentals"
    ); //custom commands- vytvoření vlasního příkazu v suport/commands.js
  });

  it("Accordion works correctly", () => {
    cy.contains("Your tests will exist in a describe block").should(
      "not.be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains("Your tests will exist in a describe block").should(
      "be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains("Your tests will exist in a describe block").should(
      "not.be.visible"
    );
  });
});
