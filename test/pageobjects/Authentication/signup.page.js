const Page = require('../page');

class signupnew extends Page {
    
    get enterSite (){
        return $('//*[@id="signInOrRegister"]');
        
    }

    get signupTab (){
        return $('//a[normalize-space()="Sign Up"]');
    }

    get enterEmail () {
        
        return $('//input[@id="1-email"]');  
    }
    
    get enterPassword () {
       
        return $('//input[@id="1-password"]');
        
    }

    get btnSubmit () {
        return $('//button[@id="1-submit"]');
        
    }
    get errorMsg (){
        return $('.auth0-global-message.auth0-global-message-error');
    }
    get signoutBtn(){
        return $('#top-sign-out');
        
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async signup (username, password) {
        await  this.enterSite.click();
        await  this.signupTab.waitForDisplayed(3000);
        await  this.signupTab.click();
        await this.enterEmail.waitForDisplayed(3000);
        await this.enterEmail.setValue(username);
        await this.enterPassword.click();
        await browser.pause(1000);
        await this.enterPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
        
    }
}

module.exports = new signupnew();