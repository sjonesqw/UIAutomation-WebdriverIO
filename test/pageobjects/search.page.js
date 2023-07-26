const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class search extends Page {
    /**
     * define selectors using getter methods
     *  
     */
    get searchField (){
        return $('#search');
        
    }

    get productSpecs (){
        return $('.chakra-stack.css-n21gh5 > div > div.chakra-stack.css-1oeb4ru');
    }


    get resetBtn () {
       
        return $('#reset');
    }


    
    async search (term) {
        await this.searchField.scrollIntoView();
        await  this.searchField.click();
        await  this.searchField.setValue(term);
        //verify that search results match term
        await expect(this.productSpecs).toHaveTextContaining(term);
        //await this.resetbtn.click();
        
        
    }
    async clear (){

        //await this
        await this.resetBtn.click();
    }

    
    open () {
        return super.open('/products');
        //return super.open('customer/account/create/');
    }
}

module.exports = new search();