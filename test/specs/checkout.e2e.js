const LoginPage = require('../pageobjects/Authentication/login.page');
const addtocart = require('../pageobjects/addtocart.page');
const cartview = require('../pageobjects/cart.page');
//const checkoutpage = require ('../pageobjects/checkout.page');
const checkoutPage = require('../pageobjects/checkout.page');

//import { browser, expect } from '@wdio/globals';
//import { browser, $, $$, expect } from '@wdio/globals'
//const SecurePage = require('../pageobjects/secure.page')
/*
users
1: test@mailinator.com , Stephanie1!
*/


describe('My checkout  test ', () => {

    it('should login to the application (if necessary), add an item to the cart and complete the checkout flow ', async () => {
        // await browser.deleteCookies() ;
        // cookies = await browser.getCookies();

        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.pause(2000);
        expect( browser.url('https://ui-automation-camp.vercel.app/products'));
        await addtocart.addSingleItem1();
        await browser.pause(2000);
        await checkoutPage.checkoutshipping("Test Jay","test@mailinator.com","address_Full_match", "678","Chicago","New brunswick","10");
        //const paymentbox =  $(".snipcart-payment-card-form snipcart-payment-card-form--loaded > iframe");
        await browser.switchToFrame(checkoutPage.paymentiframe);
        await browser.pause(3000);
        await checkoutPage.checkoutpayment();
        await browser.pause(2000);
        
        
    });
    
   


    
});
