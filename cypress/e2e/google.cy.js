describe("Google", () => {
  beforeEach(() => {
    cy.visit("https://www.google.com");
  });

  it("title should contain Google", () => {
    cy.title().should("contain", "FaceBook");
  });

  it("url should contain google", () => {
    cy.url().should("contain", "FaceBook");
  });
});