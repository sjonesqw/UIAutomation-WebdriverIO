const LoginPage = require('../pageobjects/Authentication/login.page');
const addtocart = require('../pageobjects/addToCart.page');
const cartview = require('../pageobjects/cart.page');
const checkoutPage = require('../pageobjects/checkout.page');


/*
users
1: test@mailinator.com , Stephanie1!
*/


describe('My checkout  test ', () => {

    it('should login to the application (if necessary), add an item to the cart and complete the checkout flow ', async () => {
        
        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.pause(2000);
        await expect( browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        await addtocart.addSingleItem1();
        await browser.pause(2000);
        await checkoutPage.checkoutshipping("Test Jay","test@mailinator.com","address_Full_match", "678","Chicago","New brunswick","10");
        await browser.switchToFrame(checkoutPage.paymentiframe);
        await browser.pause(3000);
        await checkoutPage.checkoutpayment();
        await browser.pause(2000);
        
        
    });
    
   


    
});
