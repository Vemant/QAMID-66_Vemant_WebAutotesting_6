describe("template spec", () => {
  context("720p resolution", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport(1280, 720);
    });

    it("Successful submit", () => {
      cy.loginpass("bropet@mail.ru", "123");
      cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
    });

    it("Empty login", () => {
      cy.loginpass(null, "123");
      cy.get("#mail").then((elements) => {
        expect(elements[0].checkValidity()).to.be.false;
        expect(elements[0].validationMessage).to.be.equal(
          "Заполните это поле."
        );
      });
    });

    it("Empty password", () => {
      cy.loginpass("bropet@mail.ru", null);
      cy.get("#pass").then((elements) => {
        expect(elements[0].checkValidity()).to.be.false;
        expect(elements[0].validationMessage).to.be.equal(
          "Заполните это поле."
        );
      });
    });
  });

  context("iphone-5 resolution", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport("iphone-8");
    });
    it("Log out", () => {
      cy.loginpass("bropet@mail.ru", "123");
      cy.contains("Log out").click();
      cy.contains("Log in").should("be.visible");
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
});
