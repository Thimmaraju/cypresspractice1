///<reference types="cypress"/>

describe('Test Alerts in herokuapp', () => {

    before(() => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })

    it('Test simple alert', () => {


        cy.contains('Click for JS Alert').click()
        cy.on('window:alert',(text)=>{
            expect(text).equal('I am a JS Alert')
        })
     
    })

    it('Test Confirm alert', () => {


       cy.contains('Click for JS Confirm').click()
       cy.on('window:confirm', ()=>{
        return false
    })
    
        
    })

    it('Test Prompt alert', () => {

        cy.window().then(($win)=>{

            cy.stub($win, 'prompt').returns('Raju G')
        })

        cy.contains('Click for JS Prompt').click();

    })
})


// bdd 

//Given - when - then 

//specflow

//jbehave

// cucumber - Java 
// Cypress with Cucumber using Javascript 


// Test 

//decribe - Suite  and it - Test blocks

//feature file 