
///<reference types="cypress"/>

describe('The RightClick Command',() => {
    it('visit the site, perform various clicks',()=>{
        cy.visit('https://www.programsbuzz.com/')
        cy.contains('Start Learning').rightclick();
        cy.wait(2000)
        cy.contains('Tutorials').trigger('mouseover');
        cy.wait(3000)
        cy.contains('Start Learning').dblclick();
    })
})