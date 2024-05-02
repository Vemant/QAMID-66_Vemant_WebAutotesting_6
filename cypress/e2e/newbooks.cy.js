describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Adding new book", () => {
    cy.loginpass("bropet@mail.ru", "123");
    cy.bookadding(
      "Dead souls",
      "Text about adventures of Chichikov",
      "Nikolai Gogol"
    );
    cy.contains("Dead souls").should("be.visible");
    cy.contains("Nikolai Gogol").should("be.visible");
  });

  it("Adding to favorite", () => {
    cy.loginpass("bropet@mail.ru", "123");
    cy.bookadding("War and Peace", "Text about Napoleon Wars", "Leo Tolstoy");
    cy.contains("Add to favorite").click();
    cy.contains("Favorites").click();
    cy.contains("War and Peace").should("be.visible");
    cy.contains("Leo Tolstoy").should("be.visible");
  });
});
