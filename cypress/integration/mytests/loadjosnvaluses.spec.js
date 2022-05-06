// type definitions for Cypress object "cy"
// <reference types="cypress" />

import userdetails from '../../fixtures/example.json';

describe('Automation Test Suite - Fixtures', function () {


  
    it('Cypress Test Case - Understanding Fixtures', function () {
  
      
      cy.visit('https://shop.demoqa.com/my-account/');
      cy.wait(5000)
      cy.enterText('#reg_username', userdetails.Username)
      cy.wait(5000)
      cy.get('#reg_email').type(userdetails.Email);
      cy.wait(5000)
      cy.get('#reg_password').type(userdetails.Password)
      cy.wait(5000)
  
      //Checking whether the Register button is disabled or not either by grabbing the property or by checking its UI behavior
      cy.get('.woocommerce-Button').should('have.attr', 'disabled', 'disabled');
      //or
      cy.get('.woocommerce-Button').should('be.disabled');
       cy.wait(5000)
      // Clicking on to register on the Website by entering new password 

      //cy.get('#reg_password').clear();
      cy.wait(10000)

      //1000ms=1sec

      cy.get('#reg_password').type(userdetails.NewPassword);
      cy.wait(5000)
      cy.get('.woocommerce-Button').click();
  
      //Checking whether the Registration is successful and whether UserName is populated under login section
      cy.get('#username').should('have.value', userdetails.Username);

      //or 
      cy.get('#username').should('have.attr', 'value', 'aashishk7');
    })


  })