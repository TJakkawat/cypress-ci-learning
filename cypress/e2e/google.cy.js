describe("Google", () => {
  it("visit google", () => {
    cy.visit("https://www.google.com");
    cy.title().should("contain", "Facebook");
  });
});