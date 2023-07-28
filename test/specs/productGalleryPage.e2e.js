const productGallery = require('../pageobjects/productGalleryPage.page');
const LoginPage = require('../pageobjects/Authentication/login.page');

describe(' Verifies that all header links on the product gallery homepage work ', () => {

    it('Should navigate to the favourites page from the product gallery homepage', async () =>{
        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        await productGallery.favouriteHat.click();
        await productGallery.navigateToFavourites();
        await expect(productGallery.hatTitle).toHaveText("Quality Fitted Hat");
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/favorites');
        await productGallery.navigateToHome();
    }); 

    it('Should navigate to the about page from the product gallery homepage', async () =>{
        await productGallery.navigateToAbout();
        await browser.switchWindow('https://qualityworkscg.com/automation-bootcamp/');
        await expect(browser).toHaveUrl('https://qualityworkscg.com/automation-bootcamp/');
        await browser.switchWindow('https://ui-automation-camp.vercel.app/products');
    }); 
    it('Should navigate to the contact page from the product gallery homepage', async () =>{
        await productGallery.navigateToContact();
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/contact');
    }); 
    it('Should signout of the website ', async () =>{
        await productGallery.signOut();
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/');
    });

    

});
