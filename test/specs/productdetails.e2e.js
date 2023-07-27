const proddetail = require('../pageobjects/productDetails.page');
const LoginPage = require('../pageobjects/Authentication/login.page');

describe(' Verifies that all header links on the product gallery homepage work ', () => {

    it('Should navigate to the favourites page from the product gallery homepage', async () =>{
        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        await proddetail.verifyProductDetailsPage();

    
    }); 

    

});