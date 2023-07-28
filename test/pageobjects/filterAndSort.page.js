const Page = require('./page');

class filtersort extends Page {

    get sortOptionsBtn (){

        return $('#sort');
    }
    
    get resetBtn (){
        return $('#reset');
    }
    get category(){

        return $('#category');
    }
    
    get productDetailsDiv (){

        return $('.chakra-stack.css-n21gh5');
    }
    get firstProd (){

        return $('#product-0 > div.chakra-stack.css-n21gh5 ');
        
    }
    get lastProd (){
        return $('#product-21 > div.chakra-stack.css-n21gh5 ');
        
    }

    
    async selectCategory (category){
        await this.category.scrollIntoView();
        await this.category.waitForClickable(2000);
        await this.category.selectByAttribute("value",category);

    }

    async selectFilter (filter){
        await this.sortOptionsBtn.scrollIntoView();
        await this.sortOptionsBtn.waitForClickable(2000);
        await this.sortOptionsBtn.selectByAttribute("value",filter);

    }
    

}

module.exports = new filtersort ();
