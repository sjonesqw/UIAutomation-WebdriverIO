const LoginPage = require('../pageobjects/Authentication/login.page');
const contact = require('../pageobjects/contact.page');


describe('My contact page test ', () => {

    

    it(' should naviagate to the contact page and verify that social media links work and the user is able to submit the contact form', async () => {
        

        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await expect( browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        await contact.contactBtn.click();
        await contact.contactForm ("Steph","jo","test@mailinator.com","Testing 123","I hope this tests works");
        await expect (contact.toast).toHaveTextContaining(["Message Sent!", "Your message has been sent!"]);
        //await browser.pause(3000);
        await contact.linkedInCheck();
        await expect (browser).toHaveUrlContaining('linkedin');
        await browser.switchWindow("https://ui-automation-camp.vercel.app/contact");
        await contact.twitterCheck();
        await expect (browser).toHaveUrlContaining('twitter');
        
        
        
        
    });

    
});