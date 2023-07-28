const LoginPage = require('../pageobjects/Authentication/login.page');
const addtocart = require('../pageobjects/addToCart.page');
const cartview = require('../pageobjects/cart.page');




describe('My cart view test ', () => {

    it('should login to the application, add an item to the cart, navigate to the cart increase and decrease the quantity, then delete item from cart', async () => {
        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.pause(2000);
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        await addtocart.addSingleItem1();
        await cartview.changeQuantity();
        await expect(cartview.productTitle).toHaveTextContaining("Quality Fitted Hat");
        await expect (cartview.productDescription).toHaveTextContaining("3 Pack Unisex Vintage Washed Distressed Baseball-Cap");
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products#/cart');
        await cartview.viewAndDeleteFromDetail();
        await browser.pause(2000);
        await expect(cartview.emptyCart).toHaveTextContaining("Your cart is empty");

        
        
    });

    


    
});
