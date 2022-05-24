///<reference types="cypress"/>

describe('Checkboxes', () => {
    beforeEach(() => {
      cy.visit('https://bit.ly/3vswFBe')
    })
  //Raju
    it('checks all checkboxes with one command', () => {
      cy.get('#check input[type="checkbox"]')
        .as('checkboxes')
        .check()
  
      cy.get('@checkboxes')
        .each(checkbox => {
          expect(checkbox[0].checked).to.equal(true)
        })

        //Raju
    })
  })