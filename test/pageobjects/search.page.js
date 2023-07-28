const Page = require('./page');


class search extends Page {
    
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
        
        
        
    }
    async clear (){
        // used the clear the search field after each iteration 
        await this.resetBtn.click();
    }

    
    open () {
        return super.open('/products');
        
    }
}

module.exports = new search();