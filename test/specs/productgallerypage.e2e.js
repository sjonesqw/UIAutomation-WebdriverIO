const productGallery = require('../pageobjects/productGalleryPage.page');
const loginPage = require('../pageobjects/Authentication/login.page');

describe(' Verifies that all header links on the product gallery homepage work ', () => {

    it('Should navigate to the favourites page from the product gallery homepage', async () =>{
        await loginPage.open();
        await loginPage.login("test@mailinator.com", "Stephanie1!");
        //verify that the browser is on the products page
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        //add the hat to favourites
        await productGallery.favouriteHat.click();
        await productGallery.closePopUp.waitForDisplayed(1500);
        await productGallery.closePopUp.click();
        await productGallery.navigateToFavourites();
        //verify that th e hat is listed ont he favourites page
        await expect(productGallery.hatTitle).toHaveText("Quality Fitted Hat");
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/favorites');
        //go back to gallery homepage
        await productGallery.navigateToHome();
        await browser.pause(3000);
    }); 

    it('Should navigate to the about page from the product gallery homepage', async () =>{
        //navigate to the about page which is the qualityworks bootcamp page
        await productGallery.navigateToAbout();
        await browser.switchWindow('https://qualityworkscg.com/automation-bootcamp/');
        //verify that the browser is on the correct page
        await expect(browser).toHaveUrl('https://qualityworkscg.com/automation-bootcamp/');
        //switch back to the products page
        await browser.switchWindow('https://ui-automation-camp.vercel.app/products');
    }); 
    it('Should navigate to the contact page from the product gallery homepage', async () =>{
        //navigate to the contact page and verify that the URL is as expected 
        await productGallery.navigateToContact();
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/contact');
    }); 
    it('Should signout of the website ', async () =>{
        //signout of the automation website
        await productGallery.signOut();
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/');
    });

    

});