const loginPage = require('../pageobjects/Authentication/login.page');
const cartPage = require('../pageobjects/addToCart.page');



describe('My add to cart tests. Verify that a user is able to add items to cart from the gallery page and from the product details page. Verify that a user is able to specify the number of items to add by using the arrows or entering a number in the text field', () => {

    it('should login to the application and add the first item on the page to the cart', async () => {
        await loginPage.open();
        await loginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.pause(2000);
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        // add a single item to the cart from the product gallery page
        await cartPage.addSingleItem1();
        //verify that the specified product title is displayed in the cart
        await expect(cartPage.cartItemsList).toHaveTextContaining("Quality Fitted Hat");
        //remove item from the cart
        await cartPage.rmvItem.click();
        await browser.pause(2000);
        
    });

    it('should use the arrows to increase & decrease the count of the product before adding it to the cart', async () => {
        
        await cartPage.increaseSecondItemCount(4);
        await cartPage.decreaseSecondItemCount(2);
        await cartPage.secondItemBtn.click();
        await cartPage.itemCountInCart1.waitForDisplayed();
        //verify that the correct count of the item was added to the cart 
        await expect(cartPage.itemCountInCart1).toHaveTextContaining("3");
        //verify that the product title was displayed in the cart
        await expect(cartPage.cartItemsList).toHaveTextContaining("Quality Trucker Hat");
        await cartPage.rmvItem.click();
        await browser.pause(2000);

    });
    it('should enter a number in the text field then add the item  to the cart', async () => {

        await cartPage.specifyCountGalleryPage(4);
        //verify that the correct count of the item was added to the cart
        await expect(cartPage.itemCountInCart1).toHaveTextContaining("14");
        //verify that the product title was displayed in the cart
        await expect(cartPage.cartItemsList).toHaveTextContaining("Quality Pillow");
        await cartPage.rmvItem.click();
        await browser.pause(2000);
       
        
    });

    it('should navigate to the product detail pages of the third item in the gallery and add it to the cart', async () => {
        
        await cartPage.thirdItemImg.waitForDisplayed(1500);
        await cartPage.thirdItemImg.click();
        await browser.pause(2000);
        //verify that the browser is on the correct product detail page
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products/quality-mousepad');
        await cartPage.addToCartProductPage.waitForDisplayed(1500);
        await cartPage.addToCartProductPage.click();
        await browser.pause(1500);
        //verify that the product title is displayed in the cart
        await expect(cartPage.cartItemsList).toHaveTextContaining("Quality Mousepad");
        await cartPage.rmvItem.click();
        await cartPage.backToProducts.click();
        
    });

    it('should navigate to the product detail pages of the fourth item in the gallery use the arrows to increase & decrease the count of the product before adding it to the cart', async () => {
        
        await cartPage.fourthItem.waitForDisplayed(1500);
        await cartPage.fourthItem.click();
        await browser.pause(2000);
        //verify that the browser is on the correct product detail page
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products/quality-mug'); 
        await cartPage.increaseCountProductDetail(5);
        await cartPage.decreaseCountProductDetail(2);
        await cartPage.addToCartProductPage.click();
        await cartPage.cartItemsList.waitForDisplayed(1500);
        //verify that the product title is displayed in the cart
        await expect(cartPage.cartItemsList).toHaveTextContaining("Quality Mug");
        //verify that the correct product count is displayed in the cart
        await expect(cartPage.itemCountInCart1).toHaveTextContaining("4");
        await cartPage.rmvItem.click();
        await cartPage.backToProducts.click();
        await browser.pause(1500);
        
        
    });
    

    it('should enter a number in the text field on the product detail page then add the item to the cart', async () => {
        
        await cartPage.specifyCountDetailPage(6);
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products/quality-mousepad');
        await expect(cartPage.cartItemsList).toHaveTextContaining("Quality Mousepad","16");
        await expect(cartPage.itemCountInCart1).toHaveTextContaining("16");
        
       
        
    });


    
});