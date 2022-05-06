///<reference types="cypress"/>

import loginPage from '../PageObjects/ClientApp/loginPage'

const login = new loginPage()

describe("Orange HRM Tests",() =>{

    beforeEach('Login module', () => {

        //cy.viewport('iphone-6', 'landscape');


        cy.visit(Cypress.env('clienturl'))


        //
    })

    it.only("login test- Valid credentials ", () =>{

      
        cy.login("Admin", "admin123")
        cy.url().should('include', '/index.php/dashboard');
     
    })

    it.only("login test - witr wrong password", () =>{

        
        cy.login("Admin", "admindflkmdlkvkljdsnfv123")
        cy.get(login.errorMessage()).should('be.visible')
    })

    it("login test - with wrong username ", () =>{

        
        cy.login("lewfwemjf", "owehfiuhweoif")
        cy.get(login.errorMessage()).should('be.visible')
        // ctrl + K + c
        // ctrl + K + u
    })

    // it("login test - with invalid username and inavlaid password", () =>{

    //     cy.visit("https://opensource-demo.orangehrmlive.com/");
    //     cy.get("#txtUsername").type("dfsdsf");
    //     cy.get("#txtPassword").type("rra7tge");
    //     cy.get("#btnLogin").click();
    //     cy.get("#spanMessage").should('be.visible')
    // })

    // it("login test - blanks ", () =>{

    //     cy.visit("https://opensource-demo.orangehrmlive.com/");
    //     cy.get("#txtUsername").type("");
    //     cy.get("#txtPassword").type("");
    //     cy.get("#btnLogin").click();
    //     cy.get("#spanMessage").should('be.visible')
    // })


})


//Chai
//Mocha framework

//Framework
// Reusable 
// any should understand
// test management 

//variables 
// let var const 

//2 urls

//Admin app  admin.xyz.com
//User app   qa.xyz.com