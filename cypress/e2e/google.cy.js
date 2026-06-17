describe("Google", () => {
  it("visit google", () => {
    cy.visit("https://www.google.com");
    cy.title().should("contain", "Google");
  });

  it("url should contain google", () => {
    cy.url().should("contain", "google");
  });
});