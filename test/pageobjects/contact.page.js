
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class contact extends Page {
    /**
     * define selectors using getter methods
     *  
     */
    get contactBtn (){
        return $('#top-contact');
        
    }
    get fname (){
        
        return $('#firstName');
    }
    get lname (){
        return $('input[name="lastName"]');
    }
    get emailField (){
        return $('input[name="email"]');
    }
    get subject (){
        return $('#subject');
    }
    get message (){
        return $('#message');
    }
    get sendMssgBtn (){
        return $('button[class="chakra-button css-vs0e4t"]');
    }

    get linkedIn(){
        
        return $('//a[@href="https://www.linkedin.com/company/qualityworks-consulting-group-llc"]');

    }
    get twitter (){
        return $('//a[@href="https://twitter.com/qualityworkscg"]');
    }

    get email (){
        return $('//p[normalize-space()="info@qualityworkscg.com"]');
    }
    get toast(){
        return $('#toast-1 > div');
    }


    


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async linkedInCheck () {
        
        await this.linkedIn.waitForDisplayed(1500);
        await this.linkedIn.click();
        await browser.pause(2000);
        await browser.switchWindow("linkedin.com");
           
        
    }

    async twitterCheck (){
        
        await this.twitter.waitForDisplayed(1500);
        await this.twitter.click();
        await browser.pause(2000);
       await browser.switchWindow("twitter.com");
           
         
    }

    async contactForm (name1, name2, email, subject, message) {
        
        await this.fname.waitForDisplayed(1500);
        await this.fname.click();
        await this.fname.setValue(name1);
        await this.lname.setValue(name2);
        await this.emailField.setValue(email);
        await this.subject.setValue(subject);
        await this.message.setValue(message);
        await this.sendMssgBtn.click();
        
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/products');
        
    }
}

module.exports = new contact();