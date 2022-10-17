import "/cypress/fixtures/mockUser";

describe("mock user tests", () => {
  it("mock user fixture data", () => {
    cy.visit("http://localhost:3000");
    cy.findByText("home page").should("exist");

    cy.findByRole("link", {
      name: "Users",
    }).click();

    cy.intercept(
      { method: "GET", path: "/users" },
      { fixture: "mockUser.json" }
    ).as("getData"); // mock data

    cy.findByText("home page").should("not.exist");
    cy.findByText("foo").should("exist");
  });
});
