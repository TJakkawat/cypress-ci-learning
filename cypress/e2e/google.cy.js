describe("Google Search", () => {
  beforeEach(() => {
    cy.visit("https://www.google.com");
  });

  it("should display Google homepage correctly", () => {
    cy.title().should("eq", "Google");

    cy.get("textarea[name='q']")
      .should("be.visible")
      .and("have.attr", "name", "q");
  });

  it("should allow user to type in search box", () => {
    cy.get("textarea[name='q']")
      .should("be.visible")
      .type("Cypress Testing");

    cy.get("textarea[name='q']")
      .should("have.value", "Test Cypress Testing");
  });
});