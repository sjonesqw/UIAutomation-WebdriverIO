const {faker} = require('@faker-js/faker');
const signup = require('../pageobjects/Authentication/signup.page')




describe('My Login application', () => {

    
        it('should sign up as a new user for the application with random credentials from faker', async () => {
        
            await signup.open();
            //generate a new fake email adress based on the specified first & last name 
            await signup.signup(faker.internet.email('Stephanie','jones','gmail.com'),faker.internet.password());
            await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
            await signup.signoutBtn.waitForDisplayed(2000);
            await signup.signoutBtn.click();
            await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/');
            
        });

        it('should attempt to sign up for the application with existing user credentials', async () => {
        
        
            await signup.signup("test@mailinator.com","Stephanie1!");
            await browser.pause(2000); 
            await expect (signup.errorMsg).toHaveText("WE'RE SORRY, SOMETHING WENT WRONG WHEN ATTEMPTING TO SIGN UP.");
            
        
        });
    
});