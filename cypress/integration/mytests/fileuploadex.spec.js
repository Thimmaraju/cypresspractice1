describe('Tutorialspoint Test', function () {
   // test case
   it('Test - file upload', function () {
      //file to be uploaded path in project folder
      //const p = 'upload/test1.txt'
      // launch URL
      cy.visit("https://the-internet.herokuapp.com/upload")
      //upload file with attachFile
      cy.get('#file-upload').attachFile("test1.txt")
      //click on upload
      cy.get('#file-submit').click()
      //verify uploaded file
      cy.get('#uploaded-files').contains('test1')
   });

   it('Test file download', function () {

      cy.downloadFile('https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80', 'cypress/Prasad/Downloads', 'cypress-example.jpg')
      cy.readFile("./Downloads/cypress-example1.jpg")
   });
});