const productDetail = require('../pageobjects/productDetails.page');
const loginPage = require('../pageobjects/Authentication/login.page');

describe(' Verifies that product details are displayed. Title, price, description', () => {

    it('Should navigate to the product detail page from the product gallery homepage', async () =>{
        await loginPage.open();
        //login to the website
        await loginPage.login("test@mailinator.com", "Stephanie1!");
        //verify that you're on the products page
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        //call the product details test
        await productDetail.verifyProductDetailsPage();

    
    }); 

    

});