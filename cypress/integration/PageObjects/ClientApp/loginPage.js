class loginPage {


    loginmethodvalid(){

        cy.xpath(this.usernameinput()).type("Admin");
        cy.xpath(this.passwordinput()).type("admin123");
        cy.xpath(this.loginBtn()).click();
    }

    conflict(){

        //xyz
    }
    loginmethodvalid(){

        cy.xpath(this.usernameinput()).type("Admin");
        cy.xpath(this.passwordinput()).type("admin123");
        cy.xpath(this.loginBtn()).click();
        /kfnkjewnfkj
    }

    loginmethodinvalid(){

        cy.xpath(this.usernameinput()).type("Admin");
        cy.xpath(this.passwordinput()).type("rra7tge");
        cy.xpath(this.loginBtn()).click();
    }

    usernameinput() {

        return "//input[@id='txtUsername']";
    }

    passwordinput() {

        return '//input[@id="txtPassword"]';
    }

    loginBtn(){

        return "//input[@id='btnLogin']";
    }

    errorMessage(){

        return "#spanMessage"
    }

}

export default loginPage

//Fixtures 

// Analysis 
//At least execute manually 
// Page Objects 
   //-- Locate elements 
//Scripting 
// 3 to 4 times 
// Done 
