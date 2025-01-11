describe("Form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Test subcribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.get("@subscribe-input").type("cascas@asdsadas.com");
    cy.contains(/Successfully subbed: cascas@asdsadas.com!/i).should(
      "not.exist"
    );
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: cascas@asdsadas.com!/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: cascas@asdsadas.com!/i).should(
      "not.exist"
    );
  });
});
