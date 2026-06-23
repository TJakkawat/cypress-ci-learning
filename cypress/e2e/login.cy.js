describe("Login Demo", () => {
  beforeEach(() => {
    cy.visit("https://tjakkawat.github.io/demo-web-app/app");
  });

  it("should login successfully", () => {
    cy.get("#username").type("tester");
    cy.get("#password").type("password123");
    cy.get("#login-button").click();

    cy.get("#message").should("contain", "Login Success");
  });
});