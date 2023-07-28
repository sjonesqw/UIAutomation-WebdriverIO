const loginPage = require('../pageobjects/Authentication/login.page');
const addToCart = require('../pageobjects/addtocart.page');
const cartView = require('../pageobjects/cart.page');




describe('My cart view test ', () => {

    it('should login to the application, add an item to the cart, navigate to the cart increase and decrease the quantity, then delete item from cart', async () => {
        await loginPage.open();
        await loginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.pause(2000);
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        //add a single item to the cart
        await addToCart.addSingleItem1();
        //navigate to the detail cart viewn and chage the quantity of the item using the plus/minus buttons
        await cartView.changeQuantity();
        //verify that the product title and description are displayed
        await expect(cartView.productTitle).toHaveTextContaining("Quality Fitted Hat");
        await expect (cartView.productDescription).toHaveTextContaining("3 Pack Unisex Vintage Washed Distressed Baseball-Cap");
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products#/cart');
        //delete the item from the cart
        await cartView.viewAndDeleteFromDetail();
        await browser.pause(2000);
        //verify that text id displayed indicating that the cart is empty
        await expect(cartView.emptyCart).toHaveTextContaining("Your cart is empty");

        
        
    });

    


    
});