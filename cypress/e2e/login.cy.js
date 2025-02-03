import loginData from "../fixtures/loginData.js";

describe("Login Feature", () => {
  beforeEach(() => {
    cy.visit("/"); // Uses baseUrl from cypress.config.js
  });

  it("should successfully log in with valid credentials", () => {
    cy.login(loginData.validUser.username, loginData.validUser.password);
    cy.get("#inventory_container").should("be.visible"); // Verify successful login
  });

  it("should show an error message for invalid credentials", () => {
    cy.login(loginData.invalidUser.username, loginData.invalidUser.password);
    cy.get(".error-message-container").should("contain", "Epic sadface: Username and password do not match any user in this service"); // Verify error message
  });
});
