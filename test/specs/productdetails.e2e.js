const proddetail = require('../pageobjects/productDetails.page');
const LoginPage = require('../pageobjects/Authentication/login.page');

describe(' Verifies that product details are displayed. Title, price, description', () => {

    it('Should navigate to the product detail page from the product gallery homepage', async () =>{
        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        await proddetail.verifyProductDetailsPage();

    
    }); 

    

});