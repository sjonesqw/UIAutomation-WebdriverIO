const Page = require('../page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    

    get enterBtn (){    
        return $('#signInOrRegister');   
    }

    //select email field
    get enterEmail () {
        return $('//*[@id="1-email"]');
    }
    
    //select password field 
    get enterPassword () {
        return $('//input[@id="1-password"]');   
    }

    
    get btnSubmit () {
        return $('body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)');
    }
    get errorMsgGen (){
        return $('.auth0-global-message.auth0-global-message-error');
    }
    get errorMsgEmail (){
        return $('.auth0-lock-error-invalid-hint');
    }
        

    get signoutBtn(){
        return $('#top-sign-out');
        
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        
        await this.enterBtn.waitForDisplayed(2000);
        await this.enterBtn.click();
        await this.enterEmail.waitForDisplayed(2000);
        await this.enterEmail.click();
        await this.enterEmail.setValue(username);
        await this.enterPassword.waitForDisplayed(1500);
        await this.enterPassword.click();
        await this.enterPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async enterSite(){
        await this.enterBtn.waitForDisplayed(2000);
        await this.enterBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    
    }
}

module.exports = new LoginPage();