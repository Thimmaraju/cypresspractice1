/// <reference types="cypress" />
describe('dropdown', function () {
    // it function to identify test
    it('Scenario 1', function (){
       // test step to launch a URL
       cy.visit("https://register.rediff.com/register/register.php")


       cy.get('#tblcrtac > tbody > tr:nth-child(23) > td:nth-child(3) > select:nth-child(2)').select('08').should('have.value', '08')
       //select option India with value then verify with assertion
       cy.get('select[id="country"]').select('Germany').should('have.value', '82')
    })
 })