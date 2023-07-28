const loginData = require('../data/loginData');
const loginPage = require('../pageobjects/Authentication/login.page');




describe('My Login application', () => {
    for( const user of loginData){
        //loop thru the login data file and verify that for each user the appropriate messsage is displayed
        it('should login with 2 invalid credentials first, then finally the default user', async () => {
                await loginPage.open();
                await loginPage.login(user.email,user.password);
    
                if(user.username == "invalid user email"){
                    //if the invalid user email credentials are entered then the correct error message should be displayed
                     await expect (loginPage.errorMsgEmail.toHaveText(user.errormsg));
                     await expect(browser).toHaveUrlContaining('dev-mlluudmotpwoldtv.us.auth0');
                }

                else if(user.username == "invalid password"){
                    //if the invalid user password is entered then the correct error message should be displayed
                    await expect (loginPage.errorMsgGen.toHaveText("Wrong email or password."));
                    await expect(browser).toHaveUrlContaining('dev-mlluudmotpwoldtv.us.auth0');
               }

                else{
                    //if the default user (valid user) credentials are enterd, the user should login without error
                    await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
                    await loginPage.signoutBtn.waitForDisplayed(2000);
                    await loginPage.signoutBtn.click();
                    await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/');
                }
                
            
        });

    }
    
           
    
    
});