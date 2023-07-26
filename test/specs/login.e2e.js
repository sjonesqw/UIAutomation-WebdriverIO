const logindata = require('../data/logindata');
const LoginPage = require('../pageobjects/Authentication/login.page');

/*
Deafult user details
1: test@mailinator.com , Stephanie1!
*/


describe('My Login application', () => {
    for( const user of logindata){

        it('should login with 2 invalid credentials first, then finally the default user', async () => {
                await LoginPage.open();
                await LoginPage.login(user.email,user.password);
    
                if(user.username == "invalid user email"){
                     expect (LoginPage.errorMsgEmail.toHaveText(user.errormsg));
                     await expect(browser).toHaveUrlContaining('dev-mlluudmotpwoldtv.us.auth0');
                }

                else if(user.username == "invalid password"){
                    await expect (LoginPage.errorMsgGen.toHaveText("Wrong email or password."));
                    await expect(browser).toHaveUrlContaining('dev-mlluudmotpwoldtv.us.auth0');
               }

                else{
                    await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
                    await LoginPage.signoutBtn.waitForDisplayed(2000);
                    await LoginPage.signoutBtn.click();
                    await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/');
                }
                
            
        });

    }
    
           
    
    
});