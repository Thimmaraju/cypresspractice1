const { Context } = require("mocha");

describe("visiting webpage using cypress", () => {


    before(function () {
      cy.log("before All - once ");
      });


    after(function () {
      cy.log( "after All - once" );
    });


    beforeEach(function () {
      cy.log("before each - It block" );
    });


    afterEach(function () {
      cy.log("after each - It block" );
    });


    it.skip("should visit the page - 1st it block", () => {
      cy.log("1st it block");
      cy.visit("https://www.google.com/");
    });

    it.only("dummy block - 2nd it block", () => {
      cy.log("2nd IT block");
    });

    it.only("dummy block - 3rd it block", () => {
        cy.log("3rd IT block");
      });
  });


  context("visiting webpage using cypress -2 ", () => {


    before(function () {
      cy.log("before All - once ");
      });


    after(function () {
      cy.log( "after All - once" );
    });


    beforeEach(function () {
      cy.log("before each - It block" );
    });


    afterEach(function () {
      cy.log("after each - It block" );
    });


    specify("should visit the page - 1st it block", () => {
      cy.log("1st it block");
      cy.visit("https://www.google.com/");
    });

    it("dummy block - 2nd it block", () => {
      cy.log("2nd IT block");
    });

    it("dummy block - 3rd it block", () => {
        cy.log("3rd IT block");
      });
  });

  //one time 
  //environment variable