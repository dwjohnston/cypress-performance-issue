import { todos } from "cypress/fixtures/todos";

export const foo = {}; 

describe('empty spec', () => {


  // Just a basic sanity test
  it('passes', () => {
    cy.visit('http://localhost:3000');

    cy.findByText("home page").should("exist");

    cy.findByRole("link", {
      name: "Users"
    }).click(); 


    cy.findByText("home page").should("not.exist"); 
    cy.findByText("Leanne Graham").should("exist");

    cy.findByRole("link", {
      name: "Todos"
    }).click(); 

    cy.findByText("Leanne Graham").should("not.exist");

    cy.findByText("delectus aut autem").should("exist");
   
  }); 


  it("A longer running test 2", () => {
    cy.visit('http://localhost:3000');
    cy.findByRole("link", {
      name: "Form"
    }).click(); 


    new Array(300).fill(true).map((v) => {

      const random = `${Math.random()}`; 
      cy.findByRole("textbox", {
        name: "Enter Text"
      }).type(random); 

      cy.findByRole("button", {
        name: "Submit"
      }).click();

      cy.findByText(random).should('exist');
    });

  })


  // This approach fails to reproduce the issue
  it.skip("A longer running test 2", () => {
    cy.visit('http://localhost:3000');
    cy.findByRole("link", {
      name: "Todos"
    }).click(); 


    todos.forEach((v) => {
      cy.findByRole("button", {
        name: v.title
      }).click(); 

      cy.findByText(v.title +" is clicked").should('exist');
    }); 
  })

  // This strategy runs into redirection limit, which isn't the problem
  it.skip("A longer running test", () => {

    cy.visit('http://localhost:3000');

    cy.findByText("home page").should("exist");



    new Array(100).fill(true).forEach((v) => {
      cy.findByRole("link", {
        name: "Users"
      }).click(); 
  
  
      cy.findByText("delectus aut autem").should("not.exist");

      cy.findByText("Leanne Graham").should("exist");
  
      cy.findByRole("link", {
        name: "Todos"
      }).click(); 
  
      cy.findByText("Leanne Graham").should("not.exist");
  
      cy.findByText("delectus aut autem").should("exist");
    }); 



  })



})