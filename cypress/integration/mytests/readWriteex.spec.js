
///<reference types="cypress"/>

describe('Example for writeFile and readFile', function () {

    it('Write to a text file test1.txt using writeFile', function () {
        cy.writeFile('cypress/fixtures/test1.txt', 'Thimmaraju\n')
    })

    it('Append content to the end of the text file test1.txt using the flag a+', function () {
        cy.writeFile('cypress/fixtures/test1.txt', 'DBS Tech Solutions', { flag: 'a+' })
    })

    it('Write to a JSON file test2.json using writeFile', function () {
        cy.writeFile('cypress/fixtures/test2.json', { firstname: 'G', lastname: 'Thimmaraju' })
    })

    it('Validate the content of both text and JSON file using readFile', function () {
        cy.readFile('cypress/fixtures/test1.txt').should('contain', 'Thimmaraju')
        cy.readFile('cypress/fixtures/test1.txt').should('eq', 'Thimmaraju\nDBS Tech Solutions')
        cy.readFile('cypress/fixtures/test2.json').its('lastname').should('eq', 'Thimmaraju')
    })
   
})