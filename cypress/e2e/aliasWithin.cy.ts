export const foo = {}; 

describe("alian within test", () => {
    it("This does not work", function()  {

        cy.visit('http://localhost:3000');

        cy.findByRole("link", {
            name: "Input"
        }).click();


        cy.get("#some-container").within(function() {
            cy.get("#some-text").invoke('text').as("foo")
        }); 


        cy.get("#enter-text").type(this.foo)
    }); 

    it("This does", function()  {

        cy.visit('http://localhost:3000');

        cy.findByRole("link", {
            name: "Input"
        }).click();


        cy.get("#some-text").invoke('text').as("foo")
        cy.get("#enter-text").type(this.foo)
    }); 

    it("This won't work, as the input is not within the #some-container ", function()  {

        cy.visit('http://localhost:3000');

        cy.findByRole("link", {
            name: "Input"
        }).click();


        cy.get("#some-container").within(function() {
            cy.get("#some-text").invoke('text').as("foo"); 
            cy.get("#enter-text").type(this.foo)

        }); 


    }); 
})