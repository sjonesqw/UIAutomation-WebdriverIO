const LoginPage = require('../pageobjects/Authentication/login.page');
const filterandsort = require('../pageobjects/filterandsort.page');
const categorydata = require('../data/categorydata');
const filterdata = require('../data/filterdata');


describe('My filter & sort tests ', () => {

    it('should login to the application ', async () => {
        

        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.pause(2000);
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        
        
    });


    for (const cat of categorydata){
        it ('should loop thru the list of categories and ensure that products displayed match the selected category', async () => {
             
             await filterandsort.selectCategory(cat.categoryTitle);
             await expect(filterandsort.productDetailsDiv).toHaveTextContaining(cat.identifier);
        });

        
    }  

    for (const val of filterdata){
        it ('should loop thru the list of filters and ensure that products displayed match the selected filter', async () => {
             
             await filterandsort.resetBtn.click();
             await filterandsort.selectFilter(val.filterTitle);
             await expect(filterandsort.firstProd).toHaveTextContaining(val.top);
             await expect(filterandsort.lastProd).toHaveTextContaining(val.bottom);
        });
        
    }

    
});