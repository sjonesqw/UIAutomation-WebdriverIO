const loginPage = require('../pageobjects/Authentication/login.page');
const filterAndSort = require('../pageobjects/filterAndSort.page');
const categoryData = require('../data/categoryData');
const filterData = require('../data/filterData');


describe('My filter & sort tests ', () => {
    //login to the application
    it('should login to the application ', async () => {
        

        await loginPage.open();
        await loginPage.login("test@mailinator.com", "Stephanie1!");
        await browser.pause(2000);
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');
        
        
    });

    //select each category from the list and verify that products displayed match selected categoy
    for (const cat of categoryData){
        it ('should loop thru the list of categories and ensure that products displayed match the selected category', async () => {
             
             await filterAndSort.selectCategory(cat.categoryTitle);
             await expect(filterAndSort.productDetailsDiv).toHaveTextContaining(cat.identifier);
        });

        
    }  
    //select each filter option from the list privded and verify that products are displayed based on the selected filter
    for (const val of filterData){
        it ('should loop thru the list of filters and ensure that products displayed match the selected filter', async () => {
             
             await filterAndSort.resetBtn.click();
             await filterAndSort.selectFilter(val.filterTitle);
             //verify that the first product displayed is as expected based on the selected filter
             await expect(filterAndSort.firstProd).toHaveTextContaining(val.top);
             //verify that the last product displayed is as expected based on the selected filter
             await expect(filterAndSort.lastProd).toHaveTextContaining(val.bottom);
        });
        
    }

    
});