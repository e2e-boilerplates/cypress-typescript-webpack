describe("google search", () => {
  before(() => {
    cy.visit("https://www.google.com");
  });

  it("should be on google search page", () => {
    cy.title().should("eq", "Google");
  });

  it(`should search for Cheese!`, () => {
    cy.fixture("data").should(d => {
      cy.get(".gLFyf.gsfi").type(`${d.searchWord}{enter}`);
    });
  });

  it(`the page title should start with Cheese!`, () => {
    cy.fixture("data").should(d => {
      cy.title().should("contain", d.searchWord);
    });
  });
});
