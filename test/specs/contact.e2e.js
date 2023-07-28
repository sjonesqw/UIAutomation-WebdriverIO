const loginPage = require('../pageobjects/Authentication/login.page');
const contact = require('../pageobjects/contact.page');


describe('My contact page test ', () => {

    

    it(' should naviagate to the contact page and verify that social media links work and the user is able to submit the contact form', async () => {
        

        await loginPage.open();
        await loginPage.login("test@mailinator.com", "Stephanie1!");
        await expect( browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        await contact.contactBtn.click();
        //call the function to complete contact form
        await contact.contactForm ("Steph","jo","test@mailinator.com","Testing 123","I hope this tests works");
        //verify that confirmation toast is displayed
        await expect (contact.toast).toHaveTextContaining(["Message Sent!", "Your message has been sent!"]);
        await browser.pause(1500);
        //linkedin validation
        await contact.linkedInCheck();
        await expect (browser).toHaveUrlContaining('linkedin');
        //switch back to website tab
        await browser.switchWindow("https://ui-automation-camp.vercel.app/contact");
        //twitter validation
        await contact.twitterCheck();
        await expect (browser).toHaveUrlContaining('twitter');
        
        
        
        
    });

    
});