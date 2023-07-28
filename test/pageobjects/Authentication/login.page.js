const Page = require('../page');


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

   
    async login (username, password) {
        //accept credentials entered and login to the website
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
    //navigate to login or signup from the initial landing page
    async enterSite(){
        await this.enterBtn.waitForDisplayed(2000);
        await this.enterBtn.click();
    }

   
    open () {
        return super.open('');
    
    }
}

module.exports = new LoginPage();