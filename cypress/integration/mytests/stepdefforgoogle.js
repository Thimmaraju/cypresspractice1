import { Given, Then } from "cypress-cucumber-preprocessor/steps";



Given('I open Google page', () => {
  let url = Cypress.config().baseUrl;
  cy.visit(url);
  
  //cy.visit(Cypress.env('admin_url'))

})



Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})