import {inViewport} from "../support/inViewport";

describe('other tests', () => {

    before(() => {
        chai.use(inViewport);
    });

    // Looks like it assertions on :selected psuedoselector 
    // https://github.com/chaijs/chai-jquery#selected
    it("tabs selection state can be asserted on", () => {

        cy.visit('http://localhost:3000');

        cy.findByText("home page").should("exist");

        cy.findByRole("link", {
            name: "Tabs"
        }).click();




        // Does not work 
        //https://github.com/chaijs/chai-jquery/issues/114
        // cy.findByRole("tab", {
        //     name: "foo"
        // }).should("exist").and("be.selected");

        cy.findByRole("tab", {
            name: "foo"
        }).should("exist").and("have.attr", "aria-selected", "true");

    });



    it.only("sticky behaviour is ok", () => {
        cy.visit('http://localhost:3000');
        cy.findByRole("link", {
            name: "Form"
        }).click();

        new Array(20).fill(true).forEach((v, i) => {

            const itemName = `item ${i}`; 
            cy.findByRole("textbox", {
              name: "Enter Text"
            }).type(itemName); 
      
            cy.findByRole("button", {
              name: "Submit"
            }).click();
      
            cy.findByText(itemName).should('exist');
          });
          

        cy.scrollTo("bottom");
        cy.findByText("item 19").should("to.be.inViewport");
        cy.findByText("item 0").should("not.be.inViewport");

    }); 
}); 