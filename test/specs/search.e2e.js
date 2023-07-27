const LoginPage = require('../pageobjects/Authentication/login.page');
const search = require('../pageobjects/search.page');
const searchdata = require('../data/searchData');


describe('My filter & sort test ', () => {
    it ('should login to the application', async () =>{

        await LoginPage.open();
        await LoginPage.login("test@mailinator.com", "Stephanie1!");
        await expect( browser).toHaveUrl('https://ui-automation-camp.vercel.app/products');

    });
    
    for (const inputterm of searchdata){
        it(' should naviagate to the product gallery page and search for items from the search data file', async () => {
            
            //loop thru search terms and verify that results displayed match
            await search.search(inputterm.searchterm);
            await search.clear();
            
            
        });
    }
    
});