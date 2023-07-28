const loginPage = require('../pageobjects/Authentication/login.page');
const addToCart = require('../pageobjects/addtocart.page');
const cartView = require('../pageobjects/cart.page');
const checkoutPage = require('../pageobjects/checkout.page');

/* 
users
1: test@mailinator.com , Stephanie1!
*/


describe('My checkout  test ', () => {

    it('should login to the application, add an item to the cart and complete the checkout flow ', async () => {
       
        await loginPage.open();
        await loginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.pause(2000);
        await expect( browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        //add a single item to the cart
        await addToCart.addSingleItem1();
        await browser.pause(2000);
        //inititate checkout flow annd enter shipping information
        await checkoutPage.checkoutshipping("Test Jay","test@mailinator.com");
        //const paymentbox =  $(".snipcart-payment-card-form snipcart-payment-card-form--loaded > iframe");
        await browser.switchToFrame(checkoutPage.paymentiframe);
        await browser.pause(3000);
        await checkoutPage.checkoutpayment();
        await browser.pause(2000);
        
        
    });
    
   


    
});
