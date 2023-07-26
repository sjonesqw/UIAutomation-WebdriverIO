const LoginPage = require('../pageobjects/Authentication/login.page');
const cartpage = require('../pageobjects/addtocart.page');



describe('My add to cart tests. Verify that a user is able to add items to cart from the gallery page and from the product details page. Verify that a user is able to specify the number of items to add by using the arrows or entering a number in the text field', () => {

    it('should login to the application and add the first item on the page to the cart', async () => {
        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.pause(2000);
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        await cartpage.addSingleItem1();
        await expect(cartpage.cartItemsList).toHaveTextContaining("Quality Fitted Hat");
        await cartpage.rmvItem.click();
        await browser.pause(2000);
        
    });

    it('should use the arrows to increase & decrease the count of the product before adding it to the cart', async () => {
        
        await cartpage.increaseSecondItemCount(4);
        await cartpage.decreaseSecondItemCount(2);
        await cartpage.secondItemBtn.click();
        await cartpage.itemCountInCart1.waitForDisplayed();
        await expect(cartpage.itemCountInCart1).toHaveTextContaining("3");
        await expect(cartpage.cartItemsList).toHaveTextContaining("Quality Trucker Hat");
        await cartpage.rmvItem.click();
        await browser.pause(2000);

    });
    it('should enter a number in the text field then add the item  to the cart', async () => {

        await cartpage.specifyCountGalleryPage(4);
        await expect(cartpage.itemCountInCart1).toHaveTextContaining("14");
        await expect(cartpage.cartItemsList).toHaveTextContaining("Quality Pillow");
        await cartpage.rmvItem.click();
        await browser.pause(2000);
       
        
    });

    it('should navigate to the product detail pages of the third item in the gallery and add it to the cart', async () => {
        
        await cartpage.thirdItemImg.waitForDisplayed(1500);
        await cartpage.thirdItemImg.click();
        await browser.pause(2000);
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products/quality-mousepad');
        await cartpage.addToCartProductPage.waitForDisplayed(1500);
        await cartpage.addToCartProductPage.click();
        await browser.pause(1500);
        await expect(cartpage.cartItemsList).toHaveTextContaining("Quality Mousepad");
        await cartpage.rmvItem.click();
        await cartpage.backToProducts.click();
        
    });

    it('should navigate to the product detail pages of the fourth item in the gallery use the arrows to increase & decrease the count of the product before adding it to the cart', async () => {
        
        await cartpage.fourthItem.waitForDisplayed(1500);
        await cartpage.fourthItem.click();
        await browser.pause(2000);
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products/quality-mug'); 
        await cartpage.increaseCountProductDetail(5);
        await cartpage.decreaseCountProductDetail(2);
        await cartpage.addToCartProductPage.click();
        await cartpage.cartItemsList.waitForDisplayed(1500);
        await expect(cartpage.cartItemsList).toHaveTextContaining("Quality Mug");
        await expect(cartpage.itemCountInCart1).toHaveTextContaining("4");
        await cartpage.rmvItem.click();
        await cartpage.backToProducts.click();
        await browser.pause(1500);
        
        
    });
    

    it('should enter a number in the text field on the product detail page then add the item to the cart', async () => {
        
        await cartpage.specifyCountDetailPage(6);
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products/quality-mousepad');
        await expect(cartpage.cartItemsList).toHaveTextContaining("Quality Mousepad","16");
        await expect(cartpage.itemCountInCart1).toHaveTextContaining("16");
        
       
        
    });


    
});
