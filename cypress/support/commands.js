Cypress.Commands.add("loginpass", (email, pass) => {
  cy.contains("Log in").click();
  if (email) cy.get("#mail").type(email);
  if (pass) cy.get("#pass").type(pass);
  cy.contains("Submit").click();
});

Cypress.Commands.add("bookadding", (title, description, author) => {
  cy.contains("Add new").click();
  if (title) cy.get("#title").type(title);
  if (description) cy.get("#description").type(description);
  if (author) cy.get("#authors").type(author);
  cy.contains("Submit").click();
});
