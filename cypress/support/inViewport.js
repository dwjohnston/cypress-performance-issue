import React from "react";

export const inViewport =  _chai  => {
    function assertIsInViewport() {
        const subject = this._obj;

        const bottom = Cypress.$(cy.state('window')).height();
        const width = Cypress.$(cy.state('window')).width();
        const rect = subject[0].getBoundingClientRect();




        this.assert(
            rect.top < bottom && rect.right <= width && rect.left >= 0 && rect.bottom >= 0,
            `expected #{this} to be in the viewport ${JSON.stringify({rect, bottom, width})}`,
            `expected #{this} to not be in the viewport ${JSON.stringify({rect, bottom, width})}`,
            this._obj
        );
    }

    _chai.Assertion.addMethod('inViewport', assertIsInViewport);
}
