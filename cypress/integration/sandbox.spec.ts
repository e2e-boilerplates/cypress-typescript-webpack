describe("Sandbox", () => {
  before(() => {
    cy.visit("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    cy.title().should("eq", "Sandbox");
    cy.get("h1").should("have.text", "Sandbox");
  });
});
